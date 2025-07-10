"use client";

import { useMenuStore } from "@/store/menuStore";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useMenuStore();

  return (
    <div className="min-h-screen bg-white flex select-none relative">
      <Sidebar />
      <div
        className="flex-1 transition-all duration-300"
        style={{
          marginLeft: isCollapsed ? "16px" : "256px",
          width: isCollapsed ? "calc(100% - 64px)" : "calc(100% - 256px)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
