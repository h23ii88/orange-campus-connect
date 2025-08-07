import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  BookOpen, 
  FileText, 
  GraduationCap, 
  Calendar,
  Award,
  Edit,
  Save,
  X
} from "lucide-react";
import Navigation from "@/components/Navigation";

interface Application {
  id: string;
  type: 'scholarship' | 'college';
  name: string;
  status: 'applied' | 'pending' | 'accepted' | 'rejected';
  appliedDate: string;
  deadline?: string;
}

interface StudentProfile {
  name: string;
  email: string;
  phone: string;
  gpa: string;
  graduationYear: string;
  school: string;
  intendedMajor: string;
  bio: string;
}

const Dashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<StudentProfile>({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    gpa: "3.8",
    graduationYear: "2024",
    school: "Delhi Public School",
    intendedMajor: "Computer Science",
    bio: "Passionate about technology and innovation. Looking for opportunities to pursue higher education in computer science."
  });

  const [applications] = useState<Application[]>([
    {
      id: "1",
      type: "scholarship",
      name: "Merit Excellence Scholarship",
      status: "applied",
      appliedDate: "2024-01-15",
      deadline: "2024-12-15"
    },
    {
      id: "2",
      type: "college",
      name: "Knox College",
      status: "pending",
      appliedDate: "2024-01-10",
      deadline: "2024-02-01"
    },
    {
      id: "3",
      type: "scholarship",
      name: "STEM Innovation Grant",
      status: "accepted",
      appliedDate: "2024-01-05",
      deadline: "2024-11-30"
    },
    {
      id: "4",
      type: "college",
      name: "University of Rochester",
      status: "applied",
      appliedDate: "2024-01-08"
    }
  ]);

  const handleProfileUpdate = (field: keyof StudentProfile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Student <span className="text-primary">Dashboard</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage your profile and track your applications
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Applications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Student Profile
                  </CardTitle>
                  <CardDescription>
                    Keep your information up to date for better application matching
                  </CardDescription>
                </div>
                <Button
                  variant={isEditing ? "outline" : "default"}
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2"
                >
                  {isEditing ? (
                    <>
                      <X className="h-4 w-4" />
                      Cancel
                    </>
                  ) : (
                    <>
                      <Edit className="h-4 w-4" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => handleProfileUpdate('name', e.target.value)}
                      />
                    ) : (
                      <p className="text-foreground font-medium">{profile.name}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => handleProfileUpdate('email', e.target.value)}
                      />
                    ) : (
                      <p className="text-foreground font-medium">{profile.email}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => handleProfileUpdate('phone', e.target.value)}
                      />
                    ) : (
                      <p className="text-foreground font-medium">{profile.phone}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="gpa">GPA</Label>
                    {isEditing ? (
                      <Input
                        id="gpa"
                        value={profile.gpa}
                        onChange={(e) => handleProfileUpdate('gpa', e.target.value)}
                      />
                    ) : (
                      <p className="text-foreground font-medium">{profile.gpa}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    {isEditing ? (
                      <Input
                        id="graduationYear"
                        value={profile.graduationYear}
                        onChange={(e) => handleProfileUpdate('graduationYear', e.target.value)}
                      />
                    ) : (
                      <p className="text-foreground font-medium">{profile.graduationYear}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="school">Current School</Label>
                    {isEditing ? (
                      <Input
                        id="school"
                        value={profile.school}
                        onChange={(e) => handleProfileUpdate('school', e.target.value)}
                      />
                    ) : (
                      <p className="text-foreground font-medium">{profile.school}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="intendedMajor">Intended Major</Label>
                    {isEditing ? (
                      <Input
                        id="intendedMajor"
                        value={profile.intendedMajor}
                        onChange={(e) => handleProfileUpdate('intendedMajor', e.target.value)}
                      />
                    ) : (
                      <p className="text-foreground font-medium">{profile.intendedMajor}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    {isEditing ? (
                      <Textarea
                        id="bio"
                        value={profile.bio}
                        onChange={(e) => handleProfileUpdate('bio', e.target.value)}
                        rows={4}
                      />
                    ) : (
                      <p className="text-foreground">{profile.bio}</p>
                    )}
                  </div>
                </div>
                
                {isEditing && (
                  <div className="flex justify-end">
                    <Button onClick={() => setIsEditing(false)} className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <div className="space-y-6">
              {/* Applications Summary */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-2xl font-bold">{applications.length}</p>
                        <p className="text-sm text-muted-foreground">Total Applications</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <Award className="h-8 w-8 text-green-600" />
                      <div>
                        <p className="text-2xl font-bold text-green-600">
                          {applications.filter(app => app.status === 'accepted').length}
                        </p>
                        <p className="text-sm text-muted-foreground">Accepted</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-8 w-8 text-yellow-600" />
                      <div>
                        <p className="text-2xl font-bold text-yellow-600">
                          {applications.filter(app => app.status === 'pending').length}
                        </p>
                        <p className="text-sm text-muted-foreground">Pending</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="text-2xl font-bold text-blue-600">
                          {applications.filter(app => app.status === 'applied').length}
                        </p>
                        <p className="text-sm text-muted-foreground">Applied</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Applications List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Your Applications
                  </CardTitle>
                  <CardDescription>
                    Track the status of all your scholarship and college applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applications.map((application) => (
                      <div key={application.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            {application.type === 'scholarship' ? (
                              <Award className="h-5 w-5 text-primary" />
                            ) : (
                              <GraduationCap className="h-5 w-5 text-primary" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold">{application.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Applied on {new Date(application.appliedDate).toLocaleDateString()}
                              {application.deadline && (
                                <> • Deadline: {new Date(application.deadline).toLocaleDateString()}</>
                              )}
                            </p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(application.status)}>
                          {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;