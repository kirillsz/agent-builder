import React from 'react';
import { Shield, Vote, Users, Gavel, BarChart2, Settings } from 'lucide-react';
import { Header } from '@/components/Header';
import { FeatureCard } from '@/components/dao-governance/FeatureCard';
import { GovernanceCalculator } from '@/components/dao-governance/GovernanceCalculator';

const DAOGovernanceFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Voting System",
      description: "Implement secure on-chain voting mechanisms with delegation capabilities and voting power tracking."
    },
    {
      icon: Vote,
      title: "Proposal Management",
      description: "Create and manage proposals with customizable voting options and execution parameters."
    },
    {
      icon: Users,
      title: "Delegation System",
      description: "Flexible voting power delegation system allowing users to delegate their voting rights."
    },
    {
      icon: Gavel,
      title: "Governance Rules",
      description: "Configurable voting thresholds and quorum requirements for proposal execution."
    },
    {
      icon: BarChart2,
      title: "Real-time Analytics",
      description: "Track voting progress and analyze governance participation metrics in real-time."
    },
    {
      icon: Settings,
      title: "Customizable Parameters",
      description: "Adjust voting periods, thresholds, and other governance parameters to suit your DAO's needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 animate-fade-in">
            DAO Governance <span className="text-primary">Features</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          <GovernanceCalculator />
        </div>
      </main>
    </div>
  );
};

export default DAOGovernanceFeatures;