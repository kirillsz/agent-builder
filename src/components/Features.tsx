import { Bot, Code2, Coins, Database } from "lucide-react";

const features = [
  {
    title: "AI Agents",
    description: "Build custom AI agents without code",
    icon: Bot,
  },
  {
    title: "Rust-Powered",
    description: "Built on reliable Rust infrastructure",
    icon: Code2,
  },
  {
    title: "Decentralized",
    description: "Runs on Solana blockchain",
    icon: Database,
  },
  {
    title: "ARC Tokens",
    description: "Powered by ARC token economy",
    icon: Coins,
  },
];

export const Features = () => {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center space-y-4 animate-fade-in"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
              <feature.icon className="h-8 w-8 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};