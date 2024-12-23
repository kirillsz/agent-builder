import { Bot, Database, Shield, Rocket, ChartBar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { DeFiTradingContract } from "../contracts/DeFiTradingContract";
import { GoverningContract } from "../contracts/GoverningContract";
import { RealEstateContract } from "../contracts/RealEstateContract";
import { MarketAnalysisContract } from "../contracts/MarketAnalysisContract";
import { useToast } from "@/components/ui/use-toast";

// Initialize Solana connection and contracts
const connection = new Connection(clusterApiUrl('devnet'));
const tradingProgramId = new PublicKey('11111111111111111111111111111111');
const governingProgramId = new PublicKey('11111111111111111111111111111111');
const realEstateProgramId = new PublicKey('11111111111111111111111111111111');
const marketAnalysisProgramId = new PublicKey('11111111111111111111111111111111');

const tradingContract = new DeFiTradingContract(connection, tradingProgramId);
const governingContract = new GoverningContract(connection, governingProgramId);
const realEstateContract = new RealEstateContract(connection, realEstateProgramId);
const marketAnalysisContract = new MarketAnalysisContract(connection, marketAnalysisProgramId);

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

  const handleTemplateClick = async (template: typeof templates[0]) => {
    if (template.title === "DeFi Trading Bot") {
      toast({
        title: "DeFi Trading Bot Selected",
        description: "Initializing DeFi trading bot configuration...",
        duration: 3000,
      });
      
      try {
        const config = {
          owner: new PublicKey('11111111111111111111111111111111'), // Replace with actual owner
          description: "DeFi Trading Bot Instance",
          inputFormat: "JSON",
          outputFormat: "JSON"
        };
        
        await governingContract.createAgent(config);
        
        console.log("DeFi Trading Bot clicked:", template);
      } catch (error) {
        console.error("Error creating DeFi bot agent:", error);
        toast({
          title: "Error",
          description: "Failed to initialize DeFi trading bot",
          duration: 3000,
        });
      }
    } else if (template.title === "Real Estate Investment Analyzer Agent") {
      toast({
        title: "Real Estate Investment Analyzer Selected",
        description: "Initializing real estate investment analyzer...",
        duration: 3000,
      });
      
      try {
        const config = {
          owner: new PublicKey('11111111111111111111111111111111'),
          description: "Real Estate Investment Analyzer Instance",
          targetArea: "San Francisco",
          desiredCapRate: 0.05,
          minRoi: 0.15
        };
        
        await realEstateContract.createAgent(config);
        
        console.log("Real Estate Investment Analyzer clicked:", template);
      } catch (error) {
        console.error("Error creating real estate analyzer agent:", error);
        toast({
          title: "Error",
          description: "Failed to initialize real estate investment analyzer",
          duration: 3000,
        });
      }
    } else if (template.title === "Market Analysis Agent") {
      toast({
        title: "Market Analysis Agent Selected",
        description: "Initializing market analysis agent...",
        duration: 3000,
      });
      
      try {
        const config = {
          owner: new PublicKey('11111111111111111111111111111111'),
          description: "Market Analysis Agent Instance",
          tradingPair: "SOL/USDC",
          timeframes: [0, 1, 2], // OneMinute, FiveMinutes, FifteenMinutes
          indicators: ["SMA_20", "RSI_14"]
        };
        
        await marketAnalysisContract.createAgent(config);
        
        console.log("Market Analysis Agent clicked:", template);
      } catch (error) {
        console.error("Error creating market analysis agent:", error);
        toast({
          title: "Error",
          description: "Failed to initialize market analysis agent",
          duration: 3000,
        });
      }
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
