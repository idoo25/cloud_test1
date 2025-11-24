import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const generateData = (points: number) => {
  const data = [];
  const now = new Date();
  
  for (let i = points - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setHours(now.getHours() - i);
    
    data.push({
      time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      temperature: 20 + Math.random() * 10,
      humidity: 50 + Math.random() * 30,
      soilMoisture: 30 + Math.random() * 30,
      lightIntensity: 200 + Math.random() * 800,
    });
  }
  
  return data;
};

const dataByPeriod = {
  week: generateData(24 * 7),
  month: generateData(30),
  quarter: generateData(90),
  year: generateData(365),
};

export function HistoricalChart() {
  const [period, setPeriod] = useState<'week' | 'month' | 'quarter' | 'year'>('week');
  const [activeSeries, setActiveSeries] = useState({
    temperature: true,
    humidity: true,
    soilMoisture: false,
    lightIntensity: false,
  });

  const data = dataByPeriod[period];

  const toggleSeries = (series: keyof typeof activeSeries) => {
    setActiveSeries(prev => ({ ...prev, [series]: !prev[series] }));
  };

  return (
    <Card className="bg-[#1a1a2e]/50 backdrop-blur-xl border-purple-500/20 hover:border-purple-500/40 transition-all shadow-2xl">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="text-white">Historical Trends</CardTitle>
          <Tabs value={period} onValueChange={(v) => setPeriod(v as typeof period)}>
            <TabsList className="bg-purple-500/10 border border-purple-500/20">
              <TabsTrigger value="week" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white">Week</TabsTrigger>
              <TabsTrigger value="month" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white">Month</TabsTrigger>
              <TabsTrigger value="quarter" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white">Quarter</TabsTrigger>
              <TabsTrigger value="year" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white">Year</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => toggleSeries('temperature')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all border ${
              activeSeries.temperature ? 'bg-red-500/20 border-red-500/30 text-red-400' : 'bg-gray-800/30 border-gray-700/30 text-gray-500'
            }`}
          >
            <div className={`w-3 h-3 rounded-full ${activeSeries.temperature ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-gray-600'}`} />
            <span className="text-sm">Temperature</span>
          </button>
          <button
            onClick={() => toggleSeries('humidity')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all border ${
              activeSeries.humidity ? 'bg-blue-500/20 border-blue-500/30 text-blue-400' : 'bg-gray-800/30 border-gray-700/30 text-gray-500'
            }`}
          >
            <div className={`w-3 h-3 rounded-full ${activeSeries.humidity ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-gray-600'}`} />
            <span className="text-sm">Humidity</span>
          </button>
          <button
            onClick={() => toggleSeries('soilMoisture')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all border ${
              activeSeries.soilMoisture ? 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400' : 'bg-gray-800/30 border-gray-700/30 text-gray-500'
            }`}
          >
            <div className={`w-3 h-3 rounded-full ${activeSeries.soilMoisture ? 'bg-cyan-500 shadow-lg shadow-cyan-500/50' : 'bg-gray-600'}`} />
            <span className="text-sm">Soil Moisture</span>
          </button>
          <button
            onClick={() => toggleSeries('lightIntensity')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all border ${
              activeSeries.lightIntensity ? 'bg-amber-500/20 border-amber-500/30 text-amber-400' : 'bg-gray-800/30 border-gray-700/30 text-gray-500'
            }`}
          >
            <div className={`w-3 h-3 rounded-full ${activeSeries.lightIntensity ? 'bg-amber-500 shadow-lg shadow-amber-500/50' : 'bg-gray-600'}`} />
            <span className="text-sm">Light</span>
          </button>
        </div>

        {/* Chart */}
        <div className="h-80 p-4 bg-black/20 rounded-2xl border border-purple-500/10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.slice(-50)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2d2d3f" />
              <XAxis 
                dataKey="time" 
                stroke="#6b7280"
                tick={{ fontSize: 12, fill: '#9ca3af' }}
              />
              <YAxis stroke="#6b7280" tick={{ fontSize: 12, fill: '#9ca3af' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a2e', 
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  color: '#f5f5f7'
                }}
              />
              <Legend />
              {activeSeries.temperature && (
                <Line 
                  type="monotone" 
                  dataKey="temperature" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  dot={false}
                  name="Temperature (°C)"
                />
              )}
              {activeSeries.humidity && (
                <Line 
                  type="monotone" 
                  dataKey="humidity" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={false}
                  name="Humidity (%)"
                />
              )}
              {activeSeries.soilMoisture && (
                <Line 
                  type="monotone" 
                  dataKey="soilMoisture" 
                  stroke="#06b6d4" 
                  strokeWidth={3}
                  dot={false}
                  name="Soil Moisture (%)"
                />
              )}
              {activeSeries.lightIntensity && (
                <Line 
                  type="monotone" 
                  dataKey="lightIntensity" 
                  stroke="#f59e0b" 
                  strokeWidth={3}
                  dot={false}
                  name="Light (lux)"
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}