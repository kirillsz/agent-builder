import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  tradingPair: z.string().min(1, "Trading pair is required"),
  timeframe: z.string().min(1, "Timeframe is required"),
  indicators: z.string().min(1, "At least one indicator is required"),
  updateFrequency: z.string().min(1, "Update frequency is required"),
});

export const ConfigurationForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tradingPair: "",
      timeframe: "",
      indicators: "",
      updateFrequency: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form values:", values);
    toast({
      title: "Agent Configured",
      description: "Your market analysis agent has been configured successfully!",
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 p-6 rounded-lg border border-gray-800 bg-card animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Configure Your Market Analysis Agent</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="tradingPair"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trading Pair</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select trading pair" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background border-2 border-border">
                    <SelectItem value="SOL/USDC" className="hover:bg-accent focus:bg-accent">SOL/USDC</SelectItem>
                    <SelectItem value="BTC/USDC" className="hover:bg-accent focus:bg-accent">BTC/USDC</SelectItem>
                    <SelectItem value="ETH/USDC" className="hover:bg-accent focus:bg-accent">ETH/USDC</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeframe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Timeframe</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background border-2 border-border">
                    <SelectItem value="1m" className="hover:bg-accent focus:bg-accent">1 Minute</SelectItem>
                    <SelectItem value="5m" className="hover:bg-accent focus:bg-accent">5 Minutes</SelectItem>
                    <SelectItem value="15m" className="hover:bg-accent focus:bg-accent">15 Minutes</SelectItem>
                    <SelectItem value="1h" className="hover:bg-accent focus:bg-accent">1 Hour</SelectItem>
                    <SelectItem value="4h" className="hover:bg-accent focus:bg-accent">4 Hours</SelectItem>
                    <SelectItem value="1d" className="hover:bg-accent focus:bg-accent">1 Day</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="indicators"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Technical Indicators</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select indicators" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background border-2 border-border">
                    <SelectItem value="sma" className="hover:bg-accent focus:bg-accent">Simple Moving Average (SMA)</SelectItem>
                    <SelectItem value="ema" className="hover:bg-accent focus:bg-accent">Exponential Moving Average (EMA)</SelectItem>
                    <SelectItem value="rsi" className="hover:bg-accent focus:bg-accent">Relative Strength Index (RSI)</SelectItem>
                    <SelectItem value="macd" className="hover:bg-accent focus:bg-accent">MACD</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="updateFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Update Frequency</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select update frequency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background border-2 border-border">
                    <SelectItem value="realtime" className="hover:bg-accent focus:bg-accent">Real-time</SelectItem>
                    <SelectItem value="1min" className="hover:bg-accent focus:bg-accent">Every minute</SelectItem>
                    <SelectItem value="5min" className="hover:bg-accent focus:bg-accent">Every 5 minutes</SelectItem>
                    <SelectItem value="15min" className="hover:bg-accent focus:bg-accent">Every 15 minutes</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Configure Agent</Button>
        </form>
      </Form>
    </div>
  );
};