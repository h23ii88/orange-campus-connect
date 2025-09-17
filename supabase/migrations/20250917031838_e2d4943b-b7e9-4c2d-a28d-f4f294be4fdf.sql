-- Create college applications table to store student applications to colleges
CREATE TABLE college_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  college_id UUID NOT NULL,
  college_name TEXT NOT NULL,
  personal_statement TEXT,
  reason_for_applying TEXT,
  additional_information TEXT,
  application_status TEXT DEFAULT 'submitted',
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE college_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for college applications
CREATE POLICY "Users can create their own applications" 
ON college_applications 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own applications" 
ON college_applications 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own applications" 
ON college_applications 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all applications" 
ON college_applications 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_college_applications_updated_at
BEFORE UPDATE ON college_applications
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();