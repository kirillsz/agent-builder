import { Bot, Database, Shield, Rocket, ChartBar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { DeFiTradingContract } from "../contracts/DeFiTradingContract";
import { useToast } from "@/components/ui/use-toast";

// Initialize Solana connection and contract
const connection = new Connection(clusterApiUrl('devnet'));
// Using a valid devnet program ID (this is a placeholder - replace with your actual deployed program ID)
const programId = new PublicKey('11111111111111111111111111111111');
const tradingContract = new DeFiTradingContract(connection, programId);

const templates = [
  {
    title: "Liquidity Pool Optimizer Agent",
    description: "Automated LP optimization and yield maximization",
    category: "advanced",
    arcRequired: "200 ARC",
    icon: Database,
    contract: tradingContract,
  },
  {
    title: "MEV Protection Agent",
    description: "Protect transactions from MEV exploitation",
    category: "intermediate",
    arcRequired: "150 ARC",
    icon: Shield,
  },
  {
    title: "SPL Token Launch Assistant Agent",
    description: "Streamline token launches on Solana",
    category: "intermediate",
    arcRequired: "175 ARC",
    icon: Rocket,
  },
  {
    title: "NFT Market Intelligence Agent",
    description: "Real-time NFT market analysis and insights",
    category: "advanced",
    arcRequired: "225 ARC",
    icon: ChartBar,
  },
  {
    title: "Real Estate Investment Analyzer Agent",
    description: "On-chain real estate investment analysis",
    category: "advanced",
    arcRequired: "250 ARC",
    icon: Database,
  },
  {
    title: "Market Opportunity Analyzer Agent",
    description: "Identify and analyze market opportunities",
    category: "intermediate",
    arcRequired: "175 ARC",
    icon: Database,
  },
  {
    title: "DeFi Trading Bot",
    description: "Automated trading with customizable strategies",
    category: "intermediate",
    arcRequired: "100 ARC",
    icon: Bot,
  },
  {
    title: "DAO Governance Agent",
    description: "Automated proposal analysis and voting",
    category: "beginner",
    arcRequired: "50 ARC",
    icon: Bot,
  },
  {
    title: "Market Analysis Agent",
    description: "Real-time market data analysis and reporting",
    category: "advanced",
    arcRequired: "150 ARC",
    icon: Bot,
  },
];

const categoryColors = {
  beginner: "bg-green-500/10 text-green-500",
  intermediate: "bg-yellow-500/10 text-yellow-500",
  advanced: "bg-red-500/10 text-red-500",
};

export const Templates = () => {
  const { toast } = useToast();

  const handleTemplateClick = (template: typeof templates[0]) => {
    if (template.title === "DeFi Trading Bot") {
      toast({
        title: "DeFi Trading Bot Selected",
        description: "Initializing DeFi trading bot configuration...",
        duration: 3000,
      });
      
      // Here you can add additional logic for the DeFi Trading Bot
      console.log("DeFi Trading Bot clicked:", template);
    }
  };

  return (
    <div className="container py-16">
      <h2 className="text-3xl font-bold mb-8">Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.title}
            className="group rounded-lg border border-gray-800 bg-card p-6 transition-colors hover:border-gray-700 animate-fade-in cursor-pointer"
            onClick={() => handleTemplateClick(template)}
          >
            <div className="flex items-center gap-4 mb-4">
              <template.icon className="h-8 w-8 text-emerald-500" />
              <Badge className={categoryColors[template.category as keyof typeof categoryColors]}>
                {template.category}
              </Badge>
            </div>
            <h3 className="text-xl font-bold mb-2">{template.title}</h3>
            <p className="text-muted-foreground mb-4">{template.description}</p>
            <p className="text-sm text-muted-foreground">{template.arcRequired}</p>
          </div>
        ))}
      </div>
    </div>
  );
};