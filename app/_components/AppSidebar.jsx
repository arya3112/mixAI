'use client';
import UsageCreditProgress from './UsageCreditProgress'
import {
  SignInButton,useUser
} from '@clerk/nextjs'
import React, { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function AppSidebar() {
  const { theme, setTheme } = useTheme();
  const {user}=useUser();
  const [mounted, setMounted] = useState(false);

  // ✅ Fix hydration mismatch by only rendering theme UI after mount
  useEffect(() => setMounted(true), []);

  return (
    <Sidebar>
      <SidebarHeader />
      <div className="p-3">
        <div className="flex justify-between items-center">
          {/* Logo + title */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="logo"
              width={60}
              height={60}
              className="w-10 h-10"
            />
            <h2 className="font-bold text-xl">AI FUSION</h2>
          </div>

          {/* Theme toggle button (only after mounted) */}
          <div>
            {mounted && theme === "light" ? (
              <Button
                variant="ghost"
                onClick={() => setTheme("dark")}
                aria-label="Switch to dark mode"
              >
                <Sun />
              </Button>
            ) : (
              mounted && (
                <Button
                  variant="ghost"
                  onClick={() => setTheme("light")}
                  aria-label="Switch to light mode"
                >
                  <Moon />
                </Button>
              )
            )}
          </div>
        </div>
        {user?

        <Button className="mt-7 w-full" size="lg">
          + New Chat
        </Button>:<SignInButton><Button className="mt-7 w-full" size="lg"> + New Chat
        </Button></SignInButton>}
      </div>

      <SidebarContent>
        <SidebarGroup>
          <div className="p-3">
            <h2 className="font-bold text-lg">Chat</h2>
            {!user&&
            <p className="text-sm text-gray-400">
              Sign in to start chatting with multiple models
            </p>
   }
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-3 mb-10">
          {!user?<SignInButton mode="modal">
            <Button className="w-full" size="lg">
            Sign in / Sign up
          </Button>
          </SignInButton>
          :
          <div>
           <UsageCreditProgress/>
            <Button className={"w-full mb-3"}>Upgrade Plan</Button>
             <Button className='flex w-full' variant={'ghost'}>
            <h2>Settings</h2>
            </Button>
          
          </div>
}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
