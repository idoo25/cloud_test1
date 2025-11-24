import { LayoutDashboard, Leaf, BarChart3, Bell, Trophy } from 'lucide-react';
import { cn } from './ui/utils';
import { useState } from 'react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Leaf, label: 'Plants' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Bell, label: 'Alerts' },
  { icon: Trophy, label: 'Rewards' },
];

export function MobileNav() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1a1a2e]/90 backdrop-blur-xl border-t border-purple-500/20 shadow-2xl z-50 md:hidden">
      <div className="flex items-center justify-around h-20 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-2 min-w-0 transition-all duration-200 rounded-2xl relative ${
                isActive ? 'text-purple-400' : 'text-gray-500'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl border border-purple-500/30" />
              )}
              <Icon className={`w-6 h-6 relative z-10 ${isActive && 'text-purple-400'}`} />
              <span className="text-xs truncate relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}