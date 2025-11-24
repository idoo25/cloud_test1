import { Trophy, Star, CheckCircle, Clock, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const dailyMissions = [
  { id: 1, task: 'Check soil moisture', completed: true, points: 50 },
  { id: 2, task: 'Upload plant photo', completed: true, points: 100 },
  { id: 3, task: 'Review AI recommendations', completed: false, points: 75 },
  { id: 4, task: 'Water 3 plants', completed: false, points: 150 },
];

const leaderboard = [
  { rank: 1, name: 'Sarah Green', avatar: 'SG', score: 2850, trend: 'up' },
  { rank: 2, name: 'Mike Thompson', avatar: 'MT', score: 2720, trend: 'same' },
  { rank: 3, name: 'John Doe', avatar: 'JD', score: 2650, trend: 'up', isCurrentUser: true },
  { rank: 4, name: 'Emily Chen', avatar: 'EC', score: 2580, trend: 'down' },
  { rank: 5, name: 'David Park', avatar: 'DP', score: 2450, trend: 'up' },
];

const achievements = [
  { id: 1, name: 'Green Thumb', icon: '🌱', unlocked: true },
  { id: 2, name: 'Early Bird', icon: '🌅', unlocked: true },
  { id: 3, name: 'Perfect Week', icon: '⭐', unlocked: true },
  { id: 4, name: 'Plant Master', icon: '🏆', unlocked: false },
  { id: 5, name: 'Tech Savvy', icon: '🤖', unlocked: false },
  { id: 6, name: 'Consistency', icon: '🔥', unlocked: false },
];

export function GamificationSection() {
  const currentPoints = 2650;
  const nextLevelPoints = 3000;
  const progressToNextLevel = (currentPoints / nextLevelPoints) * 100;
  const timeLeft = '23h 45m';

  return (
    <div className="space-y-6">
      {/* Achievements */}
      <Card className="bg-[#1a1a2e]/50 backdrop-blur-xl border-purple-500/20 hover:border-purple-500/40 transition-all shadow-2xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-white">
              <Trophy className="w-5 h-5 text-amber-400" />
              Achievements
            </span>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">3/6</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-2xl text-center transition-all ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-amber-500/20 to-amber-500/10 border-2 border-amber-500/30 hover:scale-105'
                    : 'bg-gray-800/30 border border-gray-700/30 opacity-50 grayscale'
                }`}
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-xs text-gray-300">{achievement.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Rank & Points */}
      <Card className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-xl border-purple-500/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Trophy className="w-5 h-5 text-amber-400" />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          {/* Rank Badge */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                <span className="text-2xl text-white font-bold">#3</span>
              </div>
              <div>
                <div className="text-sm text-gray-400">Global Rank</div>
                <div className="text-white font-semibold">Top 5%</div>
              </div>
            </div>
            <Badge className="bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Zap className="w-3 h-3 mr-1" />
              On Fire
            </Badge>
          </div>

          {/* Points */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">XP Points</span>
              <span className="text-white font-semibold">{currentPoints.toLocaleString()}</span>
            </div>
            <Progress value={progressToNextLevel} className="h-3 bg-gray-800/50" />
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-500">Level 5</span>
              <span className="text-xs text-gray-500">Level 6 ({nextLevelPoints - currentPoints} XP)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Missions */}
      <Card className="bg-[#1a1a2e]/50 backdrop-blur-xl border-purple-500/20 hover:border-purple-500/40 transition-all shadow-2xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">Daily Missions</CardTitle>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              {timeLeft}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {dailyMissions.map((mission) => (
              <div
                key={mission.id}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                  mission.completed 
                    ? 'bg-emerald-500/10 border-emerald-500/30' 
                    : 'bg-gray-800/30 border-gray-700/30 hover:border-purple-500/30'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    mission.completed
                      ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-500/50'
                      : 'border-gray-600 bg-gray-800'
                  }`}
                >
                  {mission.completed && <CheckCircle className="w-4 h-4 text-white" />}
                </div>
                <span
                  className={`flex-1 text-sm ${
                    mission.completed ? 'text-gray-500 line-through' : 'text-gray-300'
                  }`}
                >
                  {mission.task}
                </span>
                <span className="text-xs text-purple-400 font-semibold">+{mission.points}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Players */}
      <Card className="bg-[#1a1a2e]/50 backdrop-blur-xl border-purple-500/20 hover:border-purple-500/40 transition-all shadow-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Star className="w-5 h-5 text-amber-400" />
            Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {leaderboard.slice(0, 3).map((user) => (
              <div
                key={user.rank}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                  user.isCurrentUser 
                    ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-2 border-purple-500/50' 
                    : 'bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/30'
                }`}
              >
                <span className={`text-sm w-6 font-bold ${user.rank === 1 ? 'text-amber-400' : user.rank === 2 ? 'text-gray-400' : user.rank === 3 ? 'text-amber-600' : 'text-gray-500'}`}>
                  {user.rank}
                </span>
                <Avatar className="w-8 h-8 ring-2 ring-purple-500/50">
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-cyan-500 text-white text-xs">{user.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-white truncate">{user.name}</div>
                  <div className="text-xs text-gray-400">{user.score.toLocaleString()} pts</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}