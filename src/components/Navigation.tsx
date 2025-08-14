import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Shield, Settings } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
              CollegeScholars
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/scholarships" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/scholarships') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Scholarships
            </Link>
            <Link 
              to="/colleges" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/colleges') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Colleges
            </Link>
            <Link 
              to="/discounts" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/discounts') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Student Discounts
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/dashboard') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Dashboard
            </Link>
            <Link to="/admin">
              <Button variant="outline" size="sm" className="ml-4">
                <Settings className="h-4 w-4 mr-2" />
                Admin
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="ml-2">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link to="/admin">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;