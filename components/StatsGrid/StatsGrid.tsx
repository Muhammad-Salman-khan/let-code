import { Card, CardContent } from "@/components/ui/card";

interface Stat {
  icon: string;
  label: string;
  value: number | string;
  color: string;
}

interface StatsGridProps {
  stats: Stat[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className={`${stat.color} border-4 border-primary p-8 neo-shadow flex flex-col justify-between h-48`}
        >
          <span className="material-symbols-outlined text-4xl" data-icon={stat.icon}>
            {stat.icon}
          </span>
          <div>
            <p className="font-headline font-black uppercase tracking-tight text-xl">
              {stat.label}
            </p>
            <p className="text-5xl font-display font-black">{stat.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
