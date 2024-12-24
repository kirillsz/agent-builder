import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const AIAssistant = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { prompt }
      });

      if (error) throw error;
      
      if (data.error) {
        throw new Error(data.error.message);
      }
      
      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to get response from AI. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>AI Assistant</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Ask me anything about agent development..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[100px]"
          />
          <Button 
            onClick={handleSubmit} 
            disabled={isLoading || !prompt.trim()}
            className="w-full"
          >
            {isLoading ? "Thinking..." : "Get AI Assistance"}
          </Button>
          
          {response && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <pre className="whitespace-pre-wrap">{response}</pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};