-- Remove 'accepted' from ride_progress_status enum

-- First, update any existing rows with 'accepted' status to 'on_the_way'
UPDATE ride SET ride_progress_status = 'on_the_way' WHERE ride_progress_status = 'accepted';

-- Alter the enum to remove 'accepted'
ALTER TYPE ride_progress_status RENAME TO ride_progress_status_old;
CREATE TYPE ride_progress_status AS ENUM ('on_the_way', 'arrived', 'picked_up', 'completed');
ALTER TABLE ride ALTER COLUMN ride_progress_status DROP DEFAULT;
ALTER TABLE ride ALTER COLUMN ride_progress_status TYPE ride_progress_status USING ride_progress_status::text::ride_progress_status;
ALTER TABLE ride ALTER COLUMN ride_progress_status SET DEFAULT 'on_the_way';
DROP TYPE ride_progress_status_old;
