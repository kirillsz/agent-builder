import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { categoryColors } from "./templateUtils";

interface TemplateCardProps {
  title: string;
  description: string;
  category: string;
  arcRequired: string;
  icon: LucideIcon;
  onClick: () => void;
}

export const TemplateCard = ({
  title,
  description,
  category,
  arcRequired,
  icon: Icon,
  onClick,
}: TemplateCardProps) => (
  <div
    className="group rounded-lg border border-gray-800 bg-card p-6 transition-colors hover:border-gray-700 animate-fade-in cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-center gap-4 mb-4">
      <Icon className="h-8 w-8 text-cyan-500" />
      <Badge className={categoryColors[category as keyof typeof categoryColors]}>
        {category}
      </Badge>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <p className="text-sm text-muted-foreground">{arcRequired}</p>
  </div>
);