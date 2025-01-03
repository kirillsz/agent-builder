import { Bot, Database, Shield, Rocket, ChartBar, Coins, Brain } from "lucide-react";

export const categoryColors = {
  beginner: "bg-green-500/10 text-green-500",
  intermediate: "bg-yellow-500/10 text-yellow-500",
  advanced: "bg-red-500/10 text-red-500"
};

export const templates = [
  {
    title: "DAO Governance Agent",
    description: "Implement automated processes for DAO administration and proposal handling",
    icon: Brain,
    category: "beginner",
    arcRequired: ".1 SOL"
  },
  {
    title: "DeFi Trading Bot",
    description: "Develop automated trading bots for decentralized finance (DeFi) protocols",
    icon: Bot,
    category: "intermediate",
    arcRequired: ".1 SOL"
  },
  {
    title: "Real Estate Investment Analyzer Agent",
    description: "Examine potential investments in real estate.",
    icon: Database,
    category: "advanced",
    arcRequired: ".1 SOL"
  },
  {
    title: "Liquidity Pool Optimizer",
    description: "Enhance the profitability of liquidity pool positions.",
    icon: Coins,
    category: "advanced",
    arcRequired: ".1 SOL"
  },
  {
    title: "MEV Protection Agent",
    description: "Safeguard transactions against MEV and frontrunning",
    icon: Shield,
    category: "intermediate",
    arcRequired: ".1 SOL"
  },
  {
    title: "NFT Market Intelligence",
    description: "Keep track of and analyze NFT market trends.",
    icon: Rocket,
    category: "advanced",
    arcRequired: ".1 SOL"
  },
];