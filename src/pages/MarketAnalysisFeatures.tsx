import React from 'react';
import { LineChart, Clock, Activity, Settings, BarChart2, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <Card className="bg-card hover:bg-accent transition-colors duration-300">
    <CardContent className="p-6">
      <div className="flex items-start space-x-4">
        <div className="mt-1">
          <Icon className="h-6 w-6 text-emerald-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const formSchema = z.object({
  tradingPair: z.string().min(1, "Trading pair is required"),
  timeframe: z.string().min(1, "Timeframe is required"),
  indicators: z.string().min(1, "At least one indicator is required"),
  updateFrequency: z.string().min(1, "Update frequency is required"),
});

const MarketAnalysisFeatures = () => {
  const features = [
    {
      icon: Clock,
      title: "Multi-Timeframe Analysis",
      description: "Monitor market data across multiple timeframes from 1-minute to daily charts for comprehensive market insight."
    },
    {
      icon: Activity,
      title: "Advanced Market Data",
      description: "Track OHLCV (Open, High, Low, Close, Volume) data with precise timestamp recording for accurate analysis."
    },
    {
      icon: LineChart,
      title: "Technical Indicators",
      description: "Customize and implement multiple technical indicators like SMA and RSI for enhanced trading decisions."
    },
    {
      icon: Layers,
      title: "Multi-Pair Trading",
      description: "Monitor and analyze multiple trading pairs simultaneously with dedicated configuration for each."
    },
    {
      icon: BarChart2,
      title: "Real-Time Updates",
      description: "Continuous market data updates across all configured timeframes and trading pairs."
    },
    {
      icon: Settings,
      title: "Configurable Agents",
      description: "Create and manage multiple analysis agents with custom indicators and timeframe combinations."
    }
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tradingPair: "",
      timeframe: "",
      indicators: "",
      updateFrequency: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Market Analysis Agent</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Configure Your Market Analysis Agent</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">
            <FormField
              control={form.control}
              name="tradingPair"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trading Pair</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select trading pair" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SOL/USDC">SOL/USDC</SelectItem>
                        <SelectItem value="BTC/USDC">BTC/USDC</SelectItem>
                        <SelectItem value="ETH/USDC">ETH/USDC</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Choose the trading pair to analyze
                  </FormDescription>
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
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1m">1 minute</SelectItem>
                        <SelectItem value="5m">5 minutes</SelectItem>
                        <SelectItem value="15m">15 minutes</SelectItem>
                        <SelectItem value="1h">1 hour</SelectItem>
                        <SelectItem value="4h">4 hours</SelectItem>
                        <SelectItem value="1d">1 day</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Select the analysis timeframe
                  </FormDescription>
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
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select indicators" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sma">Simple Moving Average (SMA)</SelectItem>
                        <SelectItem value="ema">Exponential Moving Average (EMA)</SelectItem>
                        <SelectItem value="rsi">Relative Strength Index (RSI)</SelectItem>
                        <SelectItem value="macd">MACD</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Choose technical indicators for analysis
                  </FormDescription>
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
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select update frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time</SelectItem>
                        <SelectItem value="1min">Every minute</SelectItem>
                        <SelectItem value="5min">Every 5 minutes</SelectItem>
                        <SelectItem value="15min">Every 15 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Set how often the analysis should update
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Create Market Analysis Agent</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default MarketAnalysisFeatures;