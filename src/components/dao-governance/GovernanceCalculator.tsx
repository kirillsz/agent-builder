import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export const GovernanceCalculator = () => {
  const { toast } = useToast();
  const [totalSupply, setTotalSupply] = useState('');
  const [votingPower, setVotingPower] = useState('');
  const [quorumThreshold, setQuorumThreshold] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculateVotingMetrics = () => {
    const supply = parseFloat(totalSupply);
    const power = parseFloat(votingPower);
    const threshold = parseFloat(quorumThreshold);

    if (isNaN(supply) || isNaN(power) || isNaN(threshold)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for all fields",
        variant: "destructive",
      });
      return;
    }

    const votingPercentage = (power / supply) * 100;
    const quorumMet = votingPercentage >= threshold;

    setResult(`Voting Power: ${votingPercentage.toFixed(2)}% ${quorumMet ? '(Quorum Met)' : '(Quorum Not Met)'}`);
  };

  return (
    <Card className="mt-12 animate-fade-in">
      <CardHeader>
        <CardTitle>Governance Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="totalSupply">Total Token Supply</Label>
          <Input
            id="totalSupply"
            type="number"
            placeholder="Enter total supply"
            value={totalSupply}
            onChange={(e) => setTotalSupply(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="votingPower">Voting Power</Label>
          <Input
            id="votingPower"
            type="number"
            placeholder="Enter voting power"
            value={votingPower}
            onChange={(e) => setVotingPower(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quorumThreshold">Quorum Threshold (%)</Label>
          <Input
            id="quorumThreshold"
            type="number"
            placeholder="Enter quorum threshold"
            value={quorumThreshold}
            onChange={(e) => setQuorumThreshold(e.target.value)}
          />
        </div>
        <Button onClick={calculateVotingMetrics} className="w-full">
          Calculate
        </Button>
        {result && (
          <div className="mt-4 p-4 rounded-lg bg-primary/10 text-foreground">
            {result}
          </div>
        )}
      </CardContent>
    </Card>
  );
};