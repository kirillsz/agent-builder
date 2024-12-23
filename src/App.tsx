import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletProvider } from "@/components/WalletProvider";
import Index from "./pages/Index";
import CreateAgent from "./pages/CreateAgent";
import DeFiBotFeatures from "./pages/DeFiBotFeatures";
import RealEstateFeatures from "./pages/RealEstateFeatures";
import MarketAnalysisFeatures from "./pages/MarketAnalysisFeatures";
import DAOGovernanceFeatures from "./pages/DAOGovernanceFeatures";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WalletProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/create-agent" element={<CreateAgent />} />
            <Route path="/defi-bot-features" element={<DeFiBotFeatures />} />
            <Route path="/real-estate-features" element={<RealEstateFeatures />} />
            <Route path="/market-analysis-features" element={<MarketAnalysisFeatures />} />
            <Route path="/dao-governance-features" element={<DAOGovernanceFeatures />} />
          </Routes>
        </BrowserRouter>
      </WalletProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;