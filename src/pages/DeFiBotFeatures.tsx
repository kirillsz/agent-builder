import React from 'react';
import { Activity, Settings, TrendingUp, Shield, History, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  tradingPair: z.string().min(1, "Trading pair is required"),
  strategy: z.string().min(1, "Strategy is required"),
  interval: z.string().min(1, "Interval is required"),
  stopLoss: z.string().regex(/^\d+(\.\d{1,2})?$/, "Stop loss must be a valid percentage"),
  takeProfit: z.string().regex(/^\d+(\.\d{1,2})?$/, "Take profit must be a valid percentage"),
});

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tradingPair: "",
      strategy: "",
      interval: "",
      stopLoss: "5.00",
      takeProfit: "10.00",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form values:", values);
    toast({
      title: "Agent Configured",
      description: "Your trading bot has been configured successfully!",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group rounded-lg border border-gray-800 bg-card p-6 transition-colors hover:border-gray-700 animate-fade-in cursor-pointer">
          <CardContent className="p-0">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                <Icon className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Configure Trading Bot</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="tradingPair"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trading Pair</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select trading pair" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="SOL/USDC">SOL/USDC</SelectItem>
                      <SelectItem value="ETH/USDC">ETH/USDC</SelectItem>
                      <SelectItem value="BTC/USDC">BTC/USDC</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="strategy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Strategy</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select strategy" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="SMA_CROSSOVER">SMA Crossover</SelectItem>
                      <SelectItem value="RSI">RSI</SelectItem>
                      <SelectItem value="MACD">MACD</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interval"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Interval</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select interval" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1m">1 minute</SelectItem>
                      <SelectItem value="5m">5 minutes</SelectItem>
                      <SelectItem value="15m">15 minutes</SelectItem>
                      <SelectItem value="1h">1 hour</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stopLoss"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stop Loss (%)</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" step="0.01" />
                  </FormControl>
                  <FormDescription>
                    Percentage below entry price to cut losses
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="takeProfit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Take Profit (%)</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" step="0.01" />
                  </FormControl>
                  <FormDescription>
                    Percentage above entry price to take profits
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Configure Bot</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

const DeFiBotFeatures = () => {
  const features = [
    {
      icon: Settings,
      title: "Customizable Trading Strategies",
      description: "Configure your bot with specific trading pairs, strategy types (like SMA Crossover or RSI), and personalized parameters to match your trading style."
    },
    {
      icon: Shield,
      title: "Advanced Risk Management",
      description: "Built-in risk controls with customizable take-profit and stop-loss percentages to protect your investments and automate exit strategies."
    },
    {
      icon: Activity,
      title: "Real-time Order Management",
      description: "Comprehensive order handling system supporting market and limit orders with real-time status tracking and position management."
    },
    {
      icon: History,
      title: "Order History Tracking",
      description: "Detailed historical records of all trades, including filled amounts, timestamps, and complete order lifecycle tracking."
    },
    {
      icon: TrendingUp,
      title: "Position Tracking",
      description: "Real-time monitoring of your positions across different trading pairs, including base and quote currency amounts."
    },
    {
      icon: BarChart,
      title: "Market Analysis Engine",
      description: "Automated market analysis system that continuously evaluates trading opportunities based on your configured strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 animate-fade-in">
            DeFi Trading Bot <span className="text-emerald-500">Features</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeFiBotFeatures;