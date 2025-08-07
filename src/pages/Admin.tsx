import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Trash2, Edit, Plus, Save } from "lucide-react";
import Navigation from "@/components/Navigation";
import { mockScholarships, mockColleges } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const [scholarships, setScholarships] = useState(mockScholarships);
  const [colleges, setColleges] = useState(mockColleges);
  const { toast } = useToast();

  const [newScholarship, setNewScholarship] = useState({
    title: "",
    amount: "",
    deadline: "",
    description: "",
    category: "",
    eligibility: "",
    provider: "",
    applicationUrl: ""
  });

  const [newCollege, setNewCollege] = useState({
    name: "",
    location: "",
    description: "",
    type: "",
    studentCount: "",
    website: "",
    tuition: "",
    admissionRate: "",
    establishedYear: ""
  });

  const handleAddScholarship = () => {
    if (!newScholarship.title || !newScholarship.amount || !newScholarship.deadline) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const scholarship = {
      ...newScholarship,
      id: Date.now().toString(),
      requirements: [],
      programs: []
    };

    setScholarships([...scholarships, scholarship]);
    setNewScholarship({
      title: "",
      amount: "",
      deadline: "",
      description: "",
      category: "",
      eligibility: "",
      provider: "",
      applicationUrl: ""
    });

    toast({
      title: "Success",
      description: "Scholarship added successfully"
    });
  };

  const handleAddCollege = () => {
    if (!newCollege.name || !newCollege.location || !newCollege.type) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const college = {
      ...newCollege,
      id: Date.now().toString(),
      programs: []
    };

    setColleges([...colleges, college]);
    setNewCollege({
      name: "",
      location: "",
      description: "",
      type: "",
      studentCount: "",
      website: "",
      tuition: "",
      admissionRate: "",
      establishedYear: ""
    });

    toast({
      title: "Success",
      description: "College added successfully"
    });
  };

  const handleDeleteScholarship = (id: string) => {
    setScholarships(scholarships.filter(s => s.id !== id));
    toast({
      title: "Success",
      description: "Scholarship deleted successfully"
    });
  };

  const handleDeleteCollege = (id: string) => {
    setColleges(colleges.filter(c => c.id !== id));
    toast({
      title: "Success",
      description: "College deleted successfully"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Admin <span className="text-primary">Panel</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage scholarships and colleges
          </p>
        </div>

        <Tabs defaultValue="scholarships" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="colleges">Colleges</TabsTrigger>
          </TabsList>

          <TabsContent value="scholarships" className="space-y-6">
            {/* Add New Scholarship */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Add New Scholarship
                </CardTitle>
                <CardDescription>
                  Create a new scholarship opportunity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={newScholarship.title}
                      onChange={(e) => setNewScholarship({...newScholarship, title: e.target.value})}
                      placeholder="Scholarship title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="amount">Amount *</Label>
                    <Input
                      id="amount"
                      value={newScholarship.amount}
                      onChange={(e) => setNewScholarship({...newScholarship, amount: e.target.value})}
                      placeholder="e.g., $5,000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="deadline">Deadline *</Label>
                    <Input
                      id="deadline"
                      type="date"
                      value={newScholarship.deadline}
                      onChange={(e) => setNewScholarship({...newScholarship, deadline: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select onValueChange={(value) => setNewScholarship({...newScholarship, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Academic Merit">Academic Merit</SelectItem>
                        <SelectItem value="STEM">STEM</SelectItem>
                        <SelectItem value="Leadership">Leadership</SelectItem>
                        <SelectItem value="Community Service">Community Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="provider">Provider</Label>
                    <Input
                      id="provider"
                      value={newScholarship.provider}
                      onChange={(e) => setNewScholarship({...newScholarship, provider: e.target.value})}
                      placeholder="Organization name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="applicationUrl">Application URL</Label>
                    <Input
                      id="applicationUrl"
                      value={newScholarship.applicationUrl}
                      onChange={(e) => setNewScholarship({...newScholarship, applicationUrl: e.target.value})}
                      placeholder="https://..."
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newScholarship.description}
                    onChange={(e) => setNewScholarship({...newScholarship, description: e.target.value})}
                    placeholder="Scholarship description"
                  />
                </div>
                <div>
                  <Label htmlFor="eligibility">Eligibility</Label>
                  <Textarea
                    id="eligibility"
                    value={newScholarship.eligibility}
                    onChange={(e) => setNewScholarship({...newScholarship, eligibility: e.target.value})}
                    placeholder="Eligibility requirements"
                  />
                </div>
                <Button onClick={handleAddScholarship} className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Add Scholarship
                </Button>
              </CardContent>
            </Card>

            {/* Existing Scholarships */}
            <Card>
              <CardHeader>
                <CardTitle>Existing Scholarships ({scholarships.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scholarships.map((scholarship) => (
                    <div key={scholarship.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{scholarship.title}</h3>
                        <p className="text-sm text-muted-foreground">{scholarship.amount} • {scholarship.category}</p>
                        <p className="text-sm text-muted-foreground">Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleDeleteScholarship(scholarship.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="colleges" className="space-y-6">
            {/* Add New College */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Add New College
                </CardTitle>
                <CardDescription>
                  Add a new college to the database
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={newCollege.name}
                      onChange={(e) => setNewCollege({...newCollege, name: e.target.value})}
                      placeholder="College name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={newCollege.location}
                      onChange={(e) => setNewCollege({...newCollege, location: e.target.value})}
                      placeholder="City, State"
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Type *</Label>
                    <Select onValueChange={(value) => setNewCollege({...newCollege, type: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Public University">Public University</SelectItem>
                        <SelectItem value="Private University">Private University</SelectItem>
                        <SelectItem value="Private College">Private College</SelectItem>
                        <SelectItem value="Community College">Community College</SelectItem>
                        <SelectItem value="Technical Institute">Technical Institute</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="studentCount">Student Count</Label>
                    <Input
                      id="studentCount"
                      value={newCollege.studentCount}
                      onChange={(e) => setNewCollege({...newCollege, studentCount: e.target.value})}
                      placeholder="e.g., 15,000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={newCollege.website}
                      onChange={(e) => setNewCollege({...newCollege, website: e.target.value})}
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="tuition">Tuition</Label>
                    <Input
                      id="tuition"
                      value={newCollege.tuition}
                      onChange={(e) => setNewCollege({...newCollege, tuition: e.target.value})}
                      placeholder="e.g., $15,000/year"
                    />
                  </div>
                  <div>
                    <Label htmlFor="admissionRate">Admission Rate</Label>
                    <Input
                      id="admissionRate"
                      value={newCollege.admissionRate}
                      onChange={(e) => setNewCollege({...newCollege, admissionRate: e.target.value})}
                      placeholder="e.g., 65%"
                    />
                  </div>
                  <div>
                    <Label htmlFor="establishedYear">Established Year</Label>
                    <Input
                      id="establishedYear"
                      value={newCollege.establishedYear}
                      onChange={(e) => setNewCollege({...newCollege, establishedYear: e.target.value})}
                      placeholder="e.g., 1890"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newCollege.description}
                    onChange={(e) => setNewCollege({...newCollege, description: e.target.value})}
                    placeholder="College description"
                  />
                </div>
                <Button onClick={handleAddCollege} className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Add College
                </Button>
              </CardContent>
            </Card>

            {/* Existing Colleges */}
            <Card>
              <CardHeader>
                <CardTitle>Existing Colleges ({colleges.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {colleges.map((college) => (
                    <div key={college.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{college.name}</h3>
                        <p className="text-sm text-muted-foreground">{college.location} • {college.type}</p>
                        <p className="text-sm text-muted-foreground">{college.studentCount} students</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleDeleteCollege(college.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
