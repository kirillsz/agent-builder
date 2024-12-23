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
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/Header";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  type: z.string().min(1, "Please select an agent type"),
  inputFormat: z.string().min(1, "Please select an input format"),
  outputFormat: z.string().min(1, "Please select an output format"),
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
      <main className="container max-w-2xl py-16">
        <h1 className="text-4xl font-bold mb-8">Create Custom Agent</h1>
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
                  <FormDescription>
                    Choose the type of agent you want to create
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Agent"}
            </Button>
          </form>
        </Form>
      </main>
    </div>
  );
};

export default CreateAgent;