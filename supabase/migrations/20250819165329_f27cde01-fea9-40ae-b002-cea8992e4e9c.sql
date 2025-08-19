-- Create an admin user manually (replace with actual email after signup)
-- First, you need to sign up with this email, then this will assign admin role
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role 
FROM auth.users 
WHERE email = 'admin@example.com'  -- Replace with your admin email
ON CONFLICT (user_id, role) DO NOTHING;