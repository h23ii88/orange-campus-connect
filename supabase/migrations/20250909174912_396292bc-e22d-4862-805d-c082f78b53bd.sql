-- Create admin user entry in user_roles table
-- First, let's check if we have an existing user we can make admin
-- We'll use the admin@example.com user and give them admin role

-- Insert admin role for existing user (admin@example.com)
INSERT INTO user_roles (user_id, role) 
SELECT id, 'admin'::app_role 
FROM auth.users 
WHERE email = 'admin@example.com'
ON CONFLICT (user_id, role) DO NOTHING;

-- If no admin@example.com exists, we'll create a manual entry
-- You can also manually create an admin user via the signup form with admin key "ADMIN2024"