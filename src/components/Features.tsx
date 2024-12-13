import { Bot, Cpu, Shield, Zap } from "lucide-react";

const features = [
  {
    title: "Visual Agent Builder",
    description: "Drag-and-drop interface for creating AI agents without coding",
    icon: Bot,
  },
  {
    title: "Rust-Powered",
    description: "Built with Rust for maximum performance and reliability",
    icon: Zap,
  },
  {
    title: "Blockchain Integration",
    description: "Seamlessly integrated with Solana blockchain",
    icon: Cpu,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security for your AI agents",
    icon: Shield,
  },
];

export const Features = () => {
  return (
    <div className="container py-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-shadow animate-fade-in"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};