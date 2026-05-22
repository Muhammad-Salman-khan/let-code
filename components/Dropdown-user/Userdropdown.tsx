"use client";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Code2, LogOutIcon, PersonStandingIcon, Settings } from "lucide-react";
import { signOut } from "@/lib/auth/auth-client";
import { User } from "@/lib/Validator/global-types";

interface UserdropdownProps {
  user?: Pick<User, "name" | "image">; // Use Zod User type
  showDropdown?: boolean;
  onLogout?: () => void;
}

const Userdropdown = ({
  user,
  showDropdown = false,
  onLogout,
}: UserdropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-10 w-10 p-0 rounded-full border-2 border-[#0040e0] dark:border-[#747688] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)] ring-2 ring-[#2e5bff]"
        >
          <Avatar className="h-full w-full">
            <AvatarImage src={user?.image!!} alt="Avatar Image" />
            <AvatarFallback className="text-4xl">
              {user?.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")
                .toUpperCase()
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-72 p-4 gap-4 border-2 border-[#1c1b1b] dark:border-[#e5e2e1] bg-[#fcf9f8] dark:bg-[#1c1b1b] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="flex flex-col gap-1">
          <DropdownMenuItem
            asChild
            className="flex items-center gap-3 p-3 font-bold uppercase tracking-widest text-[14px] font-space-grotesk cursor-pointer text-[#434656] dark:text-[#e5e2e1] hover:bg-[#ebe7e7] hover:translate-x-1 transition-all"
          >
            <Link
              href={`/dashboard/profile/`}
              className="flex items-center gap-3 w-full"
            >
              <PersonStandingIcon />
              My Profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            asChild
            className="flex items-center gap-3 p-3 font-bold uppercase tracking-widest text-[14px] font-space-grotesk cursor-pointer text-[#434656] dark:text-[#e5e2e1] hover:bg-[#ebe7e7] hover:translate-x-1 transition-all"
          >
            <Link href="/settings" className="flex items-center gap-3 w-full">
              <Settings />
              Account Settings
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            asChild
            className="flex items-center gap-3 p-3 font-bold uppercase tracking-widest text-[14px] font-space-grotesk cursor-pointer text-[#434656] dark:text-[#e5e2e1] hover:bg-[#ebe7e7] hover:translate-x-1 transition-all"
          >
            <Link
              href="/submissions"
              className="flex items-center gap-3 w-full"
            >
              <Code2 />
              My Submissions
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="my-2 border-t-2" />

          <DropdownMenuItem
            onClick={() => signOut()}
            className="flex items-center gap-3 p-3 font-bold uppercase tracking-widest text-[14px] font-space-grotesk cursor-pointer text-[#ae0008] hover:bg-[#ffdad6] hover:translate-x-1 transition-all"
          >
            <LogOutIcon />
            Logout
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Userdropdown;
