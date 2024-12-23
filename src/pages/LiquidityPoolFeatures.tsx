import React from 'react';
import { Header } from "@/components/Header";
import { motion } from 'framer-motion';
import { 
  Coins, 
  TrendingUp, 
  BarChart3, 
  Settings, 
  Shield, 
  Zap,
  Bot,
  Code2,
  Settings2,
  Rocket
} from 'lucide-react';
import { FeatureCard } from '@/components/liquidity-pool/FeatureCard';

const LiquidityPoolFeatures = () => {
  const features = [
    {
      icon: Coins,
      title: "Automated Pool Management",
      description: "Smart rebalancing of liquidity positions across multiple pools for optimal yield generation."
    },
    {
      icon: TrendingUp,
      title: "Yield Optimization",
      description: "Continuous monitoring and adjustment of positions to maximize returns while minimizing impermanent loss."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time metrics and performance tracking for your liquidity positions."
    },
    {
      icon: Settings,
      title: "Custom Parameters",
      description: "Set your own risk parameters, rebalancing thresholds, and optimization strategies."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced protection against impermanent loss and market volatility."
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "High-speed position adjustments powered by Solana's rapid transaction processing."
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Build custom AI agents without code for automated liquidity management."
    },
    {
      icon: Code2,
      title: "Rust-Powered",
      description: "Built on reliable Rust infrastructure for maximum performance and security."
    },
    {
      icon: Settings2,
      title: "RIG Framework",
      description: "Powered by RIG framework for seamless integration and deployment."
    },
    {
      icon: Rocket,
      title: "Solana Integration",
      description: "Native support for Solana-based liquidity pools and DEXes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 animate-fade-in">
            Liquidity Pool <span className="text-emerald-500">Optimizer</span>
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