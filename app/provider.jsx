"use client";
import React, { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "@/app/_components/AppHeader";
import { AppSidebar } from "@/app/_components/AppSidebar";

// ✅ Firebase imports
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

// ✅ Clerk import
import { useUser } from "@clerk/nextjs";

function Provider({ children, ...props }) {
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      createOrUpdateUser();
    }
  }, [isSignedIn, user]);

  const createOrUpdateUser = async () => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress;
      if (!email) return;

      const userRef = doc(db, "users", email);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        console.log("✅ Existing user found in Firestore");
        return;
      }

      const userData = {
        name: user.fullName || "Unnamed User",
        email,
        createdAt: new Date(),
        plan: "Free",
        credits: 1000,
      };

      await setDoc(userRef, userData);
      console.log("✅ User added to Firestore:", userData);
    } catch (err) {
      console.error("🔥 Error saving user to Firestore:", err);
    }
  };

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <AppHeader />
          {children}
        </div>
      </SidebarProvider>
    </NextThemesProvider>
  );
}

export default Provider;
