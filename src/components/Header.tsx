import { Button } from "@/components/ui/button";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Wallet } from "lucide-react";

export const Header = () => {
  const { wallet } = useWallet();

  return (
    <header className="fixed top-0 w-full border-b border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="font-bold text-xl">Agent Builder</a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/agent-dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Agent Dashboard
            </a>
            <a href="/create-agent" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Create Agent
            </a>
            <a href="/marketplace" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Marketplace
            </a>
            <a 
              href="https://github.com/j3bruins/agent-accelerator" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              GitHub
            </a>
          </nav>
        </div>
        <WalletMultiButton className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded" />
      </div>
    </header>
  );
};