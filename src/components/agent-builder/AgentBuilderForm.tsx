import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  agentType: z.string().min(1, "Agent type is required"),
  capabilities: z.array(z.string()).min(1, "Select at least one capability"),
  inputFormat: z.string().min(1, "Input format is required"),
  outputFormat: z.string().min(1, "Output format is required"),
  executionMode: z.string().min(1, "Execution mode is required"),
  customLogic: z.string().optional(),
  enableLogging: z.boolean(),
  enableMonitoring: z.boolean(),
  maxExecutionTime: z.string(),
  errorHandling: z.string(),
  triggers: z.array(z.string()),
  integrations: z.array(z.string()),
});

const agentTypes = [
  { value: "autonomous", label: "Autonomous Agent" },
  { value: "supervised", label: "Supervised Agent" },
  { value: "hybrid", label: "Hybrid Agent" },
  { value: "reactive", label: "Reactive Agent" },
  { value: "proactive", label: "Proactive Agent" },
];

const capabilities = [
  { value: "data-analysis", label: "Data Analysis" },
  { value: "decision-making", label: "Decision Making" },
  { value: "monitoring", label: "Monitoring" },
  { value: "automation", label: "Task Automation" },
  { value: "interaction", label: "User Interaction" },
  { value: "learning", label: "Machine Learning" },
  { value: "optimization", label: "Process Optimization" },
];

const executionModes = [
  { value: "realtime", label: "Real-time" },
  { value: "scheduled", label: "Scheduled" },
  { value: "event-driven", label: "Event-driven" },
  { value: "manual", label: "Manual Trigger" },
];

export const AgentBuilderForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      agentType: "",
      capabilities: [],
      inputFormat: "",
      outputFormat: "",
      executionMode: "",
      customLogic: "",
      enableLogging: true,
      enableMonitoring: true,
      maxExecutionTime: "60",
      errorHandling: "retry",
      triggers: [],
      integrations: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form values:", values);
    toast({
      title: "Agent Created",
      description: "Your custom agent has been configured successfully!",
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto p-6">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Configuration</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Settings</TabsTrigger>
          <TabsTrigger value="integration">Integrations</TabsTrigger>
        </TabsList>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
            <TabsContent value="basic">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Agent Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter agent name" {...field} />
                      </FormControl>
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
                          placeholder="Describe your agent's purpose and functionality..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="agentType"
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
                          {agentTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="executionMode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Execution Mode</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select execution mode" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {executionModes.map((mode) => (
                            <SelectItem key={mode.value} value={mode.value}>
                              {mode.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </TabsContent>

            <TabsContent value="advanced">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="enableLogging"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel>Enable Logging</FormLabel>
                          <FormDescription>
                            Track agent activities and performance
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

                  <FormField
                    control={form.control}
                    name="enableMonitoring"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel>Enable Monitoring</FormLabel>
                          <FormDescription>
                            Monitor agent health and performance
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
                </div>

                <FormField
                  control={form.control}
                  name="customLogic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Custom Logic</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Define custom rules or logic for your agent..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Write custom rules or logic in a structured format
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </TabsContent>

            <TabsContent value="integration">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="inputFormat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Input Format</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Specify the expected input format..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
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
                      <FormControl>
                        <Textarea
                          placeholder="Specify the expected output format..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </TabsContent>

            <Button type="submit" className="w-full">Create Agent</Button>
          </form>
        </Form>
      </Tabs>
    </Card>
  );
};