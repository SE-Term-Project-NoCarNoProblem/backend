import { Request, Response } from 'express';
import {
  uploadProfilePicture,
  deleteProfilePicture,
  uploadIdPicture,
  getIdPicture,
  uploadLicensePicture,
  getLicensePicture
} from '../src/controllers/profile.controller';
import { prisma } from '../src/lib/prisma';
import { supabase } from '../src/lib/supabase';
import { logger } from '../src/utils/logger';

// --- (1) Mock Dependencies ---
// Mock Prisma
jest.mock('../src/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    driver: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    verified_driver: {
      delete: jest.fn(),
    },
    waiting_driver: {
      create: jest.fn(),
    },
  },
}));

// Mock Supabase
const mockStorageFrom = {
  upload: jest.fn(),
  getPublicUrl: jest.fn(),
  remove: jest.fn(),
  createSignedUrl: jest.fn(),
};
jest.mock('../src/lib/supabase', () => ({
  supabase: {
    storage: {
      from: jest.fn(() => mockStorageFrom),
    },
  },
}));

// Mock Logger
jest.mock('../src/utils/logger', () => ({
  logger: {
    info: jest.fn(),
    error: jest.fn(),
  },
}));

// --- (2) Mocked Instances ---
const mockedPrisma = prisma as jest.Mocked<typeof prisma>;
const mockedSupabase = supabase as jest.Mocked<typeof supabase>;
const mockedLogger = logger as jest.Mocked<typeof logger>;
const mockedStorage = mockStorageFrom as jest.Mocked<typeof mockStorageFrom>;


// --- (3) Mock Request/Response Objects ---
let mockRequest: Partial<Request>;
let mockResponse: Partial<Response>;
let mockResJson: jest.Mock;
let mockResStatus: jest.Mock;

// Setup to run before each test
beforeEach(() => {
  jest.clearAllMocks();

  mockResJson = jest.fn();
  mockResStatus = jest.fn(() => ({
    json: mockResJson,
  }));

  mockRequest = {
    file: undefined,
  };
  mockResponse = {
    locals: {
      user: { 
        id: 'test-user-id',
        email: 'test@example.com',
      },
    },
    status: mockResStatus,
    json: mockResJson,
  };
});

