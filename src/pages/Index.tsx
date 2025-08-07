import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award, Search, TrendingUp, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import ScholarshipCard from "@/components/ScholarshipCard";
import CollegeCard from "@/components/CollegeCard";
import { mockScholarships, mockColleges } from "@/data/mockData";

const Index = () => {
  const featuredScholarships = mockScholarships.slice(0, 3);
  const featuredColleges = mockColleges.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-orange-50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                Educational Success
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover thousands of scholarships and explore top colleges. 
              Start your journey towards higher education today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/scholarships">
                <Button size="lg" className="px-8">
                  <Award className="mr-2 h-5 w-5" />
                  Browse Scholarships
                </Button>
              </Link>
              <Link to="/colleges">
                <Button variant="outline" size="lg" className="px-8">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Explore Colleges
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">500+</h3>
              <p className="text-muted-foreground">Scholarships Available</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">200+</h3>
              <p className="text-muted-foreground">Partner Colleges</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">10K+</h3>
              <p className="text-muted-foreground">Students Helped</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Scholarships */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Scholarships</h2>
            <p className="text-xl text-muted-foreground">Don't miss these great opportunities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} {...scholarship} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/scholarships">
              <Button variant="outline" size="lg">
                View All Scholarships
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Colleges */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Top Colleges</h2>
            <p className="text-xl text-muted-foreground">Explore these exceptional institutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredColleges.map((college) => (
              <CollegeCard key={college.id} {...college} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/colleges">
              <Button variant="outline" size="lg">
                View All Colleges
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="text-2xl font-bold">CollegeScholars</span>
            </div>
            <p className="text-primary-foreground/80">
              Empowering students to achieve their educational dreams
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
