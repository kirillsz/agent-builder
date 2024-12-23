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
          <a href="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/1620e357-a837-4d2c-bcb7-d11141148c9a.png" alt="ARC Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">arc</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
            <a href="/create" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Create Agent
            </a>
            <a href="/marketplace" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Marketplace
            </a>
            <a href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </a>
          </nav>
        </div>
        <WalletMultiButton className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded" />
      </div>
    </header>
  );
};