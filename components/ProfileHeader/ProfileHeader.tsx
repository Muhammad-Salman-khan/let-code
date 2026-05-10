import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface UserData {
  name: string;
  rank: number;
  totalPoints: number;
  globalTop: number;
  avatarUrl?: string;
}

interface ProfileHeaderProps {
  user: UserData;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <header className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
      <div className="md:col-span-4 lg:col-span-3">
        <div className="border-4 border-primary p-1 bg-white neo-shadow">
          <Avatar className="w-full aspect-square">
            <AvatarImage
              alt={user.name}
              src={user.avatarUrl || "/default-avatar.png"}
            />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="md:col-span-8 lg:col-span-9 space-y-4">
        <div className="flex flex-wrap items-baseline gap-4">
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-none">
            {user.name}
          </h1>
          <Badge className="bg-tertiary text-white px-4 py-1 text-xl font-headline font-bold border-2 border-primary neo-shadow">
            RANK #{user.rank.toLocaleString()}
          </Badge>
        </div>
        <div className="flex gap-8">
          <div>
            <p className="font-headline font-black uppercase text-sm tracking-widest text-on-surface-variant">
              Total Points
            </p>
            <p className="text-5xl font-display font-black text-secondary">
              {user.totalPoints.toLocaleString()}
            </p>
          </div>
          <div className="h-16 w-1 bg-primary transform -skew-x-12"></div>
          <div>
            <p className="font-headline font-black uppercase text-sm tracking-widest text-on-surface-variant">
              Global Top
            </p>
            <p className="text-5xl font-display font-black text-tertiary">
              {user.globalTop}%
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
