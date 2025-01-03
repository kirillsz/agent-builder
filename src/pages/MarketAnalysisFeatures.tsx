import React from 'react';
import { Header } from "@/components/Header";
import { motion } from 'framer-motion';
import { Code, LineChart, Clock, Settings, Activity, Lock, Bot, Cpu, Workflow, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { MarketAnalysisForm } from '@/components/market-analysis/MarketAnalysisForm';

const MarketAnalysisFeatures = () => {
  const features = [
    {
      icon: <Bot className="w-12 h-12 text-cyan-500" />,
      title: "AI Agents",
      description: "Build custom AI agents without code (.1 SOL)"
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
      title: "Rust-Powered",
      description: "Built on reliable Rust infrastructure (.1 SOL)"
    },
    {
      icon: <Workflow className="w-12 h-12 text-purple-500" />,
      title: "RIG",
      description: "Powered by RIG framework (.1 SOL)"
    },
    {
      icon: <Rocket className="w-12 h-12 text-yellow-500" />,
      title: "Sol",
      description: "Launchpad for Sol based projects (.1 SOL)"
    },
    {
      icon: <Code className="w-12 h-12 text-blue-500" />,
      title: "Configurable Trading Agents",
      description: "Create custom trading agents with flexible configurations for different trading pairs, timeframes, and indicators (.1 SOL)"
    },
    {
      icon: <LineChart className="w-12 h-12 text-green-500" />,
      title: "Real-Time Market Analysis",
      description: "Monitor market data across multiple timeframes with built-in support for technical indicators and opportunity detection (.1 SOL)"
    },
    {
      icon: <Activity className="w-12 h-12 text-purple-500" />,
      title: "Advanced Opportunity Detection",
      description: "Implement sophisticated trading strategies with customizable opportunity criteria and automated signal generation (.1 SOL)"
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "Multi-Timeframe Analysis",
      description: "Analyze markets across different timeframes from 1-minute to daily charts for comprehensive market insights (.1 SOL)"
    },
    {
      icon: <Settings className="w-12 h-12 text-indigo-500" />,
      title: "Instance Management",
      description: "Deploy and manage multiple agent instances with real-time status tracking and opportunity monitoring (.1 SOL)"
    },
    {
      icon: <Lock className="w-12 h-12 text-red-500" />,
      title: "Secure On-Chain Execution",
      description: "Built on Solana for high-speed, secure, and decentralized trading agent operations (.1 SOL)"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 animate-fade-in">
            Market Analysis <span className="text-cyan-500">Features</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <MarketAnalysisForm />
        </div>
      </main>
    </div>
  );
};

export default MarketAnalysisFeatures;