// --- (4) Test Suites ---
describe('Profile Controller', () => {
  
  // --- Test uploadProfilePicture ---
  describe('uploadProfilePicture', () => {

    const mockFile = {
      buffer: Buffer.from('test'),
      mimetype: 'image/jpeg',
      size: 1024 * 1024, // 1MB
    } as Express.Multer.File;

    const mockUser = {
      id: 'test-user-id',
      fullname: 'Test User',
      email: 'test@example.com',
      phone_number: '123456789',
      profile_pic: 'http://example.com/new-pic.webp',
      driver: null,
    };

    it('should upload profile picture successfully for a normal user', async () => {
      // (Setup)
      mockRequest.file = mockFile;

      // Mock Supabase calls
      mockedStorage.upload.mockResolvedValue({ data: { path: 'path' }, error: null });
      mockedStorage.getPublicUrl.mockResolvedValue({
        data: { publicUrl: 'http://example.com/new-pic.webp' },
      });

      // Mock Prisma call
      (mockedPrisma.user.update as jest.Mock).mockResolvedValue(mockUser);

      // (Act)
      await uploadProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockedSupabase.storage.from).toHaveBeenCalledWith('profile_pic');
      expect(mockedStorage.upload).toHaveBeenCalledWith(
        'test-user-id/avatar.webp',
        mockFile.buffer,
        expect.anything()
      );
      expect(mockedPrisma.user.update).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 'test-user-id' },
          data: { profile_pic: 'http://example.com/new-pic.webp' },
        })
      );
      expect(mockResStatus).toHaveBeenCalledWith(200);
      expect(mockResJson).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Profile picture uploaded successfully',
          profilePicUrl: 'http://example.com/new-pic.webp',
        })
      );
    });

    it('should move verified driver to waiting status when uploading', async () => {
      // (Setup)
      mockRequest.file = mockFile;

      const mockDriverUser = {
        ...mockUser,
        driver: {
          verified_driver: { id: 'test-user-id', status: 'free' },
        },
      };

      // Mock Supabase
      mockedStorage.upload.mockResolvedValue({ data: { path: 'path' }, error: null });
      mockedStorage.getPublicUrl.mockResolvedValue({
        data: { publicUrl: 'http://example.com/new-pic.webp' },
      });

      // Mock Prisma
      (mockedPrisma.user.update as jest.Mock).mockResolvedValue(mockDriverUser); // User with driver
      (mockedPrisma.verified_driver.delete as jest.Mock).mockResolvedValue({ id: 'test-user-id' });
      (mockedPrisma.waiting_driver.create as jest.Mock).mockResolvedValue({ id: 'test-user-id' });

      // (Act)
      await uploadProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockedPrisma.verified_driver.delete).toHaveBeenCalledWith({
        where: { id: 'test-user-id' },
      });
      expect(mockedPrisma.waiting_driver.create).toHaveBeenCalled();
      expect(mockResStatus).toHaveBeenCalledWith(200);
      expect(mockResJson).toHaveBeenCalledWith(
        expect.objectContaining({
          driverStatusUpdated: true,
          statusMessage: 'Driver moved from verified to waiting status',
        })
      );
      expect(mockedLogger.info).toHaveBeenCalledWith('Driver moved to waiting status for user test-user-id');
    });

    it('should return 400 for invalid file type', async () => {
      // (Setup)
      // Simulate .pdf file upload
      mockRequest.file = { 
        ...mockFile, 
        mimetype: 'application/pdf' 
      };

      // (Act)
      await uploadProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(400);
      expect(mockResJson).toHaveBeenCalledWith({
        error: 'Invalid file type. Only JPEG, PNG, and WebP are allowed'
      });
      expect(mockedStorage.upload).not.toHaveBeenCalled(); // Make sure upload not called
    });

    it('should return 401 if user is not authenticated', async () => {
      // (Setup)
      mockResponse.locals = { user: undefined}; // No user

      // (Act)
      await uploadProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(401);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'User not authenticated' });
    });

    it('should return 400 if no file is uploaded', async () => {
      // (Setup)
      mockRequest.file = undefined; // No file

      // (Act)
      await uploadProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(400);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'No file uploaded' });
    });

    it('should return 400 if file is too large', async () => {
      // (Setup)
      mockRequest.file = { ...mockFile, size: 6 * 1024 * 1024 }; // 6MB

      // (Act)
      await uploadProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(400);
      expect(mockResJson).toHaveBeenCalledWith({
        error: 'File too large. Maximum file size is 5MB',
      });
    });

    it('should return 500 if supabase upload fails', async () => {
      // (Setup)
      mockRequest.file = mockFile;
      const uploadError = new Error('Supabase Error');
      mockedStorage.upload.mockResolvedValue({ data: null, error: uploadError });

      // (Act)
      await uploadProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(500);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'Failed to upload file' });
      expect(mockedLogger.error).toHaveBeenCalledWith('Storage upload error:', uploadError);
    });

    it('should return 500 if prisma update fails', async () => {
      // (Setup)
      mockRequest.file = mockFile;
      const dbError = new Error('Database Error');
      mockedStorage.upload.mockResolvedValue({ data: { path: 'path' }, error: null });
      mockedStorage.getPublicUrl.mockResolvedValue({
        data: { publicUrl: 'http://example.com/new-pic.webp' },
      });
      (mockedPrisma.user.update as jest.Mock).mockRejectedValue(dbError); // Prisma fails

      // (Act)
      await uploadProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(500);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'Internal server error' });
      expect(mockedLogger.error).toHaveBeenCalledWith('Profile picture update error:', dbError);
    });
  });

  // --- Test deleteProfilePicture ---
  describe('deleteProfilePicture', () => {

    it('should delete profile picture successfully', async () => {
      // (Setup)
      // Mock that user has a profile picture
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({
        profile_pic: 'http://example.com/old-pic.webp',
      });
      // Mock Supabase delete success
      mockedStorage.remove.mockResolvedValue({ data: {}, error: null });
      // Mock Prisma update success
      (mockedPrisma.user.update as jest.Mock).mockResolvedValue({
        id: 'test-user-id',
        fullname: 'Test User',
        email: 'test@example.com',
        phone_number: '123456789',
        profile_pic: null, // No profile pic after deletion
      });

      // (Act)
      await deleteProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockedSupabase.storage.from).toHaveBeenCalledWith('profile_pic');
      expect(mockedStorage.remove).toHaveBeenCalledWith(['test-user-id/avatar.webp']);
      expect(mockedPrisma.user.update).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 'test-user-id' },
          data: { profile_pic: null },
        })
      );
      expect(mockResStatus).toHaveBeenCalledWith(200);
      expect(mockResJson).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Profile picture deleted successfully',
        })
      );
    });

    it('should return 400 if user has no profile picture to delete', async () => {
      // (Setup)
      // Mock that user has no profile picture
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({ profile_pic: null });

      // (Act)
      await deleteProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(400);
      expect(mockResJson).toHaveBeenCalledWith({
        error: 'User has no profile picture to delete',
      });
    });

    it('should return 401 if user is not authenticated', async () => {
      // (Setup)
      mockResponse.locals = { user: undefined }; // No user

      // (Act)
      await deleteProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(401);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'User not authenticated' });
      expect(mockedPrisma.user.findUnique).not.toHaveBeenCalled(); // Ensure it exits early
    });

    it('should return 404 if file not found in storage during delete', async () => {
      // (Setup)
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({
        profile_pic: 'http://example.com/old-pic.webp',
      });
      // Mock Supabase delete failure
      const deleteError = new Error('File not found');
      mockedStorage.remove.mockResolvedValue({ data: null, error: deleteError });

      // (Act)
      await deleteProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(404);
      expect(mockResJson).toHaveBeenCalledWith({
        error: 'Profile picture file not found in storage',
      });
    });

    it('should return 404 if user not found in database', async () => {
      // (Setup)
      // Simulate user not found
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue(null);

      // (Act)
      await deleteProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(404);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'User not found' });
    });

    it('should return 500 if storage delete fails with a generic error', async () => {
      // (Setup)
      const genericError = new Error('Something broke');
      // Mock that user has a profile picture
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({
        profile_pic: 'http://example.com/old-pic.webp',
      });
      // *** Simulate Supabase remove failing with a generic error ***
      mockedStorage.remove.mockResolvedValue({ data: null, error: genericError });

      // (Act)
      await deleteProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(500);
      expect(mockResJson).toHaveBeenCalledWith({
        error: 'Failed to delete profile picture from storage'
      });
      expect(mockedLogger.error).toHaveBeenCalledWith('Storage delete error:', genericError);
    });

    it('should return 500 if prisma update fails', async () => {
      // (Setup)
      const dbError = new Error('Database Error');
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({
        profile_pic: 'http://example.com/old-pic.webp',
      });
      mockedStorage.remove.mockResolvedValue({ data: {}, error: null });
      // *** Simulate Prisma failing ***
      (mockedPrisma.user.update as jest.Mock).mockRejectedValue(dbError);

      // (Act)
      await deleteProfilePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(500);
      expect(mockedLogger.error).toHaveBeenCalledWith('Profile picture delete error:', dbError);
    });
  });
  
  // --- (Mock File Helper) ---
  // Create a mock file to be used in tests
  const mockFile = {
    buffer: Buffer.from('test file content'),
    mimetype: 'image/jpeg',
    size: 1024 * 1024, // 1MB
  } as Express.Multer.File;

  // --- Test uploadIdPicture ---
  describe('uploadIdPicture', () => {

    it('should upload id picture successfully and move verified driver to waiting', async () => {
      // (Setup)
      mockRequest.file = mockFile;
      
      // 1. Mock that user is a verified driver
      (mockedPrisma.driver.findUnique as jest.Mock).mockResolvedValue({
        id: 'test-user-id',
        verified_driver: { id: 'test-user-id' }
      });
      // 2. Mock Supabase
      mockedStorage.upload.mockResolvedValue({ data: { path: 'path' }, error: null });
      mockedStorage.getPublicUrl.mockResolvedValue({
        data: { publicUrl: 'http://example.com/id.webp' },
      });
      // 3. Mock move from verified to waiting
      (mockedPrisma.verified_driver.delete as jest.Mock).mockResolvedValue({ id: 'test-user-id' });
      (mockedPrisma.waiting_driver.create as jest.Mock).mockResolvedValue({ id: 'test-user-id' });
      // 4. Mock user update and return driver object
      (mockedPrisma.user.update as jest.Mock).mockResolvedValue({ 
        id: 'test-user-id', 
        id_pic: 'test-user-id/id_document.webp',
        driver: {
            verified_driver: { id: 'test-user-id', status: 'free' } 
        }
      });

      // (Act)
      await uploadIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockedSupabase.storage.from).toHaveBeenCalledWith('id_pic');
      expect(mockedStorage.upload).toHaveBeenCalledWith(
        'test-user-id/id_document.webp',
        mockFile.buffer,
        expect.anything()
      );
      // Verify that verified driver is deleted and waiting driver is created
      expect(mockedPrisma.verified_driver.delete).toHaveBeenCalledWith({
        where: { id: 'test-user-id' },
      });
      expect(mockedPrisma.waiting_driver.create).toHaveBeenCalled();

      expect(mockResJson).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'ID picture uploaded successfully',
          driverStatusUpdated: true,
          user: expect.objectContaining({
            id_pic: 'test-user-id/id_document.webp' 
          })
        })
      );
    });

    it('should upload id picture successfully for a NON-verified driver (no status move)', async () => {
      // (Setup)
      mockRequest.file = mockFile;
      
      // 1. Mock that user is a non-verified driver
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({ 
        id: 'test-user-id', 
        id_pic: null,
        driver: {
          id: 'test-user-id', 
          verified_driver: null
        } 
      });

      // 2. Mock Supabase
      mockedStorage.upload.mockResolvedValue({ data: { path: 'path' }, error: null });

      // 3. Mock that user is updated successfully
      (mockedPrisma.user.update as jest.Mock).mockResolvedValue({
        id: 'test-user-id',
        id_pic: 'test-user-id/id_document.webp',
        driver: {
          id: 'test-user-id',
          verified_driver: null 
        }
      });

      // (Act)
      await uploadIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      // 1. Verify upload called
      expect(mockResStatus).toHaveBeenCalledWith(200);
      expect(mockedPrisma.user.update).toHaveBeenCalled();

      // 2. *** Verify that verified driver is NOT deleted and waiting driver is NOT created ***
      expect(mockedPrisma.verified_driver.delete).not.toHaveBeenCalled();
      expect(mockedPrisma.waiting_driver.create).not.toHaveBeenCalled();
      

      // 3. Verify response does NOT have 'driverStatusUpdated'
      expect(mockResJson.mock.calls[0][0]).not.toHaveProperty('driverStatusUpdated');
    });

    it('should return 400 for invalid file type', async () => {
      // (Setup)
      mockRequest.file = { ...mockFile, mimetype: 'application/pdf' }; // .pdf

      // (Act)
      await uploadIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(400);
      expect(mockResJson).toHaveBeenCalledWith({
        error: 'Invalid file type. Only JPEG, PNG, and WebP are allowed'
      });
    });

    it('should return 400 if no file is uploaded', async () => {
      // (Setup)
      mockRequest.file = undefined; // No file

      // (Act)
      await uploadIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(400);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'No file uploaded' });
    });

    it('should return 400 if file is too large', async () => {
      // (Setup)
      mockRequest.file = { ...mockFile, size: 6 * 1024 * 1024 }; // 6MB

      // (Act)
      await uploadIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(400);
      expect(mockResJson).toHaveBeenCalledWith(
         expect.objectContaining({ error: 'File too large. Maximum file size is 5MB' })
      );
    });

    it('should return 400 if ID picture already exists', async () => {
      // (Setup)
      mockRequest.file = mockFile;
      // Simulate that user already has an ID picture
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({
        id: 'test-user-id',
        id_pic: 'path/to/existing-id.webp',
        driver: null
      });

      // (Act)
      await uploadIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(400);
      expect(mockResJson).toHaveBeenCalledWith(
         expect.objectContaining({ error: 'ID picture already exists. Please delete the existing one before uploading a new one.' })
      );
    });

    it('should return 401 if user is not authenticated', async () => {
      // (Setup)
      mockResponse.locals = { user: undefined }; // No user

      // (Act)
      await uploadIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(401);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'User not authenticated' });
      expect(mockedPrisma.user.findUnique).not.toHaveBeenCalled(); // Ensure it exits early
    });

    it('should return 500 if supabase upload fails', async () => {
      // (Setup)
      mockRequest.file = mockFile;
      const uploadError = new Error('Supabase Error');
      // Mock that user has no existing ID picture
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({ id: 'test-user-id', id_pic: null, driver: null });
      // *** Simulate Supabase upload failure ***
      mockedStorage.upload.mockResolvedValue({ data: null, error: uploadError });

      // (Act)
      await uploadIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(500);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'Failed to upload file' });
    });

    it('should return 500 if prisma update fails', async () => {
      // (Setup)
      mockRequest.file = mockFile;
      const dbError = new Error('Database Error');
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({ id: 'test-user-id', id_pic: null, driver: null });
      mockedStorage.upload.mockResolvedValue({ data: { path: 'path' }, error: null });
      // *** Simulate Prisma failing ***
      (mockedPrisma.user.update as jest.Mock).mockRejectedValue(dbError);

      // (Act)
      await uploadIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(500);
      expect(mockedLogger.error).toHaveBeenCalledWith('ID picture update error:', dbError);
    });
  });

  // --- Test getIdPicture ---
  describe('getIdPicture', () => {

    it('should get id picture URL successfully', async () => {
      // (Setup)
      // 1. Mock that user has an ID picture
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({
        id: 'test-user-id',
        id_pic: 'test-user-id/id_document.webp' 
      });
      // 2. Mock createSignedUrl
      mockedStorage.createSignedUrl.mockResolvedValue({
        data: { signedUrl: 'http://supabase.com/signed-url-for-id' },
        error: null
      });

      // (Act)
      await getIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockedSupabase.storage.from).toHaveBeenCalledWith('id_pic');
      expect(mockedStorage.createSignedUrl).toHaveBeenCalledWith(
        'test-user-id/id_document.webp',
        3600 // 1 hour
      );
      expect(mockResStatus).toHaveBeenCalledWith(200);
      expect(mockResJson).toHaveBeenCalledWith(
        expect.objectContaining({
          idPicUrl: 'http://supabase.com/signed-url-for-id',
        })
      );
    });

    it('should return 401 if user is not authenticated', async () => {
      // (Setup)
      mockResponse.locals = { user: undefined }; // No user

      // (Act)
      await getIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(401);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'User not authenticated' });
      expect(mockedPrisma.user.findUnique).not.toHaveBeenCalled(); // Ensure it exits early
    });

    it('should return 404 if driver has no id picture', async () => {
      // (Setup)
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({
        id: 'test-user-id',
        id_pic: null
      });

      // (Act)
      await getIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(404);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'User has no ID picture' });
    });

    it('should return 404 if user not found in database', async () => {
      // (Setup)
      // Simulate user not found
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue(null);

      // (Act)
      await getIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(404);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'User not found' });
    });

    it('should return 500 if signed URL creation fails', async () => {
      // (Setup)
      const signError = new Error('Supabase Sign Error');
      // Mock that user has an ID picture
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({
        id: 'test-user-id',
        id_pic: 'test-user-id/id_document.webp',
        driver: null
      });
      // *** Simulate createSignedUrl failure ***
      mockedStorage.createSignedUrl.mockResolvedValue({
        data: null,
        error: signError
      });

      // (Act)
      await getIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(500);
      expect(mockResJson).toHaveBeenCalledWith({
        error: 'Failed to generate access URL for ID picture'
      });
    });

    it('should return 500 if prisma findUnique fails', async () => {
      // (Setup)
      const dbError = new Error('Database Error');
      // *** Simulate Prisma failing ***
      (mockedPrisma.user.findUnique as jest.Mock).mockRejectedValue(dbError);

      // (Act)
      await getIdPicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(500);
      expect(mockedLogger.error).toHaveBeenCalledWith('ID picture retrieval error:', dbError);
    });
  });

  // --- Test uploadLicensePicture ---
  describe('uploadLicensePicture', () => {

    it('should upload license picture successfully and move verified driver to waiting', async () => {
      // (Setup)
      mockRequest.file = mockFile;
      
      // 1. Mock USER.findUnique (passing all 3 IF checks)
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({ 
        id: 'test-user-id', 
        id_pic: 'path/to/id_pic.webp',
        driver: {
          id: 'test-user-id', 
          license_pic: null,
          verified_driver: { id: 'test-user-id' }
        } 
      });
      // 2. Mock Supabase
      mockedStorage.upload.mockResolvedValue({ data: { path: 'path' }, error: null });
      // 3. Mock DRIVER.update (Controller calls this to save)
      (mockedPrisma.driver.update as jest.Mock).mockResolvedValue({ 
        id: 'test-user-id', 
        license_pic: 'test-user-id/license_document.webp',
        verified_driver: { id: 'test-user-id', status: 'free' },
        user: { id: 'test-user-id' }
      });
      // 4. Mock move from verified to waiting
      (mockedPrisma.verified_driver.delete as jest.Mock).mockResolvedValue({ id: 'test-user-id' });
      (mockedPrisma.waiting_driver.create as jest.Mock).mockResolvedValue({ id: 'test-user-id' });

      // (Act)
      await uploadLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockedSupabase.storage.from).toHaveBeenCalledWith('license_pic');
      expect(mockedStorage.upload).toHaveBeenCalled();
      expect(mockedPrisma.driver.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: { license_pic: 'test-user-id/license_document.webp' },
        })
      );
      expect(mockedPrisma.verified_driver.delete).toHaveBeenCalled();
      expect(mockedPrisma.waiting_driver.create).toHaveBeenCalled();
      expect(mockResStatus).toHaveBeenCalledWith(200);
      expect(mockResJson).toHaveBeenCalledWith(
        expect.objectContaining({
          driverStatusUpdated: true,
        })
      );
    });

    it('should upload license picture for a non-verified driver', async () => {
      // (Setup)
      mockRequest.file = mockFile;
      
      // 1. Mock USER.findUnique (Passing all 3 IF checks)
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({ 
        id: 'test-user-id', 
        id_pic: 'path/to/id_pic.webp',
        driver: {
          id: 'test-user-id', 
          license_pic: null,
          verified_driver: null
        } 
      });
      // 2. Mock Supabase
      mockedStorage.upload.mockResolvedValue({ data: { path: 'path' }, error: null });
      // 3. Mock DRIVER.update
      (mockedPrisma.driver.update as jest.Mock).mockResolvedValue({ 
        id: 'test-user-id', 
        license_pic: 'test-user-id/license_document.webp',
        verified_driver: null,
        user: { id: 'test-user-id' }
      });

      // (Act)
      await uploadLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockedSupabase.storage.from).toHaveBeenCalledWith('license_pic');
      expect(mockedStorage.upload).toHaveBeenCalled();
      expect(mockedPrisma.driver.update).toHaveBeenCalled();
      // Verify that verified driver is NOT deleted and waiting driver is NOT created
      expect(mockedPrisma.verified_driver.delete).not.toHaveBeenCalled();
      expect(mockedPrisma.waiting_driver.create).not.toHaveBeenCalled();
      expect(mockResStatus).toHaveBeenCalledWith(200);
      expect(mockResJson).toHaveBeenCalledWith(
       expect.objectContaining({
         // 1. Check message
         message: 'License picture uploaded successfully',
         
         // 2. Check that response has 'driver' object with updated 'license_pic'
         driver: expect.objectContaining({
            license_pic: 'test-user-id/license_document.webp'
         })
       })
      );

      // 4. (Additional check) Ensure response does NOT have 'driverStatusUpdated'
      expect(mockResJson.mock.calls[0][0]).not.toHaveProperty('driverStatusUpdated');
    });

    it('should return 400 if no file is uploaded', async () => {
      // (Setup)
      mockRequest.file = undefined; // No file

      // (Act)
      await uploadLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(400);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'No file uploaded' });
    });

    it('should return 400 if file is too large', async () => {
      // (Setup)
      mockRequest.file = { ...mockFile, size: 6 * 1024 * 1024 }; // 6MB

      // (Act)
      await uploadLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(400);
      expect(mockResJson).toHaveBeenCalledWith(
         expect.objectContaining({ error: 'File too large. Maximum file size is 5MB' })
      );
    });

    it('should return 400 if license picture already exists', async () => {
      // (Setup)
      mockRequest.file = mockFile;
      
      // 1. Mock USER.findUnique (to pass first 2 IF checks)
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({ 
        id: 'test-user-id', 
        id_pic: 'path/to/id_pic.webp',
        driver: { 
          id: 'test-user-id', 
          license_pic: 'path/to/existing-license.webp',
          verified_driver: null 
        } 
      });

      // (Act)
      await uploadLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(400);
      expect(mockResJson).toHaveBeenCalledWith(
       expect.objectContaining({ error: 'License picture already exists. Please delete the existing one before uploading a new one.' })
      );
    });

    it('should return 400 if user has not uploaded ID pic yet', async () => {
      // (Setup)
      mockRequest.file = mockFile;
      // Simulate that user has no ID picture
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({ 
        id: 'test-user-id', 
        id_pic: null,
        driver: {
          id: 'test-user-id', 
          license_pic: null, 
          verified_driver: null 
        } 
      });

      // (Act)
      await uploadLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(400);
      expect(mockResJson).toHaveBeenCalledWith({
        error: 'ID picture is required before uploading license picture'
      });
    });

    it('should return 400 for invalid file type', async () => {
      // (Setup)
      // Simulate .pdf file
      mockRequest.file = { ...mockFile, mimetype: 'application/pdf' };
      // Mock to pass first 2 IF checks (has id_pic and is a driver)
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({ 
        id: 'test-user-id', 
        id_pic: 'path/to/id.webp', 
        driver: { 
          id: 'test-user-id', 
          license_pic: null, 
          verified_driver: null 
        } 
      });

      // (Act)
      await uploadLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(400);
      expect(mockResJson).toHaveBeenCalledWith({
        error: 'Invalid file type. Only JPEG, PNG, and WebP are allowed'
      });
    });

    it('should return 401 if user is not authenticated', async () => {
      // (Setup)
      mockResponse.locals = { user: undefined }; // No user

      // (Act)
      await uploadLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(401);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'User not authenticated' });
      expect(mockedPrisma.user.findUnique).not.toHaveBeenCalled(); // Ensure it exits early
    });

    it('should return 403 if user is not a driver', async () => {
      // (Setup)
      // 1. Simulate that a file is attached
      mockRequest.file = mockFile; 

      // 2. Simulate USER.findUnique (Controller calls this) to return a user without a driver object
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({
        id: 'test-user-id',
        id_pic: 'path/to/id.webp', // have id_pic (to pass 400 check)
        driver: null // This is main point causing 403
      });

      // (Act)
      await uploadLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      // 1. Verify that it returns 403
      expect(mockResStatus).toHaveBeenCalledWith(403);
      
      // 2. Verify correct error message
      expect(mockResJson).toHaveBeenCalledWith({ 
        error: 'Only drivers can upload license pictures' 
      });

      // 3. Verify that it exited before trying to upload to Supabase
      expect(mockedStorage.upload).not.toHaveBeenCalled();
    });

    it('should return 500 if supabase upload fails', async () => {
      // (Setup)
      mockRequest.file = mockFile;
      const uploadError = new Error('Supabase Error');
      // Mock to pass first 2 IF checks (has id_pic and is a driver)
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({ 
        id: 'test-user-id', 
        id_pic: 'path/to/id.webp', 
        driver: { id: 'test-user-id', license_pic: null, verified_driver: null } 
      });
      // *** Simulate Supabase upload failure ***
      mockedStorage.upload.mockResolvedValue({ data: null, error: uploadError });

      // (Act)
      await uploadLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(500);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'Failed to upload file' });
    });

    it('should return 500 if prisma update fails', async () => {
      // (Setup)
      mockRequest.file = mockFile;
      const dbError = new Error('Database Error');
      (mockedPrisma.user.findUnique as jest.Mock).mockResolvedValue({ 
        id: 'test-user-id', 
        id_pic: 'path/to/id.webp', 
        driver: { id: 'test-user-id', license_pic: null, verified_driver: null } 
      });
      mockedStorage.upload.mockResolvedValue({ data: { path: 'path' }, error: null });
      // *** Simulate Prisma failing ***
      (mockedPrisma.driver.update as jest.Mock).mockRejectedValue(dbError);

      // (Act)
      await uploadLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(500);
      expect(mockedLogger.error).toHaveBeenCalledWith('License picture update error:', dbError);
    });
  });

  // --- Test getLicensePicture ---
  describe('getLicensePicture', () => {

    it('should get signed URL for license picture successfully', async () => {
      // (Setup)
      // 1. Mock that user is a driver with a license picture
      (mockedPrisma.driver.findUnique as jest.Mock).mockResolvedValue({
        id: 'test-user-id',
        license_pic: 'test-user-id/license_pic.webp'
      });
      // 2. Mock createSignedUrl
      mockedStorage.createSignedUrl.mockResolvedValue({
        data: { signedUrl: 'http://supabase.com/signed-url-for-license' },
        error: null
      });

      // (Act)
      await getLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockedSupabase.storage.from).toHaveBeenCalledWith('license_pic');
      expect(mockedStorage.createSignedUrl).toHaveBeenCalledWith(
        'test-user-id/license_pic.webp',
        3600 // 1 hour
      );
      expect(mockResStatus).toHaveBeenCalledWith(200);
      expect(mockResJson).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'License picture retrieved successfully',
          licensePicUrl: 'http://supabase.com/signed-url-for-license',
        })
      );
    });

    it('should return 401 if user is not authenticated', async () => {
      // (Setup)
      mockResponse.locals = { user: undefined }; // No user

      // (Act)
      await getLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(401);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'User not authenticated' });
      expect(mockedPrisma.user.findUnique).not.toHaveBeenCalled(); // Ensure it exits early
    });

    it('should return 403 if user is not a driver', async () => {
      // (Setup)
      // Simulate that user is not a driver
      (mockedPrisma.driver.findUnique as jest.Mock).mockResolvedValue(null);

      // (Act)
      await getLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(403);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'User is not a driver' });
      expect(mockedStorage.createSignedUrl).not.toHaveBeenCalled(); // เช็คว่าออกก่อน
    });

    it('should return 404 if driver has no license picture', async () => {
      // (Setup)
      (mockedPrisma.driver.findUnique as jest.Mock).mockResolvedValue({
        id: 'test-user-id',
        license_pic: null
      });

      // (Act)
      await getLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(404);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'Driver has no license picture' });
    });

    it('should return 500 if signed URL creation fails', async () => {
      // (Setup)
      const signError = new Error('Supabase Sign Error');
      (mockedPrisma.driver.findUnique as jest.Mock).mockResolvedValue({
        id: 'test-user-id',
        license_pic: 'test-user-id/license_pic.webp'
      });
      mockedStorage.createSignedUrl.mockResolvedValue({
        data: null,
        error: signError
      });

      // (Act)
      await getLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(500);
      expect(mockResJson).toHaveBeenCalledWith({
        error: 'Failed to generate access URL for license picture'
      });
      expect(mockedLogger.error).toHaveBeenCalledWith('Signed URL creation error:', signError);
    });

    it('should return 500 if prisma findUnique fails', async () => {
      // (Setup)
      const dbError = new Error('Database Error');
      // *** Simulate Prisma.driver.findUnique failing ***
      (mockedPrisma.driver.findUnique as jest.Mock).mockRejectedValue(dbError);

      // (Act)
      await getLicensePicture(mockRequest as Request, mockResponse as Response);

      // (Assert)
      expect(mockResStatus).toHaveBeenCalledWith(500);
      expect(mockResJson).toHaveBeenCalledWith({ error: 'Internal server error' });
      expect(mockedLogger.error).toHaveBeenCalledWith('License picture retrieval error:', dbError);
    });
  });
});