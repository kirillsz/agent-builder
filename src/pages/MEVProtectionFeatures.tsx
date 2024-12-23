import React from 'react';
import { Header } from "@/components/Header";
import { motion } from 'framer-motion';
import { Shield, ShieldCheck, Lock, LockKeyhole, Bot, Code2, Settings2, Rocket, Zap, Activity } from 'lucide-react';
import { FeatureCard } from '@/components/mev-protection/FeatureCard';
import { CustomAgentForm } from '@/components/mev-protection/CustomAgentForm';

const features = [
  {
    icon: Shield,
    title: "Frontrunning Protection",
    description: "Advanced protection against frontrunning attacks with real-time transaction monitoring."
  },
  {
    icon: ShieldCheck,
    title: "Sandwich Attack Prevention",
    description: "Detect and prevent sandwich attacks before they impact your transactions."
  },
  {
    icon: Lock,
    title: "Transaction Privacy",
    description: "Enhanced privacy features to protect your transaction details from MEV bots."
  },
  {
    icon: LockKeyhole,
    title: "Secure Routing",
    description: "Private transaction routing through protected mempool channels."
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Build custom AI agents without code for automated MEV protection."
  },
  {
    icon: Code2,
    title: "Rust-Powered",
    description: "Built on reliable Rust infrastructure for maximum security."
  },
  {
    icon: Settings2,
    title: "RIG Framework",
    description: "Powered by RIG framework for seamless integration."
  },
  {
    icon: Rocket,
    title: "Solana Integration",
    description: "Native support for Solana blockchain protection."
  },
  {
    icon: Zap,
    title: "Real-Time Monitoring",
    description: "Instant detection and response to potential MEV threats."
  },
  {
    icon: Activity,
    title: "Performance Analytics",
    description: "Detailed analytics on protected transactions and prevented attacks."
  }
];

const MEVProtectionFeatures = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 animate-fade-in">
            MEV <span className="text-emerald-500">Protection</span>
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

          <CustomAgentForm />
        </div>
      </main>
    </div>
  );
};

export default MEVProtectionFeatures;
