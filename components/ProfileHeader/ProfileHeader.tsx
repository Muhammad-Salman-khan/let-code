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
  userData: {
    user: {
      name: string;
      email: string;
      emailVerified: Boolean;
      image: string;
      role: string;
    };
  };
}

export function ProfileHeader({ userData, user }: ProfileHeaderProps) {
  const { name, email, emailVerified, image, role } = userData?.user;

  return (
    <header className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
      <div className="md:col-span-4 lg:col-span-3">
        <div className="p-1 bg-transparent ">
          <Avatar className="w-full h-64 md:h-67">
            <AvatarImage
              alt={name || "Guest profile"}
              src={image || "/default-avatar.png"}
              className="object-fit rounded-sm"
            />
            <AvatarFallback className="text-4xl">
              {name
                .split(" ")
                .map((n: string) => n[0])
                .join("")
                .toUpperCase()
                .slice(0, 2) || "Guest profile"}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="md:col-span-8 lg:col-span-9 space-y-4">
        <div className="flex flex-wrap items-baseline gap-4">
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-none">
            {name || "Guest profile"}
          </h1>
          <Badge className="bg-tertiary text-white px-4 py-1 text-xl font-headline font-bold border-2 border-primary neo-shadow"></Badge>
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
