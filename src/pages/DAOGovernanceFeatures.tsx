import React from 'react';
import { Shield, Vote, Users, Clock, Settings, LineChart } from 'lucide-react';
import { FeatureCard } from "@/components/dao-governance/FeatureCard";
import { CustomAgentForm } from "@/components/dao-governance/CustomAgentForm";
import { GovernanceCalculator } from "@/components/dao-governance/GovernanceCalculator";

const DAOGovernanceFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Voting",
      description: "Implement secure and transparent voting mechanisms with customizable thresholds and durations."
    },
    {
      icon: Vote,
      title: "Multiple Voting Strategies",
      description: "Support for token-weighted, quadratic, and equal-weight voting systems."
    },
    {
      icon: Users,
      title: "Vote Delegation",
      description: "Enable token holders to delegate their voting power to trusted community members."
    },
    {
      icon: Clock,
      title: "Flexible Timeframes",
      description: "Set custom proposal duration periods and voting windows."
    },
    {
      icon: Settings,
      title: "Customizable Rules",
      description: "Define specific rules and requirements for proposal creation and execution."
    },
    {
      icon: LineChart,
      title: "Analytics Dashboard",
      description: "Track voting patterns, participation rates, and governance metrics."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CustomAgentForm />
        <GovernanceCalculator />
      </div>
    </div>
  );
};

export default DAOGovernanceFeatures;