-- Create the storage bucket 'menu-images'
INSERT INTO storage.buckets (id, name, public)
VALUES ('menu-images', 'menu-images', true)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS
-- (Storage policies are usually handled differently, but ensuring headers)

-- POLICY 1: Public Read Access
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'menu-images' );

-- POLICY 2: Authenticated Upload Access (Admins)
CREATE POLICY "Authenticated Upload"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'menu-images'
  AND auth.role() = 'authenticated'
);

-- POLICY 3: Authenticated Update/Delete
CREATE POLICY "Authenticated Update"
ON storage.objects FOR UPDATE
USING ( bucket_id = 'menu-images' AND auth.role() = 'authenticated' );

CREATE POLICY "Authenticated Delete"
ON storage.objects FOR DELETE
USING ( bucket_id = 'menu-images' AND auth.role() = 'authenticated' );

-- Success Message
SELECT 'Storage bucket "menu-images" created and policies configured.' as status;
