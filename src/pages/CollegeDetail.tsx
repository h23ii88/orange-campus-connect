import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Users, Calendar, ExternalLink, GraduationCap, DollarSign } from "lucide-react";
import { mockColleges } from "@/data/mockData";
import Navigation from "@/components/Navigation";

const CollegeDetail = () => {
  const { id } = useParams();
  const college = mockColleges.find(c => c.id === id);

  if (!college) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">College Not Found</h1>
            <Link to="/colleges">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Colleges
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <Link to="/colleges">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Colleges
              </Button>
            </Link>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{college.name}</h1>
                <p className="text-lg text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {college.location}
                </p>
              </div>
              <Badge variant="secondary" className="text-sm font-medium w-fit">
                {college.type}
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>About {college.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{college.description}</p>
                </CardContent>
              </Card>

              {/* Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Academic Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-2">
                    {college.programs.map((program, index) => (
                      <Badge key={index} variant="outline" className="justify-center py-2">
                        {program}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Financial Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Financial Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Tuition & Financial Aid</h4>
                    <p className="text-foreground">{college.tuition}</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>For Indian Students:</strong> This institution is known for providing excellent financial aid packages to international students, including merit and need-based scholarships.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Visit Website */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Explore More</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" size="lg" asChild>
                    <a href={college.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Official Website
                    </a>
                  </Button>
                  <Link to="/auth">
                    <Button variant="outline" className="w-full">
                      Apply Through CollegeScholars
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Students:</span>
                    <span className="font-medium flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {college.studentCount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Admission Rate:</span>
                    <span className="font-medium">{college.admissionRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Founded:</span>
                    <span className="font-medium flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {college.establishedYear}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{college.type}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{college.location}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetail;