import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Trash2, Edit, Plus, Save, Shield, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { AIResearchAgent } from "@/components/AIResearchAgent";

const Admin = () => {
  const { user, userRole, isAdmin, loading } = useAuth();
  const [scholarships, setScholarships] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const { toast } = useToast();

  // Redirect if not admin
  if (!loading && (!user || !isAdmin)) {
    return <Navigate to="/auth" replace />;
  }

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  const fetchData = async () => {
    try {
      const [{ data: scholarshipsData }, { data: collegesData }] = await Promise.all([
        supabase.from('scholarships').select('*').eq('is_active', true),
        supabase.from('colleges').select('*').eq('is_active', true)
      ]);
      
      setScholarships(scholarshipsData || []);
      setColleges(collegesData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to load data",
        variant: "destructive"
      });
    } finally {
      setDataLoading(false);
    }
  };

  const [newScholarship, setNewScholarship] = useState({
    title: "",
    amount: "",
    deadline: "",
    description: "",
    category: "",
    eligibility: "",
    provider: ""
  });

  const [newCollege, setNewCollege] = useState({
    name: "",
    location: "",
    state: "",
    description: "",
    type: "",
    enrollment: "",
    tuition: "",
    acceptance_rate: "",
    founded: ""
  });

  const handleAddScholarship = async () => {
    if (!newScholarship.title || !newScholarship.amount || !newScholarship.deadline) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('scholarships')
        .insert([{
          title: newScholarship.title,
          amount: newScholarship.amount,
          deadline: newScholarship.deadline,
          description: newScholarship.description,
          category: newScholarship.category,
          eligibility: newScholarship.eligibility,
          provider: newScholarship.provider,
          is_active: true
        }])
        .select();

      if (error) throw error;

      setScholarships([...scholarships, ...data]);
      setNewScholarship({
        title: "",
        amount: "",
        deadline: "",
        description: "",
        category: "",
        eligibility: "",
        provider: ""
      });

      toast({
        title: "Success",
        description: "Scholarship added successfully"
      });
    } catch (error) {
      console.error('Error adding scholarship:', error);
      toast({
        title: "Error",
        description: "Failed to add scholarship",
        variant: "destructive"
      });
    }
  };

  const handleAddCollege = async () => {
    if (!newCollege.name || !newCollege.location || !newCollege.type) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      console.log('Adding college:', newCollege);
      const { data, error } = await supabase
        .from('colleges')
        .insert([{
          name: newCollege.name,
          location: newCollege.location,
          state: newCollege.state,
          description: newCollege.description,
          type: newCollege.type,
          enrollment: newCollege.enrollment,
          tuition: newCollege.tuition,
          acceptance_rate: newCollege.acceptance_rate,
          founded: newCollege.founded ? parseInt(newCollege.founded) : null,
          is_active: true
        }])
        .select();

      console.log('Insert result:', { data, error });

      if (error) {
        console.error('Database error:', error);
        if (error.code === 'PGRST116' || error.message?.includes('permission')) {
          toast({
            title: "Access Denied",
            description: "You need admin privileges to add colleges. Please contact an administrator.",
            variant: "destructive"
          });
          return;
        }
        throw error;
      }

      if (!data || data.length === 0) {
        console.error('No data returned from insert operation');
        toast({
          title: "Error",
          description: "College was not added. Please check your permissions.",
          variant: "destructive"
        });
        return;
      }

      setColleges([...colleges, ...data]);
      setNewCollege({
        name: "",
        location: "",
        state: "",
        description: "",
        type: "",
        enrollment: "",
        tuition: "",
        acceptance_rate: "",
        founded: ""
      });

      // Refresh data to ensure consistency
      await fetchData();

      toast({
        title: "Success",
        description: "College added successfully"
      });
    } catch (error) {
      console.error('Error adding college:', error);
      toast({
        title: "Error",
        description: `Failed to add college: ${error.message || 'Unknown error'}`,
        variant: "destructive"
      });
    }
  };

  const handleDeleteScholarship = async (id: string) => {
    try {
      const { error } = await supabase
        .from('scholarships')
        .update({ is_active: false })
        .eq('id', id);

      if (error) throw error;

      setScholarships(scholarships.filter(s => s.id !== id));
      toast({
        title: "Success",
        description: "Scholarship deleted successfully"
      });
    } catch (error) {
      console.error('Error deleting scholarship:', error);
      toast({
        title: "Error",
        description: "Failed to delete scholarship",
        variant: "destructive"
      });
    }
  };

  const handleDeleteCollege = async (id: string) => {
    try {
      console.log('Deleting college with id:', id);
      const { data, error } = await supabase
        .from('colleges')
        .update({ is_active: false })
        .eq('id', id)
        .select();

      console.log('Delete result:', { data, error });

      if (error) {
        console.error('Database error:', error);
        if (error.code === 'PGRST116' || error.message?.includes('permission')) {
          toast({
            title: "Access Denied",
            description: "You need admin privileges to delete colleges. Please contact an administrator.",
            variant: "destructive"
          });
          return;
        }
        throw error;
      }

      if (!data || data.length === 0) {
        console.error('No data returned from update operation');
        toast({
          title: "Error",
          description: "College was not deleted. Please check your permissions.",
          variant: "destructive"
        });
        return;
      }

      setColleges(colleges.filter(c => c.id !== id));
      
      // Refresh data to ensure consistency
      await fetchData();
      
      toast({
        title: "Success",
        description: "College deleted successfully"
      });
    } catch (error) {
      console.error('Error deleting college:', error);
      toast({
        title: "Error",
        description: `Failed to delete college: ${error.message || 'Unknown error'}`,
        variant: "destructive"
      });
    }
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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="colleges">Colleges</TabsTrigger>
            <TabsTrigger value="discounts">Student Discounts</TabsTrigger>
          </TabsList>

          <TabsContent value="scholarships" className="space-y-6">
            {/* AI Research Agent */}
            <AIResearchAgent onDataAdded={fetchData} />
            
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
            {/* AI Research Agent */}
            <AIResearchAgent onDataAdded={fetchData} />
            
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
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={newCollege.state}
                      onChange={(e) => setNewCollege({...newCollege, state: e.target.value})}
                      placeholder="State"
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
                    <Label htmlFor="enrollment">Enrollment</Label>
                    <Input
                      id="enrollment"
                      value={newCollege.enrollment}
                      onChange={(e) => setNewCollege({...newCollege, enrollment: e.target.value})}
                      placeholder="e.g., 15,000"
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
                    <Label htmlFor="acceptance_rate">Acceptance Rate</Label>
                    <Input
                      id="acceptance_rate"
                      value={newCollege.acceptance_rate}
                      onChange={(e) => setNewCollege({...newCollege, acceptance_rate: e.target.value})}
                      placeholder="e.g., 65%"
                    />
                  </div>
                  <div>
                    <Label htmlFor="founded">Founded</Label>
                    <Input
                      id="founded"
                      value={newCollege.founded}
                      onChange={(e) => setNewCollege({...newCollege, founded: e.target.value})}
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
                        <p className="text-sm text-muted-foreground">{college.enrollment} students</p>
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

          <TabsContent value="discounts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Discounts & Offers</CardTitle>
                <CardDescription>
                  Manage discount offers for Indian students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This section will allow you to manage student discount offers. Feature coming soon!
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
