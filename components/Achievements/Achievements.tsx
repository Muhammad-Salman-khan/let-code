import { Card, CardContent } from "@/components/ui/card";

interface Achievement {
  icon: string;
  label: string;
  color: string;
}

interface AchievementsProps {
  achievements: Achievement[];
}

export function Achievements({ achievements }: AchievementsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {achievements.map((achievement, index) => (
        <Card
          key={index}
          className={`${achievement.color} border-4 border-primary p-4 neo-shadow text-center space-y-2`}
        >
          <div className="w-16 h-16 bg-primary-container border-2 border-primary mx-auto flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl">
              {achievement.icon}
            </span>
          </div>
          <p className="font-headline font-black text-xs uppercase">
            {achievement.label}
          </p>
        </Card>
      ))}
    </div>
  );
}
