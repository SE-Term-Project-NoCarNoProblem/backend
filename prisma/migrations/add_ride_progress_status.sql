-- Create the enum type for ride progress status
CREATE TYPE ride_progress_status AS ENUM ('accepted', 'on_the_way', 'arrived', 'picked_up', 'completed');

-- Add the column to the ride table with a default value
ALTER TABLE ride ADD COLUMN ride_progress_status ride_progress_status NOT NULL DEFAULT 'accepted';
