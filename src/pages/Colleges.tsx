import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import CollegeCard from "@/components/CollegeCard";
import { supabase } from "@/integrations/supabase/client";

const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      const { data, error } = await supabase
        .from('colleges')
        .select('*')
        .eq('is_active', true);
      
      if (error) throw error;
      setColleges(data || []);
    } catch (error) {
      console.error('Error fetching colleges:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = college?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college?.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college?.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || college?.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const types = ["all", ...Array.from(new Set(colleges.map(c => c.type).filter(Boolean)))];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Explore <span className="text-primary">Colleges</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover exceptional institutions that match your academic goals
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search colleges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type === "all" ? "All Types" : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredColleges.length} of {colleges.length} colleges
          </p>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map((college) => (
            <CollegeCard 
              key={college.id} 
              id={college.id}
              name={college.name || ''}
              location={college.location || ''}
              description={college.description || ''}
              type={college.type || ''}
              studentCount={college.enrollment || '0'}
              programs={college.majors || []}
              website={college.website || '#'}
            />
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No colleges found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setTypeFilter("all");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Colleges;