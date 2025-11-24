import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface SensorDataCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  status: 'good' | 'warning' | 'danger';
  sparklineData: number[];
  color: string;
}

export function SensorDataCard({
  icon: Icon,
  label,
  value,
  unit,
  min,
  max,
  status,
  sparklineData,
  color,
}: SensorDataCardProps) {
  const statusConfig = {
    good: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', badge: 'bg-emerald-500', glow: 'shadow-emerald-500/50' },
    warning: { bg: 'bg-amber-500/10', text: 'text-amber-400', badge: 'bg-amber-500', glow: 'shadow-amber-500/50' },
    danger: { bg: 'bg-red-500/10', text: 'text-red-400', badge: 'bg-red-500', glow: 'shadow-red-500/50' },
  };

  const config = statusConfig[status];
  const chartData = sparklineData.map((value, index) => ({ value, index }));

  return (
    <Card className="bg-[#1a1a2e]/50 backdrop-blur-xl border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-3 text-base">
            <div className={`p-3 ${config.bg} rounded-2xl relative`}>
              <Icon className={`w-5 h-5 ${config.text}`} style={{ color }} />
              <div className={`absolute inset-0 rounded-2xl ${config.badge} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`} />
            </div>
            <span className="text-gray-200">{label}</span>
          </CardTitle>
          <div className={`w-2.5 h-2.5 rounded-full ${config.badge} ${config.glow} shadow-lg animate-pulse`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Current Value */}
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white">{value}</span>
              <span className="text-sm text-gray-400">{unit}</span>
            </div>
          </div>

          {/* Sparkline Chart */}
          <div className="h-16 -mx-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={color}
                  strokeWidth={3}
                  dot={false}
                  filter="url(#glow)"
                />
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Min/Max Range */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-purple-500/10">
            <span>Min: {min}{unit}</span>
            <span>Max: {max}{unit}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}