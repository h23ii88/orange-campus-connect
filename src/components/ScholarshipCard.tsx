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
    <Card className="h-full group relative overflow-hidden bg-gradient-to-br from-card to-orange-50/30 border border-border/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 glow-on-hover">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="pb-4 relative z-10">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          <Badge 
            variant="secondary" 
            className="text-xs font-medium bg-primary/10 text-primary border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          >
            {category}
          </Badge>
        </div>
        <CardDescription className="text-sm line-clamp-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4 relative z-10">
        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mr-3">
            <DollarSign className="h-3.5 w-3.5" />
          </div>
          <span className="font-semibold text-foreground text-base">{amount}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mr-3">
            <Calendar className="h-3.5 w-3.5" />
          </div>
          <span className={isDeadlineSoon ? 'text-destructive font-medium animate-pulse-glow' : 'text-foreground'}>
            Deadline: {new Date(deadline).toLocaleDateString()}
          </span>
          {isDeadlineSoon && (
            <Clock className="h-4 w-4 ml-2 text-destructive animate-bounce-gentle" />
          )}
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mr-3">
            <GraduationCap className="h-3.5 w-3.5" />
          </div>
          <span className="line-clamp-2 text-foreground">{eligibility}</span>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-3 pt-6 relative z-10">
        <Link to={`/scholarships/${id}`} className="flex-1">
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