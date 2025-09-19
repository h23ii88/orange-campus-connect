import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, BookOpen, Award, Search, TrendingUp, Users, Clock, User, FileText, Filter, Send, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import ScholarshipCard from "@/components/ScholarshipCard";
import CollegeCard from "@/components/CollegeCard";
import { mockScholarships, mockColleges } from "@/data/mockData";
import { useState, useEffect } from "react";

const Index = () => {
  const featuredScholarships = mockScholarships.slice(0, 3);
  const featuredColleges = mockColleges.slice(0, 3);
  
  // Live Clock State
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Application Process Steps
  const processSteps = [
    {
      id: 1,
      title: "Complete Profile",
      description: "Fill out your personal and academic information",
      icon: User,
      progress: 20,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Assessment Test",
      description: "Take standardized tests and skill assessments",
      icon: FileText,
      progress: 40,
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Shortlist Colleges",
      description: "Research and select your preferred institutions",
      icon: Filter,
      progress: 60,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Submit Applications",
      description: "Send your applications with all required documents",
      icon: Send,
      progress: 80,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      title: "Wait for Acceptance",
      description: "Relax and await your acceptance letters",
      icon: Mail,
      progress: 100,
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-orange-100 to-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Live Clock */}
          <div className="flex justify-center mb-8">
            <div className="glass-card px-6 py-3 rounded-2xl border border-white/20 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-lg font-mono font-semibold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                  {currentTime.toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Match with Colleges{" "}
              <span className="bg-gradient-to-r from-primary to-orange-800 bg-clip-text text-transparent">
                Just Like a Dating App
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Swipe right on your perfect college match! Our AI-powered platform connects you with 
              colleges and scholarships that are truly compatible with your goals. 🎓💕
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
              <Link to="/dashboard">
                <Button variant="secondary" size="lg" className="px-8">
                  <Users className="mr-2 h-5 w-5" />
                  Student Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-orange-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6 glow-on-hover transition-all duration-300 hover:scale-110">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-2">500+</h3>
              <p className="text-muted-foreground font-medium">Scholarships Available</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6 glow-on-hover transition-all duration-300 hover:scale-110">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-2">200+</h3>
              <p className="text-muted-foreground font-medium">Partner Colleges</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6 glow-on-hover transition-all duration-300 hover:scale-110">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-2">10K+</h3>
              <p className="text-muted-foreground font-medium">Students Helped</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Steps */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Your Application Journey</h2>
            <p className="text-xl text-muted-foreground">Follow these steps to secure your future</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.id}
                  className="relative animate-slide-up"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <Card className="glass-card border-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-glow group">
                    <CardHeader className="text-center pb-4">
                      <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-2">
                        {step.id}
                      </div>
                      <CardTitle className="text-lg font-semibold">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      <div className="space-y-2">
                        <Progress value={step.progress} className="h-2" />
                        <span className="text-xs text-muted-foreground">
                          {step.progress}% Complete
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow between steps */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-primary to-orange-500 animate-pulse" />
                      <div className="absolute -right-1 -top-1 w-0 h-0 border-l-[6px] border-l-primary border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <Link to="/dashboard">
              <Button size="lg" className="px-8">
                <Users className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
            </Link>
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
            {featuredScholarships.map((scholarship, index) => (
              <div 
                key={scholarship.id} 
                className="animate-slide-up floating-animation"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <ScholarshipCard {...scholarship} />
              </div>
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
            {featuredColleges.map((college, index) => (
              <div 
                key={college.id} 
                className="animate-scale-in"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'both'
                }}
              >
                <CollegeCard {...college} />
              </div>
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
