import React from 'react';
import { LineChart, Clock, Activity, Settings, BarChart2, Layers } from 'lucide-react';
import { Header } from '@/components/Header';
import { FeatureCard } from '@/components/market-analysis/FeatureCard';
import { ConfigurationForm } from '@/components/market-analysis/ConfigurationForm';

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 animate-fade-in">
            Market Analysis <span className="text-emerald-500">Features</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          <ConfigurationForm />
        </div>
      </main>
    </div>
  );
};

export default MarketAnalysisFeatures;