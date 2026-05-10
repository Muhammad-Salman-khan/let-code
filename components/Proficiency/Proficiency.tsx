import { Card, CardContent } from "@/components/ui/card";

interface ProficiencyItem {
  language: string;
  percentage: number;
  color: string;
}

interface ProficiencyProps {
  items: ProficiencyItem[];
}

export function Proficiency({ items }: ProficiencyProps) {
  return (
    <Card className="bg-white border-4 border-primary neo-shadow">
      <CardContent className="p-8 space-y-8">
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between font-headline font-black uppercase text-sm">
              <span>{item.language}</span>
              <span>{item.percentage}%</span>
            </div>
            <div className="w-full h-8 bg-surface-variant border-2 border-primary relative">
              <div
                className={`absolute top-0 left-0 h-full ${item.color} border-r-2 border-primary`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
