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
  programs,
  website 
}: CollegeCardProps) => {
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 group">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {name}
          </CardTitle>
          <Badge variant="secondary" className="text-xs font-medium">
            {type}
          </Badge>
        </div>
        <CardDescription className="text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2 text-primary" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="h-4 w-4 mr-2 text-primary" />
          <span>{studentCount} students</span>
        </div>
        
        <div className="flex items-start text-sm text-muted-foreground">
          <BookOpen className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
          <div className="flex flex-wrap gap-1">
            {programs.slice(0, 3).map((program, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {program}
              </Badge>
            ))}
            {programs.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{programs.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Link to={`/colleges/${id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
        <Button 
          onClick={() => setShowApplicationModal(true)}
          className="flex-1"
        >
          Apply Now
        </Button>
        <Button size="sm" variant="secondary" asChild>
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