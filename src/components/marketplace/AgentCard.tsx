import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

interface Agent {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface AgentCardProps {
  agent: Agent;
}

export const AgentCard = ({ agent }: AgentCardProps) => {
  const { toast } = useToast();

  const handlePurchase = () => {
    toast({
      title: "Purchase initiated",
      description: `Starting purchase process for ${agent.title}`,
    });
  };

  return (
    <Card className="overflow-hidden group hover:border-primary transition-colors animate-fade-in">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={agent.image}
          alt={agent.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-2 right-2">{agent.category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{agent.title}</h3>
        <p className="text-muted-foreground text-sm">{agent.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="font-bold">{agent.price} SOL</span>
        <Button onClick={handlePurchase}>Purchase</Button>
      </CardFooter>
    </Card>
  );
};