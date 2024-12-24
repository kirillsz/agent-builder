import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useOpenAI } from '@/hooks/useOpenAI';

export const OpenAIConfig = () => {
  const [newApiKey, setNewApiKey] = useState('');
  const { apiKey, saveApiKey } = useOpenAI();
  const { toast } = useToast();

  const handleSave = async () => {
    try {
      await saveApiKey(newApiKey);
      toast({
        title: "API Key Saved",
        description: "Your OpenAI API key has been saved successfully.",
      });
      setNewApiKey('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save API key. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <CardTitle>OpenAI Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Input
              type="password"
              placeholder="Enter your OpenAI API key"
              value={newApiKey}
              onChange={(e) => setNewApiKey(e.target.value)}
            />
            <Button onClick={handleSave}>Save API Key</Button>
          </div>
          {apiKey && (
            <p className="text-sm text-green-600">
              ✓ OpenAI API key is configured
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};