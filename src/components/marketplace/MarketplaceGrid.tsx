import { AgentCard } from "./AgentCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const agents = [
  {
    id: 1,
    title: "DeFi Trading Bot",
    description: "Automated trading bot for DeFi protocols with advanced strategies",
    price: 0.5,
    category: "Trading",
    image: "/lovable-uploads/1620e357-a837-4d2c-bcb7-d11141148c9a.png"
  },
  {
    id: 2,
    title: "Market Analysis Agent",
    description: "Real-time market analysis and trading signals",
    price: 0.8,
    category: "Analysis",
    image: "/lovable-uploads/1620e357-a837-4d2c-bcb7-d11141148c9a.png"
  },
  {
    id: 3,
    title: "DAO Governance Agent",
    description: "Automate DAO governance and proposal management",
    price: 0.3,
    category: "Governance",
    image: "/lovable-uploads/1620e357-a837-4d2c-bcb7-d11141148c9a.png"
  },
  {
    id: 4,
    title: "NFT Market Intelligence",
    description: "Track and analyze NFT market trends",
    price: 0.6,
    category: "Analysis",
    image: "/lovable-uploads/1620e357-a837-4d2c-bcb7-d11141148c9a.png"
  },
  {
    id: 5,
    title: "MEV Protection Agent",
    description: "Protect transactions from MEV and frontrunning",
    price: 0.7,
    category: "Trading",
    image: "/lovable-uploads/1620e357-a837-4d2c-bcb7-d11141148c9a.png"
  },
  {
    id: 6,
    title: "Liquidity Pool Optimizer",
    description: "Optimize liquidity pool positions and yields",
    price: 0.4,
    category: "Trading",
    image: "/lovable-uploads/1620e357-a837-4d2c-bcb7-d11141148c9a.png"
  }
];

export const MarketplaceGrid = () => {
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search agents..."
          className="pl-10"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};