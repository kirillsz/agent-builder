import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="container flex flex-col items-center justify-center space-y-8 py-24 text-center animate-fade-in">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        Build AI Agents with{" "}
        <span className="text-emerald-500">No Code</span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Create, deploy, and manage AI agents on Solana using our decentralized platform. Powered by Rig, Rust, and ARC tokens.
      </p>
      <div className="flex gap-4">
        <Button size="lg" className="bg-white text-black hover:bg-gray-100">
          Start Building
        </Button>
        <Button variant="outline" size="lg">
          View Templates
        </Button>
      </div>
    </div>
  );
};