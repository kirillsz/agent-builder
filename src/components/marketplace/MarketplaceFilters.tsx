import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const MarketplaceFilters = () => {
  return (
    <Card className="p-6 space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Filters</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Price Range (SOL)</Label>
            <Slider
              defaultValue={[0.1]}
              max={10}
              step={0.1}
              className="w-full"
            />
          </div>
          
          <div className="space-y-4">
            <Label>Categories</Label>
            <div className="space-y-2">
              {["Trading", "Analysis", "Governance", "Custom"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Switch id={category} />
                  <Label htmlFor={category}>{category}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};