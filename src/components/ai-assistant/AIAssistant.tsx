import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Key, X } from "lucide-react";
import { useOpenAI } from '@/hooks/useOpenAI';

export const AIAssistant = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [tempKey, setTempKey] = useState('');
  const { toast } = useToast();
  const { apiKey, saveApiKey, clearApiKey } = useOpenAI();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please add your OpenAI API key first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "You are an AI assistant helping developers create and configure AI agents. Provide specific, actionable advice for agent development."
            },
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.7,
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from OpenAI');
      }

      const data = await response.json();
      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to get AI assistance. Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveKey = () => {
    if (tempKey.trim()) {
      saveApiKey(tempKey.trim());
      setShowKeyInput(false);
      setTempKey('');
      toast({
        title: "Success",
        description: "API key has been saved",
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>AI Assistant for Agent Development</CardTitle>
        {apiKey ? (
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              clearApiKey();
              toast({
                title: "API Key Removed",
                description: "Your OpenAI API key has been removed",
              });
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowKeyInput(true)}
          >
            <Key className="h-4 w-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {showKeyInput && !apiKey && (
          <div className="mb-4 space-y-2">
            <Input
              type="password"
              placeholder="Enter your OpenAI API key"
              value={tempKey}
              onChange={(e) => setTempKey(e.target.value)}
            />
            <div className="flex gap-2">
              <Button onClick={handleSaveKey} className="flex-1">
                Save API Key
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowKeyInput(false);
                  setTempKey('');
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Textarea
              placeholder="Describe the agent you want to develop..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <Button 
            type="submit" 
            disabled={isLoading || !prompt.trim() || !apiKey}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Getting AI Assistance...
              </>
            ) : (
              'Get AI Assistance'
            )}
          </Button>
          {response && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <pre className="whitespace-pre-wrap">{response}</pre>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};