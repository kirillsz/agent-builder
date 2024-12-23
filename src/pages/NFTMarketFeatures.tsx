import React from 'react';
import { Header } from "@/components/Header";
import { motion } from 'framer-motion';
import { ChartBar, Signal, Network, DollarSign, Target, Database } from 'lucide-react';
import { NFTMarketForm } from '@/components/nft-market/NFTMarketForm';
import { FeatureCard } from '@/components/nft-market/FeatureCard';

const NFTMarketFeatures = () => {
  const features = [
    {
      icon: ChartBar,
      title: "Market Trend Analysis",
      description: "Track and analyze NFT market trends across multiple collections and marketplaces."
    },
    {
      icon: Signal,
      title: "Real-Time Price Tracking",
      description: "Monitor floor prices, sales volumes, and price movements in real-time."
    },
    {
      icon: Network,
      title: "Cross-Market Analysis",
      description: "Compare NFT performance across different marketplaces and chains."
    },
    {
      icon: DollarSign,
      title: "Profit Opportunities",
      description: "Identify potential arbitrage and investment opportunities automatically."
    },
    {
      icon: Target,
      title: "Smart Alerts",
      description: "Set up customizable alerts for price movements and market events."
    },
    {
      icon: Database,
      title: "Historical Data Analysis",
      description: "Access and analyze historical trading data for better decision making."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 animate-fade-in">
            NFT Market <span className="text-emerald-500">Intelligence</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
          
          <NFTMarketForm />
        </div>
      </main>
    </div>
  );
};

export default NFTMarketFeatures;