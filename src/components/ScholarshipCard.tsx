import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, GraduationCap, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ApplicationModal from "./ApplicationModal";

interface ScholarshipCardProps {
  id: string;
  title: string;
  amount: string;
  deadline: string;
  description: string;
  category: string;
  eligibility: string;
}

const ScholarshipCard = ({ 
  id, 
  title, 
  amount, 
  deadline, 
  description, 
  category, 
  eligibility 
}: ScholarshipCardProps) => {
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const isDeadlineSoon = new Date(deadline) <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 group">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <Badge variant="secondary" className="text-xs font-medium">
            {category}
          </Badge>
        </div>
        <CardDescription className="text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <DollarSign className="h-4 w-4 mr-2 text-primary" />
          <span className="font-medium text-foreground">{amount}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2 text-primary" />
          <span className={isDeadlineSoon ? 'text-destructive font-medium' : ''}>
            Deadline: {new Date(deadline).toLocaleDateString()}
          </span>
          {isDeadlineSoon && (
            <Clock className="h-4 w-4 ml-2 text-destructive" />
          )}
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <GraduationCap className="h-4 w-4 mr-2 text-primary" />
          <span className="line-clamp-2">{eligibility}</span>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Link to={`/scholarships/${id}`} className="flex-1">
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
      </CardFooter>
      
      <ApplicationModal
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
        type="scholarship"
        itemName={title}
        itemId={id}
      />
    </Card>
  );
};

export default ScholarshipCard;