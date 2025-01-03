"use client";

import { ReactNode } from "react";
import { SparklesCore } from "@/components/SparklesCore";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute inset-0 z-10">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleColor="#000"
          particleDensity={100}
          speed={2}
          className="h-full w-full"
        />
      </div>
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};