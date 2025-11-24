import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { PlantUploadCard } from './components/PlantUploadCard';
import { SensorGrid } from './components/SensorGrid';
import { AIAnalysisPanel } from './components/AIAnalysisPanel';
import { HistoricalChart } from './components/HistoricalChart';
import { GamificationSection } from './components/GamificationSection';
import { MobileNav } from './components/MobileNav';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative z-10">
        <Navigation />
        <main className="px-8 pt-24 pb-12">
          <div className="max-w-[1600px] mx-auto space-y-8">
            {/* Hero Header */}
            <div className="mb-12">
              <div className="inline-block mb-4">
                <span className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300">
                  Advanced Monitoring
                </span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                Plant Intelligence Hub
              </h1>
              <p className="text-xl text-gray-400">Real-time monitoring powered by AI technology</p>
            </div>

            {/* Sensor Grid - Full Width */}
            <SensorGrid />

            {/* Upload and AI Analysis Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PlantUploadCard onImageSelect={setSelectedImage} />
              <AIAnalysisPanel selectedImage={selectedImage} />
            </div>

            {/* Historical Data and Gamification */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <HistoricalChart />
              </div>
              <div className="lg:col-span-1">
                <GamificationSection />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative z-10">
        <Navigation isMobile />
        <main className="p-4 pt-20 pb-24">
          <div className="space-y-6">
            <div className="mb-8">
              <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300">
                Advanced Monitoring
              </span>
              <h1 className="text-3xl text-white mt-3 mb-2">Plant Intelligence Hub</h1>
              <p className="text-gray-400">AI-powered monitoring</p>
            </div>

            <SensorGrid />
            <PlantUploadCard onImageSelect={setSelectedImage} />
            <AIAnalysisPanel selectedImage={selectedImage} />
            <HistoricalChart />
            <GamificationSection />
          </div>
        </main>
        <MobileNav />
      </div>
    </div>
  );
}