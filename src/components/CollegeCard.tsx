import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ApplicationModal from "./ApplicationModal";

interface CollegeCardProps {
  id: string;
  name: string;
  location: string;
  description: string;
  type: string;
  studentCount: string;
  programs: string[];
  website: string;
}

const CollegeCard = ({ 
  id, 
  name, 
  location, 
  description, 
  type, 
  studentCount, 
  programs = [],
  website 
}: CollegeCardProps) => {
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  return (
    <Card className="h-full group relative overflow-hidden bg-gradient-to-br from-card to-orange-50/20 border border-border/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 glow-on-hover parallax-tilt">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/3 to-primary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="pb-4 relative z-10">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
            {name}
          </CardTitle>
          <Badge 
            variant="secondary" 
            className="text-xs font-medium bg-primary/10 text-primary border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          >
            {type}
          </Badge>
        </div>
        <CardDescription className="text-sm line-clamp-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4 relative z-10">
        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mr-3">
            <MapPin className="h-3.5 w-3.5" />
          </div>
          <span className="text-foreground font-medium">{location}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mr-3">
            <Users className="h-3.5 w-3.5" />
          </div>
          <span className="text-foreground font-medium">{studentCount} students</span>
        </div>
        
        <div className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mr-3 mt-0.5">
            <BookOpen className="h-3.5 w-3.5" />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {(programs || []).slice(0, 3).map((program, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs bg-background/50 border-primary/20 hover:bg-primary/10 transition-all duration-300"
              >
                {program}
              </Badge>
            ))}
            {(programs || []).length > 3 && (
              <Badge 
                variant="outline" 
                className="text-xs bg-primary/5 border-primary/30 text-primary font-medium"
              >
                +{(programs || []).length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2 pt-6 relative z-10">
        <Link to={`/colleges/${id}`} className="flex-1">
          <Button 
            variant="outline" 
            className="w-full bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group-hover:scale-105"
          >
            View Details
          </Button>
        </Link>
        <Button 
          onClick={() => setShowApplicationModal(true)}
          className="flex-1 bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
        >
          Apply Now
        </Button>
        <Button 
          size="sm" 
          variant="secondary" 
          className="bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group-hover:scale-105" 
          asChild
        >
          <a href={website} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
      
      <ApplicationModal
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
        type="college"
        itemName={name}
        itemId={id}
      />
    </Card>
  );
};

export default CollegeCard;