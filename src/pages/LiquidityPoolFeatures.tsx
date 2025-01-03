import React from 'react';
import { Header } from "@/components/Header";
import { motion } from 'framer-motion';
import { Bot, Code2, Settings2, Rocket, Activity, LineChart, DollarSign, Target, Database, Zap } from 'lucide-react';
import { FeatureCard } from '@/components/liquidity-pool/FeatureCard';

const LiquidityPoolFeatures = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Agents",
      description: "Build custom AI agents without code for automated liquidity pool optimization."
    },
    {
      icon: Code2,
      title: "Rust-Powered",
      description: "Built on reliable Rust infrastructure for maximum efficiency."
    },
    {
      icon: Settings2,
      title: "RIG Framework",
      description: "Powered by RIG framework for seamless integration."
    },
    {
      icon: Rocket,
      title: "Solana Integration",
      description: "Native support for Solana blockchain optimization."
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Monitor liquidity pool performance in real-time."
    },
    {
      icon: LineChart,
      title: "APY Optimization",
      description: "Maximize returns through intelligent APY optimization strategies."
    },
    {
      icon: DollarSign,
      title: "Fee Analysis",
      description: "Comprehensive analysis of pool fees and rewards."
    },
    {
      icon: Target,
      title: "Smart Rebalancing",
      description: "Automated pool rebalancing based on market conditions."
    },
    {
      icon: Database,
      title: "Multi-Pool Management",
      description: "Manage and optimize multiple liquidity pools simultaneously."
    },
    {
      icon: Zap,
      title: "Impermanent Loss Protection",
      description: "Advanced strategies to minimize impermanent loss."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 animate-fade-in">
            Liquidity Pool <span className="text-cyan-500">Optimizer</span>
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
        </div>
      </main>
    </div>
  );
};

export default LiquidityPoolFeatures;