"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MaterialSymbol } from "@/components/ui/material-symbol";

export interface NavigationProps {
  /** Current active path */
  activePath?: string;
  /** User data for profile display */
  user?: {
    name: string;
    avatar?: string;
    rank?: string;
    points?: number;
  };
  /** Theme state */
  theme?: "light" | "dark";
  /** Navigation links */
  links?: Array<{
    href: string;
    label: string;
  }>;
  /** Callback when theme toggle is clicked */
  onThemeToggle?: () => void;
  /** Callback when notifications is clicked */
  onNotificationsClick?: () => void;
  /** Callback when logout is clicked */
  onLogout?: () => void;
  /** Show dropdown menu */
  showDropdown?: boolean;
}

export function Navigation({
  activePath = "/problems",
  user = {
    name: "DevCode User",
    rank: "Pro",
    points: 2450,
  },
  theme = "light",
  links = [
    { href: "/problems", label: "Problems" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/community", label: "Community" },
  ],
  onThemeToggle,
  onNotificationsClick,
  onLogout,
  showDropdown = false,
}: NavigationProps) {
  const isDark = theme === "dark";

  return (
    <nav
      className={`
        flex justify-between items-center h-20 px-8 w-full max-w-full mx-auto
        border-b-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        ${isDark ? "bg-[#1c1b1b] border-[#e5e2e1] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]" : "bg-[#fcf9f8] border-[#1c1b1b]"}
      `}
    >
      {/* Logo */}
      <div className="flex items-center gap-12">
        <Link
          href="/"
          className={`
            text-[32px] font-bold tracking-tighter
            ${isDark ? "text-[#fcf9f8]" : "text-[#1c1b1b]"}
          `}
        >
          DevCode
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                font-medium tracking-tight text-[16px] pb-1 border-b-2
                ${activePath === link.href
                  ? isDark
                    ? "text-[#b8c3ff] border-[#b8c3ff]"
                    : "text-[#0040e0] border-[#0040e0]"
                  : isDark
                    ? "text-[#e5e2e1] hover:text-[#fcf9f8] transition-colors"
                    : "text-[#434656]"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onThemeToggle}
            className={`
              p-2 hover:bg-[#f0edec] transition-all duration-200
              ${isDark ? "hover:bg-[#e5e2e1]" : ""}
            `}
          >
            <MaterialSymbol
              icon={isDark ? "light_mode" : "dark_mode"}
              className={isDark ? "text-[#fcf9f8]" : "text-[#1c1b1b]"}
            />
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onNotificationsClick}
            className={`
              p-2 hover:bg-[#f0edec] transition-all duration-200
              ${isDark ? "hover:bg-[#e5e2e1]" : ""}
            `}
          >
            <MaterialSymbol
              icon="notifications"
              className={isDark ? "text-[#fcf9f8]" : "text-[#1c1b1b]"}
            />
          </Button>
        </div>

        {/* User Avatar with Dropdown */}
        <DropdownMenu open={showDropdown}>
          <DropdownMenuTrigger asChild>
            <div
              className={`
                h-10 w-10 border-2 rounded-full overflow-hidden
                shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ring-2 cursor-pointer
                ${isDark
                  ? "border-[#747688] ring-[#2e5bff] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)]"
                  : "border-[#0040e0] ring-[#2e5bff]"
                }
              `}
            >
              <Avatar className="h-full w-full">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback className="bg-[#0040e0] text-white font-bold">
                  {user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className={`
              w-72 p-4 gap-4 border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              ${isDark
                ? "bg-[#1c1b1b] border-[#e5e2e1]"
                : "bg-[#fcf9f8] border-[#1c1b1b]"
              }
            `}
          >
            {/* User Info Header */}
            <div className="flex items-center gap-4 pb-4 border-b-2">
              <div className="h-12 w-12 border-2">
                <Avatar className="h-full w-full">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback className="bg-[#0040e0] text-white font-bold">
                    {user?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p
                  className={`
                    font-bold text-lg leading-none
                    ${isDark ? "text-[#fcf9f8]" : "text-[#1c1b1b]"}
                  `}
                >
                  {user?.name}
                </p>
                <p
                  className={`
                    text-[10px] font-bold uppercase tracking-widest mt-1
                    ${isDark ? "text-[#b8c3ff]" : "text-[#0040e0]"}
                  `}
                >
                  Rank: {user?.rank} ({user?.points?.toLocaleString()} pts)
                </p>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-1">
              <DropdownMenuItem asChild>
                <Link
                  href="/profile"
                  className={`
                    flex items-center gap-3 p-3 font-bold uppercase tracking-widest text-[14px]
                    ${isDark
                      ? "text-[#e5e2e1] hover:bg-[#ebe7e7]"
                      : "text-[#434656] hover:bg-[#ebe7e7]"
                    }
                    hover:translate-x-1 transition-all cursor-pointer
                  `}
                >
                  <MaterialSymbol icon="person" />
                  My Profile
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link
                  href="/settings"
                  className={`
                    flex items-center gap-3 p-3 font-bold uppercase tracking-widest text-[14px]
                    ${isDark
                      ? "text-[#e5e2e1] hover:bg-[#ebe7e7]"
                      : "text-[#434656] hover:bg-[#ebe7e7]"
                    }
                    hover:translate-x-1 transition-all cursor-pointer
                  `}
                >
                  <MaterialSymbol icon="settings" />
                  Account Settings
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link
                  href="/submissions"
                  className={`
                    flex items-center gap-3 p-3 font-bold uppercase tracking-widest text-[14px]
                    ${isDark
                      ? "text-[#e5e2e1] hover:bg-[#ebe7e7]"
                      : "text-[#434656] hover:bg-[#ebe7e7]"
                    }
                    hover:translate-x-1 transition-all cursor-pointer
                  `}
                >
                  <MaterialSymbol icon="code" />
                  My Submissions
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="my-2 border-t-2" />

              <DropdownMenuItem
                onClick={onLogout}
                className={`
                  flex items-center gap-3 p-3 font-bold uppercase tracking-widest text-[14px]
                  ${isDark
                    ? "text-[#ae0008] hover:bg-[#ffdad6]"
                    : "text-[#ae0008] hover:bg-[#ffdad6]"
                  }
                  hover:translate-x-1 transition-all cursor-pointer
                `}
              >
                <MaterialSymbol icon="logout" />
                Logout
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
