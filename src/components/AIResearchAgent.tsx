import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Bot, Search, Plus, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface AIResearchAgentProps {
  onDataAdded: () => void;
}

export const AIResearchAgent = ({ onDataAdded }: AIResearchAgentProps) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"college" | "scholarship" | "">("");
  const [isResearching, setIsResearching] = useState(false);
  const [researchResult, setResearchResult] = useState<any>(null);
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();

  const handleResearch = async () => {
    if (!query.trim() || !type) {
      toast({
        title: "Error",
        description: "Please enter a search query and select a type",
        variant: "destructive"
      });
      return;
    }

    setIsResearching(true);
    setResearchResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('ai-research-agent', {
        body: { query: query.trim(), type }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to research data');
      }

      if (!data || !data.success) {
        throw new Error(data?.error || 'Research failed');
      }

      setResearchResult(data.data);
      toast({
        title: "Research Complete",
        description: `Found information about: ${query}`,
      });

    } catch (error) {
      console.error('Research error:', error);
      toast({
        title: "Research Failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setIsResearching(false);
    }
  };

  const handleAddToDatabase = async () => {
    if (!researchResult) return;

    setIsAdding(true);

    try {
      let insertData;
      let tableName;

      if (type === "college") {
        tableName = "colleges";
        insertData = {
          name: researchResult.name,
          location: researchResult.location,
          state: researchResult.state,
          description: researchResult.description,
          type: researchResult.type,
          enrollment: researchResult.enrollment,
          tuition: researchResult.tuition,
          acceptance_rate: researchResult.acceptance_rate,
          founded: researchResult.founded,
          ranking: researchResult.ranking,
          majors: researchResult.majors || [],
          highlights: researchResult.highlights || [],
          campus: researchResult.campus,
          student_faculty_ratio: researchResult.student_faculty_ratio,
          graduation_rate: researchResult.graduation_rate,
          is_active: true
        };
      } else {
        tableName = "scholarships";
        insertData = {
          title: researchResult.title,
          amount: researchResult.amount,
          deadline: researchResult.deadline,
          description: researchResult.description,
          category: researchResult.category,
          eligibility: researchResult.eligibility,
          provider: researchResult.provider,
          requirements: researchResult.requirements || [],
          eligibility_details: researchResult.eligibility_details || [],
          applicants: researchResult.applicants,
          awarded: researchResult.awarded,
          application_process: researchResult.application_process || [],
          benefits: researchResult.benefits || [],
          selection_criteria: researchResult.selection_criteria || [],
          is_active: true
        };
      }

      const { data, error } = await supabase
        .from(tableName)
        .insert([insertData])
        .select();

      if (error) throw error;

      toast({
        title: "Success",
        description: `${type === 'college' ? 'College' : 'Scholarship'} added to database successfully`,
      });

      // Reset form
      setQuery("");
      setType("");
      setResearchResult(null);
      
      // Notify parent to refresh data
      onDataAdded();

    } catch (error) {
      console.error('Error adding to database:', error);
      toast({
        title: "Error",
        description: `Failed to add ${type} to database`,
        variant: "destructive"
      });
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          AI Research Agent
        </CardTitle>
        <CardDescription>
          Use AI to research and automatically add colleges or scholarships to your database
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Label htmlFor="research-query">Search Query</Label>
            <Input
              id="research-query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., 'Stanford University' or 'National Merit Scholarship'"
              disabled={isResearching}
            />
          </div>
          <div>
            <Label htmlFor="research-type">Type</Label>
            <Select value={type} onValueChange={(value: "college" | "scholarship") => setType(value)}>
              <SelectTrigger id="research-type" disabled={isResearching}>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="college">College/University</SelectItem>
                <SelectItem value="scholarship">Scholarship</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          onClick={handleResearch} 
          disabled={isResearching || !query.trim() || !type}
          className="w-full"
        >
          {isResearching ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Researching...
            </>
          ) : (
            <>
              <Search className="h-4 w-4 mr-2" />
              Research & Analyze
            </>
          )}
        </Button>

        {researchResult && (
          <>
            <Separator />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Research Results
                </h3>
                <Badge variant="secondary">{type}</Badge>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                {type === "college" ? (
                  <>
                    <h4 className="font-semibold text-lg">{researchResult.name}</h4>
                    <p className="text-sm text-muted-foreground">{researchResult.location}</p>
                    <p className="text-sm">{researchResult.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <div><strong>Type:</strong> {researchResult.type}</div>
                      <div><strong>Founded:</strong> {researchResult.founded}</div>
                      <div><strong>Enrollment:</strong> {researchResult.enrollment}</div>
                      <div><strong>Tuition:</strong> {researchResult.tuition}</div>
                    </div>
                    {researchResult.majors && (
                      <div>
                        <strong>Popular Majors:</strong>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {researchResult.majors.slice(0, 5).map((major: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {major}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <h4 className="font-semibold text-lg">{researchResult.title}</h4>
                    <p className="text-sm text-muted-foreground">{researchResult.provider}</p>
                    <p className="text-sm">{researchResult.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <div><strong>Amount:</strong> {researchResult.amount}</div>
                      <div><strong>Category:</strong> {researchResult.category}</div>
                      <div><strong>Deadline:</strong> {researchResult.deadline}</div>
                    </div>
                  </>
                )}
              </div>

              <Button 
                onClick={handleAddToDatabase} 
                disabled={isAdding}
                className="w-full"
                variant="default"
              >
                {isAdding ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Adding to Database...
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Database
                  </>
                )}
              </Button>
            </div>
          </>
        )}

        <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
          <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-700 dark:text-blue-300">
            <p className="font-medium">How it works:</p>
            <p>The AI agent searches the internet for comprehensive information about your query and structures it for database insertion. Always review the data before adding.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};