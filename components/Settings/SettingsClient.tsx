"use client";

import { useState, useEffect, useRef } from "react";
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

// Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

export function SettingsClient() {
  const [username, setUsername] = useState("dev_null_01");
  const [email, setEmail] = useState("root@devcode.io");
  const [theme, setTheme] = useState("Neo-Brutalist Dark");
  const [fontSize, setFontSize] = useState(14);
  const [language, setLanguage] = useState("English (US)");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [emailDigest, setEmailDigest] = useState(true);
  const [systemAlerts, setSystemAlerts] = useState(false);
  const [achievementUnlocks, setAchievementUnlocks] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Epic Depth Layers */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        {/* Depth 0: Background */}
        <div
          className="absolute inset-0 bg-background opacity-100"
          data-depth="0"
        />

        {/* Depth 1: Atmospheric Glow */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-50"
          data-depth="1"
        />

        {/* Depth 2: Grid Pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"
          data-depth="2"
        />

        {/* Depth 3: Floating Elements */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 blur-3xl rounded-full opacity-30"
          data-depth="3"
        />
        <div
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-primary/10 blur-2xl rounded-full opacity-20"
          data-depth="3"
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="mb-12" data-depth="4">
            <h1 className="text-headline-display text-[64px] font-headline-lg font-bold uppercase tracking-tight mb-2">
              User Settings
            </h1>
            <p className="text-on-surface-variant font-label-sm italic">
              Configure your terminal experience and account security.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 space-y-12">
          {/* Account Information */}
          <div className="space-y-12">
            <Card className="border-2 border-on-surface bg-surface-container-lowest neo-shadow">
              <CardHeader className="flex flex-row items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  person
                </span>
                <CardTitle className="text-[24px] font-headline-lg uppercase">
                  Account Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="relative group" data-depth="3">
                    <Avatar className="w-32 h-32 border-4 border-on-surface neo-shadow-secondary">
                      <AvatarImage
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdnmYiIPo06RKdkqT5E-TMeUco975QRb8tTVYjIZSPVAB7N7h4e2NzbEWB_xCAT3VgK73_yVhrqOvqqo6PBm6f4XjwEhP9D4EkLyzwMv-nlrIG3NdOWib-3RNm_H0T4Hjg23Uk_meYQFZ7UxYHMXF0NnGO-qAYlLg_XQWnZHB6cYsDnRy8__8UO-N2bXfi0CHoXmmy4HvirgmT5aAqs9GrXzmlHXn_oLBDesD57gRBngVd_48uzUaxHBSypH8oi4AkTUjqg52dZw"
                        alt="User Profile"
                      />
                      <AvatarFallback>DN</AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute -bottom-2 -right-2 bg-primary text-on-primary border-2 border-on-surface active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    >
                      <span className="material-symbols-outlined text-sm">
                        edit
                      </span>
                    </Button>
                  </div>
                  <div className="flex-1 w-full space-y-6">
                    <div className="space-y-2">
                      <Label className="font-label-sm uppercase font-bold text-xs tracking-widest">
                        Username
                      </Label>
                      <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-surface border-2 border-on-surface focus:border-secondary-container focus:ring-0 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-label-sm uppercase font-bold text-xs tracking-widest">
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-surface border-2 border-on-surface focus:border-secondary-container focus:ring-0 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Editor Preferences */}
          <div>
            <Card className="border-2 border-on-surface bg-surface-container-lowest neo-shadow">
              <CardHeader className="flex flex-row items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  settings_suggest
                </span>
                <CardTitle className="text-[24px] font-headline-lg uppercase">
                  Editor Preferences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label className="font-label-sm uppercase font-bold text-xs tracking-widest">
                      Editor Theme
                    </Label>
                    <Select value={theme} onValueChange={setTheme}>
                      <SelectTrigger className="bg-surface border-2 border-on-surface focus:border-secondary-container focus:ring-0">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Monokai Retro">
                          Monokai Retro
                        </SelectItem>
                        <SelectItem value="Neo-Brutalist Dark">
                          Neo-Brutalist Dark
                        </SelectItem>
                        <SelectItem value="High Contrast White">
                          High Contrast White
                        </SelectItem>
                        <SelectItem value="Cyberpunk 2077">
                          Cyberpunk 2077
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-label-sm uppercase font-bold text-xs tracking-widest">
                      Font Size (PX)
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="bg-surface border-2 border-on-surface focus:border-secondary-container focus:ring-0"
                      />
                      <Button
                        variant="outline"
                        className="border-2 border-on-surface hover:bg-on-surface hover:text-surface transition-colors font-bold"
                      >
                        PREVIEW
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-label-sm uppercase font-bold text-xs tracking-widest">
                      Language
                    </Label>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger className="bg-surface border-2 border-on-surface focus:border-secondary-container focus:ring-0">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English (US)">
                          English (US)
                        </SelectItem>
                        <SelectItem value="German (DE)">German (DE)</SelectItem>
                        <SelectItem value="Japanese (JP)">
                          Japanese (JP)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Security */}
          <div>
            <Card className="border-2 border-on-surface bg-surface-container-lowest neo-shadow">
              <CardHeader className="flex flex-row items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  security
                </span>
                <CardTitle className="text-[24px] font-headline-lg uppercase">
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border-2 border-on-surface bg-surface-container-low">
                    <div>
                      <p className="font-bold uppercase text-sm">
                        Two-Factor Authentication
                      </p>
                      <p className="text-xs text-on-surface-variant italic">
                        Add an extra layer of security to your account.
                      </p>
                    </div>
                    <Switch
                      checked={twoFactorEnabled}
                      onCheckedChange={setTwoFactorEnabled}
                    />
                  </div>
                  <div className="space-y-4 pt-4 border-t-2 border-on-surface border-dashed">
                    <Label className="font-label-sm uppercase font-bold text-xs tracking-widest">
                      Update Password
                    </Label>
                    <div className="space-y-4">
                      <Input
                        type="password"
                        placeholder="Current Password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="bg-surface border-2 border-on-surface"
                      />
                      <Input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="bg-surface border-2 border-on-surface"
                      />
                      <Button className="w-full bg-secondary-container text-on-secondary-container border-2 border-on-surface p-4 font-bold uppercase neo-shadow-tertiary active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
                        Update Credentials
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications */}
          <div>
            <Card className="border-2 border-on-surface bg-surface-container-lowest neo-shadow">
              <CardHeader className="flex flex-row items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  notifications_active
                </span>
                <CardTitle className="text-[24px] font-headline-lg uppercase">
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="font-bold uppercase text-sm">
                      Email digest of code reviews
                    </Label>
                    <Switch
                      checked={emailDigest}
                      onCheckedChange={setEmailDigest}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="font-bold uppercase text-sm">
                      System maintenance alerts
                    </Label>
                    <Switch
                      checked={systemAlerts}
                      onCheckedChange={setSystemAlerts}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="font-bold uppercase text-sm">
                      Achievement unlocks
                    </Label>
                    <Switch
                      checked={achievementUnlocks}
                      onCheckedChange={setAchievementUnlocks}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              className="px-8 py-3 font-bold uppercase text-sm border-2 border-on-surface hover:bg-surface-container transition-colors"
            >
              Discard
            </Button>
            <Button className="px-8 py-3 font-bold uppercase text-sm bg-primary text-on-primary border-2 border-on-surface neo-shadow-secondary active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
              Save Configuration
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
