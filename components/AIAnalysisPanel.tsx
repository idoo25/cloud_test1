import { Microscope, Droplet, Bug, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AIAnalysisPanelProps {
  selectedImage: string | null;
}

const analysisCategories = [
  {
    icon: Microscope,
    label: 'Disease Detection',
    status: 'Healthy',
    severity: 'good',
    details: 'No diseases detected',
  },
  {
    icon: Droplet,
    label: 'Water Stress Level',
    status: 'Low',
    severity: 'warning',
    details: 'Slightly below optimal',
  },
  {
    icon: Bug,
    label: 'Pest Identification',
    status: 'Clear',
    severity: 'good',
    details: 'No pests identified',
  },
  {
    icon: CheckCircle,
    label: 'Care Recommendations',
    status: '3 Actions',
    severity: 'info',
    details: 'View detailed care plan',
  },
];

export function AIAnalysisPanel({ selectedImage }: AIAnalysisPanelProps) {
  const healthScore = 87;
  const defaultImage = 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600';

  return (
    <Card className="bg-[#1a1a2e]/50 backdrop-blur-xl border-purple-500/20 hover:border-purple-500/40 transition-all shadow-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <div className="p-2 bg-cyan-500/10 rounded-xl">
            <Microscope className="w-5 h-5 text-cyan-400" />
          </div>
          AI Analysis Results
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Plant Image */}
          <div className="relative group">
            <ImageWithFallback
              src={selectedImage || defaultImage}
              alt="Plant analysis"
              className="w-full h-48 object-cover rounded-2xl border border-purple-500/20"
            />
            <Badge className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0 shadow-lg">
              ✓ Analyzed
            </Badge>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Health Score */}
          <div className="p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl border border-purple-500/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white">Health Score</h3>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{healthScore}%</span>
            </div>
            <Progress value={healthScore} className="h-3 bg-gray-800/50" />
            <p className="text-sm text-gray-400 mt-3">
              Excellent condition detected. Continue monitoring.
            </p>
          </div>

          {/* Analysis Categories */}
          <div className="grid grid-cols-2 gap-3">
            {analysisCategories.map((category, index) => {
              const Icon = category.icon;
              const severityColors = {
                good: 'from-emerald-500/20 to-emerald-500/10 border-emerald-500/30 text-emerald-400',
                warning: 'from-amber-500/20 to-amber-500/10 border-amber-500/30 text-amber-400',
                info: 'from-cyan-500/20 to-cyan-500/10 border-cyan-500/30 text-cyan-400',
              };

              return (
                <div
                  key={index}
                  className={`p-4 rounded-xl border bg-gradient-to-br ${severityColors[category.severity as keyof typeof severityColors]} backdrop-blur-sm hover:scale-105 transition-transform`}
                >
                  <Icon className="w-6 h-6 mb-2" />
                  <div className="text-xs text-gray-300 mb-1">{category.label}</div>
                  <div className="text-sm font-semibold text-white">{category.status}</div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl transition-all shadow-lg shadow-purple-500/50">
              Full Report
            </button>
            <button className="px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-xl transition-all">
              Share
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}