import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, DollarSign, Building, ExternalLink, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";

const ScholarshipDetail = () => {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchScholarship();
    }
  }, [id]);

  const fetchScholarship = async () => {
    try {
      const { data, error } = await supabase
        .from('scholarships')
        .select('*')
        .eq('id', id)
        .eq('is_active', true)
        .maybeSingle();
      
      if (error) throw error;
      setScholarship(data);
    } catch (error) {
      console.error('Error fetching scholarship:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  if (!scholarship) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Scholarship Not Found</h1>
            <Link to="/scholarships">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Scholarships
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isDeadlineSoon = scholarship?.deadline ? new Date(scholarship.deadline) <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) : false;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <Link to="/scholarships">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Scholarships
              </Button>
            </Link>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{scholarship.title}</h1>
                <p className="text-lg text-muted-foreground">{scholarship.description}</p>
              </div>
              <Badge variant="secondary" className="text-sm font-medium w-fit">
                {scholarship.category}
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Scholarship Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Scholarship Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Award Amount</h4>
                      <p className="text-2xl font-bold text-primary">{scholarship.amount}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Provider</h4>
                      <p className="text-foreground">{scholarship.provider}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Deadline</h4>
                    <p className={`flex items-center gap-2 ${isDeadlineSoon ? 'text-destructive font-medium' : 'text-foreground'}`}>
                      <Calendar className="h-4 w-4" />
                      {scholarship.deadline ? new Date(scholarship.deadline).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'N/A'}
                      {isDeadlineSoon && <Badge variant="destructive" className="text-xs">Deadline Soon!</Badge>}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Eligibility */}
              <Card>
                <CardHeader>
                  <CardTitle>Eligibility Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{scholarship.eligibility}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Required Documents:</h4>
                    <ul className="space-y-2">
                      {(scholarship.requirements || []).map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Now */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Ready to Apply?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" size="lg" asChild>
                    <a href={scholarship.application_url || '#'} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Apply Now
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    You will be redirected to the official application page
                  </p>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">{scholarship.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Provider:</span>
                    <span className="font-medium">{scholarship.provider}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-medium text-primary">{scholarship.amount}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetail;