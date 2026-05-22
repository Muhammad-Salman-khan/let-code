"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import Userdropdown from "../Dropdown-user/Userdropdown";
import { authClient } from "@/lib/auth/auth-client";
import { NavigationProps } from "@/lib/Validator/global-types";

export function Navigation({
  links = [
    { href: "/problems", label: "Problems" },
    { href: "/leaderboard", label: "Leaderboard" },
  ],
}: NavigationProps) {
  const { setTheme, theme } = useTheme();
  const { data: session, isPending } = authClient.useSession();
  return (
    <nav className="flex justify-between items-center h-20 px-8 w-full mx-auto border-b-2 bg-[#fcf9f8] dark:bg-[#1c1b1b] border-[#1c1b1b] dark:border-[#e5e2e1] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
      {/* Logo + Links */}
      <div className="flex items-center gap-12">
        <Link
          href="/"
          className="text-[32px] font-bold tracking-tighter text-[#1c1b1b] dark:text-[#fcf9f8] font-space-grotesk"
        >
          <Image src="/brandlogo.svg" alt="ÉclairCode" width={160} height={40} className="h-12 md:h-14 lg:h-16 w-auto"/>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium tracking-tight text-[16px] pb-1 border-b-2 font-space-grotesk ${
                link.href ?
                  "text-[#0040e0] border-[#0040e0] dark:text-[#b8c3ff] dark:border-[#b8c3ff]"
                : "text-[#434656] border-transparent dark:text-[#e5e2e1] dark:hover:text-[#fcf9f8] transition-colors"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 hover:bg-[#f0edec] dark:hover:bg-[#2a2a2a] transition-all duration-200"
        >
          <Sun className="dark:hidden" />
          <Moon className="hidden dark:block" />
        </Button>
        {isPending ? null : (
          session?.user?.role === "ADMIN" && (
            <Link href="/create-problem">
              <Button variant="ghost">Create problem</Button>
            </Link>
          )
        )}
        {isPending ?
          null
        : session?.user?.name ?
          <Userdropdown
            user={{
              name: session.user.name,
            }}
          />
        : <div className="flex gap-2">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="ghost">Sign Up</Button>
            </Link>
          </div>
        }
      </div>
    </nav>
  );
}
