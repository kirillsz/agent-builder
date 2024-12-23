import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/Header";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Zap, Target, Shield, Settings, Bot, Code, Network } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  type: z.string().min(1, "Please select an agent type"),
  inputFormat: z.string().min(1, "Please select an input format"),
  outputFormat: z.string().min(1, "Please select an output format"),
  maxTokens: z.number().min(1).max(4000),
  temperature: z.number().min(0).max(1),
  isPublic: z.boolean(),
  category: z.string().min(1, "Please select a category"),
  webhookUrl: z.string().url().optional().or(z.literal("")),
  customInstructions: z.string().min(10, "Custom instructions must be at least 10 characters").optional(),
  apiKey: z.string().min(1, "API key is required"),
});

const CreateAgent = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      type: "",
      inputFormat: "",
      outputFormat: "",
      maxTokens: 2000,
      temperature: 0.7,
      isPublic: false,
      category: "",
      webhookUrl: "",
      customInstructions: "",
      apiKey: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      console.log("Form values:", values);
      toast({
        title: "Agent Created",
        description: "Your custom agent has been created successfully!",
      });
      navigate("/");
    } catch (error) {
      console.error("Error creating agent:", error);
      toast({
        title: "Error",
        description: "Failed to create agent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold animate-fade-in">Create Custom Agent</h1>
              <p className="text-muted-foreground text-lg">
                Design and configure your AI agent with advanced capabilities and custom behaviors.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <Card className="p-4 hover:border-primary transition-colors animate-fade-in">
                  <CardContent className="space-y-2 p-0">
                    <Cpu className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold">Intelligent Processing</h3>
                    <p className="text-sm text-muted-foreground">Advanced AI algorithms for optimal performance</p>
                  </CardContent>
                </Card>
                <Card className="p-4 hover:border-primary transition-colors animate-fade-in delay-100">
                  <CardContent className="space-y-2 p-0">
                    <Zap className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold">Fast Execution</h3>
                    <p className="text-sm text-muted-foreground">Real-time processing and quick responses</p>
                  </CardContent>
                </Card>
                <Card className="p-4 hover:border-primary transition-colors animate-fade-in delay-200">
                  <CardContent className="space-y-2 p-0">
                    <Target className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold">Precise Control</h3>
                    <p className="text-sm text-muted-foreground">Fine-tune your agent's behavior</p>
                  </CardContent>
                </Card>
                <Card className="p-4 hover:border-primary transition-colors animate-fade-in delay-300">
                  <CardContent className="space-y-2 p-0">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold">Secure Operations</h3>
                    <p className="text-sm text-muted-foreground">Built-in security and protection</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <Card className="w-full max-w-2xl mx-auto animate-fade-in">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Agent Name</FormLabel>
                  <FormControl>
                    <Input placeholder="My Custom Agent" {...field} />
                  </FormControl>
                  <FormDescription>
                    Give your agent a unique and descriptive name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe what your agent does..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Explain the purpose and capabilities of your agent
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Agent Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select agent type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="trading">Trading Bot</SelectItem>
                        <SelectItem value="analysis">Market Analysis</SelectItem>
                        <SelectItem value="governance">DAO Governance</SelectItem>
                        <SelectItem value="custom">Custom Agent</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="productivity">Productivity</SelectItem>
                        <SelectItem value="social">Social</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="inputFormat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Input Format</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select input format" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="json">JSON</SelectItem>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="binary">Binary</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="outputFormat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Output Format</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select output format" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="json">JSON</SelectItem>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="binary">Binary</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="maxTokens"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Max Tokens: {field.value}</FormLabel>
                  <FormControl>
                    <Slider
                      min={1}
                      max={4000}
                      step={1}
                      value={[field.value]}
                      onValueChange={(vals) => field.onChange(vals[0])}
                    />
                  </FormControl>
                  <FormDescription>
                    Maximum number of tokens for agent responses
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="temperature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Temperature: {field.value}</FormLabel>
                  <FormControl>
                    <Slider
                      min={0}
                      max={1}
                      step={0.1}
                      value={[field.value]}
                      onValueChange={(vals) => field.onChange(vals[0])}
                    />
                  </FormControl>
                  <FormDescription>
                    Controls randomness in agent responses (0 = deterministic, 1 = creative)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="webhookUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Webhook URL (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://api.example.com/webhook" {...field} />
                  </FormControl>
                  <FormDescription>
                    URL to receive agent notifications and updates
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customInstructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Custom Instructions (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add any specific instructions for your agent..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide additional instructions or context for your agent
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="apiKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>API Key</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your API key" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your API key for authentication
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isPublic"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Public Agent</FormLabel>
                    <FormDescription>
                      Make this agent available to other users
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    <Bot className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Creating..." : "Create Agent"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 hover:border-primary transition-colors animate-fade-in">
              <CardContent className="space-y-4 p-0">
                <Code className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Custom Logic</h3>
                <p className="text-muted-foreground">
                  Implement your own business rules and decision-making processes
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors animate-fade-in delay-100">
              <CardContent className="space-y-4 p-0">
                <Settings className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Flexible Configuration</h3>
                <p className="text-muted-foreground">
                  Easily adjust parameters and behaviors to match your needs
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors animate-fade-in delay-200">
              <CardContent className="space-y-4 p-0">
                <Network className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Integration Ready</h3>
                <p className="text-muted-foreground">
                  Connect with external systems and services seamlessly
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateAgent;
