import React from 'react';
import { Activity, Settings, TrendingUp, Shield, History, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <Card className="bg-white hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
    <CardContent className="p-6">
      <div className="flex items-start space-x-4">
        <div className="mt-1">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

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
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">DeFi Trading Bot Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeFiBotFeatures;