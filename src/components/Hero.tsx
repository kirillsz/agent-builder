import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="container flex flex-col items-center justify-center space-y-8 py-24 text-center animate-fade-in">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        Build{" "}
        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          AI Agents
        </span>{" "}
        with Rust
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Create, deploy, and manage AI agents using our no-code platform. Powered by Rust and
        integrated with Solana blockchain.
      </p>
      <div className="flex gap-4">
        <Button size="lg">
          Start Building
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          View Templates
        </Button>
      </div>
    </div>
  );
};