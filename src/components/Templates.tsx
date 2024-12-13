import { Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const templates = [
  {
    title: "DeFi Trading Bot",
    description: "Automated trading with customizable strategies",
    category: "intermediate",
    arcRequired: "100 ARC",
  },
  {
    title: "DAO Governance Agent",
    description: "Automated proposal analysis and voting",
    category: "beginner",
    arcRequired: "50 ARC",
  },
  {
    title: "Market Analysis Agent",
    description: "Real-time market data analysis and reporting",
    category: "advanced",
    arcRequired: "150 ARC",
  },
];

const categoryColors = {
  beginner: "bg-green-500/10 text-green-500",
  intermediate: "bg-yellow-500/10 text-yellow-500",
  advanced: "bg-red-500/10 text-red-500",
};

export const Templates = () => {
  return (
    <div className="container py-24">
      <h2 className="text-3xl font-bold mb-8">Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.title}
            className="group rounded-lg border border-gray-800 bg-card p-6 transition-colors hover:border-gray-700 animate-fade-in"
          >
            <div className="flex items-center gap-4 mb-4">
              <Bot className="h-8 w-8 text-emerald-500" />
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