import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not configured');
    }

    const { query, type } = await req.json();
    
    if (!query || !type) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: query and type' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log(`AI Research Agent - Searching for ${type}: ${query}`);

    // Create a comprehensive search and research prompt
    const systemPrompt = `You are an AI research agent specialized in educational data. Your task is to research and provide comprehensive, accurate information about ${type === 'college' ? 'colleges/universities' : 'scholarships'}.

When researching ${type === 'college' ? 'colleges' : 'scholarships'}, provide detailed, factual information in a structured JSON format.

${type === 'college' ? `
For colleges, include:
- name: Full official name
- location: City, State format
- state: State abbreviation or full name
- description: Comprehensive description (2-3 sentences)
- type: "Public University", "Private University", "Community College", etc.
- enrollment: Current student enrollment number
- tuition: Current tuition costs (format: "$XX,XXX per year")
- acceptance_rate: Acceptance rate percentage (format: "XX%")
- founded: Year founded (as integer)
- ranking: National ranking if available
- majors: Array of popular/notable majors offered
- highlights: Array of notable features, achievements, or programs
- campus: Description of campus environment
- student_faculty_ratio: Ratio like "15:1"
- graduation_rate: Graduation rate percentage
` : `
For scholarships, include:
- title: Full scholarship name
- amount: Award amount (format: "$X,XXX" or "Up to $X,XXX")
- deadline: Application deadline (YYYY-MM-DD format)
- description: Detailed description (2-3 sentences)
- category: "Academic Merit", "STEM", "Leadership", "Community Service", "Need-Based", etc.
- eligibility: Detailed eligibility requirements
- provider: Organization/institution offering the scholarship
- requirements: Array of application requirements
- eligibility_details: Array of specific eligibility criteria
- applicants: Estimated number of applicants (if available)
- awarded: Number of scholarships awarded
- application_process: Array of application steps
- benefits: Array of additional benefits beyond monetary award
- selection_criteria: Array of selection criteria
`}

Important: Provide real, accurate, and current information. If you cannot find specific current data, use the most recent reliable information available and indicate uncertainty appropriately.`;

    const userPrompt = `Research and provide comprehensive information about: ${query}

Please return the information in valid JSON format that matches the structure specified in the system prompt. Ensure all data is accurate and current.`;

    // Make API call to OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        max_completion_tokens: 2000,
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    console.log('AI Research Result:', content);

    try {
      const parsedContent = JSON.parse(content);
      
      return new Response(JSON.stringify({ 
        success: true, 
        data: parsedContent,
        type: type
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError);
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Failed to parse AI response as JSON',
        rawResponse: content
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

  } catch (error) {
    console.error('Error in AI Research Agent:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message || 'Internal server error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});