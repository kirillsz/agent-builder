import React from 'react';
import { Activity, Settings, TrendingUp, Shield, History, BarChart } from 'lucide-react';
import { Header } from '@/components/Header';
import { FeatureCard } from '@/components/defi-bot/FeatureCard';
import { BotConfigurationForm } from '@/components/defi-bot/BotConfigurationForm';

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
          <BotConfigurationForm />
        </div>
      </main>
    </div>
  );
};

export default DeFiBotFeatures;