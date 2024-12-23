import { Bot, Database, Shield, Rocket, ChartBar } from "lucide-react";
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { DeFiTradingContract } from "../contracts/DeFiTradingContract";
import { GoverningContract } from "../contracts/GoverningContract";
import { RealEstateContract } from "../contracts/RealEstateContract";
import { MarketAnalysisContract } from "../contracts/MarketAnalysisContract";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { TimeFrame } from "../types/TimeFrame";
import { TemplateCard } from "./templates/TemplateCard";
import { templates } from "./templates/templateUtils";

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

export const Templates = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleTemplateClick = async (template: typeof templates[0]) => {
    if (template.title === "Market Analysis Agent") {
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
          timeframes: [TimeFrame.OneMinute, TimeFrame.FiveMinutes, TimeFrame.FifteenMinutes],
          indicators: ["SMA_20", "RSI_14"],
          opportunityCriteria: {
            indicatorCondition: "SMA_20_CROSS_UP_SMA_50"
          }
        };
        
        await marketAnalysisContract.createAgent(config);
        navigate('/market-analysis-features');
        
        console.log("Market Analysis Agent clicked:", template);
      } catch (error) {
        console.error("Error creating market analysis agent:", error);
        toast({
          title: "Error",
          description: "Failed to initialize market analysis agent",
          duration: 3000,
        });
      }
    } else if (template.title === "DAO Governance Agent") {
      toast({
        title: "DAO Governance Agent Selected",
        description: "Initializing DAO governance agent...",
        duration: 3000,
      });
      
      try {
        const config = {
          owner: new PublicKey('11111111111111111111111111111111'),
          description: "DAO Governance Agent Instance",
          votingThreshold: 0.6,
          quorumThreshold: 0.01
        };
        
        await governingContract.createAgent(config);
        navigate('/dao-governance-features');
        
        console.log("DAO Governance Agent clicked:", template);
      } catch (error) {
        console.error("Error creating DAO governance agent:", error);
        toast({
          title: "Error",
          description: "Failed to initialize DAO governance agent",
          duration: 3000,
        });
      }
    } else if (template.title === "DeFi Trading Bot") {
      toast({
        title: "DeFi Trading Bot Selected",
        description: "Initializing DeFi trading bot configuration...",
        duration: 3000,
      });
      
      try {
        const config = {
          owner: new PublicKey('11111111111111111111111111111111'),
          description: "DeFi Trading Bot Instance",
          votingThreshold: 0.6,
          quorumThreshold: 0.01,
          inputFormat: "JSON",
          outputFormat: "JSON"
        };
        
        await governingContract.createAgent(config);
        navigate('/defi-bot-features');
        
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
        navigate('/real-estate-features');
        
        console.log("Real Estate Investment Analyzer clicked:", template);
      } catch (error) {
        console.error("Error creating real estate analyzer agent:", error);
        toast({
          title: "Error",
          description: "Failed to initialize real estate investment analyzer",
          duration: 3000,
        });
      }
    } else if (template.title === "Liquidity Pool Optimizer") {
      toast({
        title: "Liquidity Pool Optimizer Selected",
        description: "Initializing liquidity pool optimizer...",
        duration: 3000,
      });
      navigate('/liquidity-pool-features');
    } else if (template.title === "MEV Protection Agent") {
      toast({
        title: "MEV Protection Agent Selected",
        description: "Initializing MEV protection agent...",
        duration: 3000,
      });
      navigate('/mev-protection-features');
    } else if (template.title === "NFT Market Intelligence") {
      toast({
        title: "NFT Market Intelligence Selected",
        description: "Initializing NFT market intelligence...",
        duration: 3000,
      });
      navigate('/nft-market-features');
    }
  };

  return (
    <div className="container py-16">
      <h2 className="text-3xl font-bold mb-8">Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <TemplateCard
            key={template.title}
            {...template}
            onClick={() => handleTemplateClick(template)}
          />
        ))}
      </div>
    </div>
  );
};