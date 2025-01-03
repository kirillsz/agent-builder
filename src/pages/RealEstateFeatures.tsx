import React from 'react';
import { Building, LineChart, History, Search, Settings, Target } from 'lucide-react';
import { Header } from '@/components/Header';
import { FeatureCard } from '@/components/real-estate/FeatureCard';
import { ConfigurationForm } from '@/components/real-estate/ConfigurationForm';

const RealEstateFeatures = () => {
  const features = [
    {
      icon: Building,
      title: "Property Portfolio Management",
      description: "Track and manage property details including size, features, ownership, and complete transaction history."
    },
    {
      icon: LineChart,
      title: "Market Analysis",
      description: "Real-time tracking of market metrics including average price per square foot and rental rates across different areas."
    },
    {
      icon: Target,
      title: "Investment Strategy",
      description: "Customize ROI targets and cap rate requirements to match your investment goals and risk tolerance."
    },
    {
      icon: Search,
      title: "Opportunity Detection",
      description: "Automated identification of high-potential properties based on cap rates, ROI calculations, and market conditions."
    },
    {
      icon: History,
      title: "Transaction Tracking",
      description: "Comprehensive record-keeping of all property transactions, including sales and rentals with detailed price history."
    },
    {
      icon: Settings,
      title: "Automated Analysis",
      description: "Continuous monitoring of market conditions and property metrics to identify opportunities matching your criteria."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 animate-fade-in">
            Real Estate <span className="text-cyan-500">Analyzer</span>
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

export default RealEstateFeatures;