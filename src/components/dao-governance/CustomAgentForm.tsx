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
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  votingThreshold: z.string().regex(/^\d+(\.\d{1,2})?$/, "Must be a valid percentage"),
  quorumThreshold: z.string().regex(/^\d+(\.\d{1,2})?$/, "Must be a valid percentage"),
  proposalDuration: z.string().min(1, "Proposal duration is required"),
  votingStrategy: z.string().min(1, "Voting strategy is required"),
  enableDelegation: z.boolean(),
  customRules: z.string().optional(),
});

export const CustomAgentForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      votingThreshold: "60.00",
      quorumThreshold: "10.00",
      proposalDuration: "",
      votingStrategy: "",
      enableDelegation: false,
      customRules: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form values:", values);
    toast({
      title: "Custom Agent Created",
      description: "Your DAO governance agent has been configured successfully!",
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-12 p-6">
      <h2 className="text-2xl font-bold mb-6">Create Custom DAO Agent</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Agent Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Treasury Management Agent" {...field} />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="votingThreshold"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Voting Threshold (%)</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" step="0.01" />
                  </FormControl>
                  <FormDescription>
                    Percentage of votes needed to pass a proposal
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quorumThreshold"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quorum Threshold (%)</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" step="0.01" />
                  </FormControl>
                  <FormDescription>
                    Minimum participation required
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="proposalDuration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proposal Duration</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="3d">3 Days</SelectItem>
                    <SelectItem value="5d">5 Days</SelectItem>
                    <SelectItem value="7d">7 Days</SelectItem>
                    <SelectItem value="14d">14 Days</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="votingStrategy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Voting Strategy</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select strategy" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="token-weighted">Token Weighted</SelectItem>
                    <SelectItem value="quadratic">Quadratic Voting</SelectItem>
                    <SelectItem value="equal">Equal Weight</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="enableDelegation"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Enable Vote Delegation</FormLabel>
                  <FormDescription>
                    Allow token holders to delegate their voting power
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
            name="customRules"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Custom Rules (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Add any custom rules or requirements..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Specify additional rules or requirements for your governance agent
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Create Agent</Button>
        </form>
      </Form>
    </Card>
  );
};