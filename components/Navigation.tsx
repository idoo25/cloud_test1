import { Bell, Search, Sparkles } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

interface NavigationProps {
  isMobile?: boolean;
}

export function Navigation({ isMobile }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#1a1a2e]/80 backdrop-blur-xl border-b border-purple-500/10 z-50">
      <div className="h-full px-6 flex items-center justify-between max-w-[1600px] mx-auto">
        {/* Left Side - Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl blur-md opacity-50 animate-pulse" />
            </div>
            <div className={isMobile ? 'hidden' : 'block'}>
              <span className="text-lg font-bold text-white tracking-tight">PlantAI</span>
              <div className="text-xs text-purple-400">Intelligence Platform</div>
            </div>
          </div>

          {/* Search Bar - Desktop Only */}
          {!isMobile && (
            <div className="hidden lg:flex items-center gap-2 bg-[#0a0a0f]/50 border border-purple-500/20 rounded-xl px-4 py-2 w-80">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search plants, sensors..."
                className="bg-transparent border-none outline-none text-sm text-gray-300 placeholder-gray-500 w-full"
              />
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-purple-500/10 rounded-xl transition-colors group">
            <Bell className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-purple-500 to-pink-500 border-0">
              3
            </Badge>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 bg-[#0a0a0f]/50 border border-purple-500/20 rounded-xl px-3 py-2">
            <Avatar className="w-8 h-8 ring-2 ring-purple-500/50">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-cyan-500 text-white">JD</AvatarFallback>
            </Avatar>
            {!isMobile && (
              <div className="hidden md:block">
                <div className="text-sm text-white">John Doe</div>
                <div className="text-xs text-gray-400">Pro Member</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}