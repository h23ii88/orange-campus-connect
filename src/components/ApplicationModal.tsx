import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'scholarship' | 'college';
  itemName: string;
  itemId: string;
}

const ApplicationModal = ({ isOpen, onClose, type, itemName, itemId }: ApplicationModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [applicationData, setApplicationData] = useState({
    personalStatement: "",
    whyApplying: "",
    additionalInfo: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      fetchProfile();
    }
  }, [isOpen]);

  const fetchProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      const { data: applicationProfile } = await supabase
        .from('application_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      setProfile({ ...profileData, ...applicationProfile });
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Error",
          description: "Please sign in to apply",
          variant: "destructive"
        });
        return;
      }

      if (type === 'college') {
        const { error } = await supabase
          .from('college_applications')
          .insert({
            user_id: user.id,
            college_name: itemName,
            application_status: 'submitted',
            submitted_at: new Date().toISOString()
          });

        if (error) throw error;
      }

      toast({
        title: "Application Submitted!",
        description: `Your ${type} application has been submitted successfully.`
      });

      onClose();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply to {itemName}</DialogTitle>
          <DialogDescription>
            Submit your application using your profile information
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Profile Preview */}
          {profile && (
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Your Profile Information</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Name:</span> {profile.full_name || 'Not provided'}
                </div>
                <div>
                  <span className="font-medium">Email:</span> {profile.email || 'Not provided'}
                </div>
                <div>
                  <span className="font-medium">GPA:</span> {profile.gpa || 'Not provided'}
                </div>
                <div>
                  <span className="font-medium">SAT Score:</span> {profile.sat_score || 'Not provided'}
                </div>
              </div>
            </div>
          )}

          {/* Application Form */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="personalStatement">Personal Statement</Label>
              <Textarea
                id="personalStatement"
                placeholder="Tell us about yourself and your goals..."
                value={applicationData.personalStatement}
                onChange={(e) => setApplicationData(prev => ({ ...prev, personalStatement: e.target.value }))}
                className="min-h-[100px]"
              />
            </div>

            <div>
              <Label htmlFor="whyApplying">Why are you applying to this {type}?</Label>
              <Textarea
                id="whyApplying"
                placeholder={`Explain why you're interested in this ${type}...`}
                value={applicationData.whyApplying}
                onChange={(e) => setApplicationData(prev => ({ ...prev, whyApplying: e.target.value }))}
                className="min-h-[100px]"
              />
            </div>

            <div>
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                placeholder="Any additional information you'd like to share..."
                value={applicationData.additionalInfo}
                onChange={(e) => setApplicationData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                className="min-h-[80px]"
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Application
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;