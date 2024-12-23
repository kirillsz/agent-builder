import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Activity, TrendingUp, Users, Clock } from "lucide-react";

const performanceData = [
  { date: "2024-01", tasks: 65 },
  { date: "2024-02", tasks: 78 },
  { date: "2024-03", tasks: 85 },
  { date: "2024-04", tasks: 91 },
  { date: "2024-05", tasks: 95 },
  { date: "2024-06", tasks: 88 },
];

const AgentDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Agent Performance Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                <h3 className="text-2xl font-bold">95.8%</h3>
              </div>
              <Activity className="h-8 w-8 text-emerald-500" />
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tasks Completed</p>
                <h3 className="text-2xl font-bold">1,284</h3>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                <h3 className="text-2xl font-bold">892</h3>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Response Time</p>
                <h3 className="text-2xl font-bold">1.2s</h3>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </Card>
        </div>

        {/* Performance Chart */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Monthly Performance</h2>
          <div className="h-[300px]">
            <ChartContainer
              className="h-[300px]"
              config={{
                tasks: {
                  color: "#10b981",
                },
              }}
            >
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <ChartTooltip />
                <Area
                  type="monotone"
                  dataKey="tasks"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorTasks)"
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default AgentDashboard;