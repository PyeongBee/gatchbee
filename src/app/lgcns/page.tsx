"use client";

import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { useMenuStore } from "@/store/menuStore";

export default function LGCNSPage() {
  const { setActiveMenu, isCollapsed } = useMenuStore();
  const buttons = [
    { text: "자소서 첨삭 문의", icon: "📝", href: "#" },
    { text: "첨삭 GPT", icon: "🤖", href: "#" },
    { text: "채용 일정 정보", icon: "📅", href: "#" },
    { text: "코테 기출 족보", icon: "📊", href: "#" },
    { text: "모의 면접 문의", icon: "🎤", href: "#" },
    { text: "1차 면접 족보", icon: "👥", href: "#" },
    { text: "2차 면접 족보", icon: "👥", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <div
        className="ml-64 flex-1 transition-all duration-300"
        style={{
          marginLeft: isCollapsed ? "16px" : "256px",
          width: isCollapsed ? "calc(100% - 64px)" : "calc(100% - 256px)",
        }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-yellow-700 mb-4">
              🎁 LG CNS 지원을 위한 도움말
            </h1>
            <p className="text-gray-600">
              LG CNS 채용 과정에서 필요한 모든 정보를 한 곳에서 확인하세요.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {buttons.map((button) => (
              <Link
                key={button.text}
                href={`/${button.text.toLowerCase().replace(/[^a-z]/g, "")}`}
                onClick={() => setActiveMenu(button.text)}
                className="w-full bg-yellow-50 hover:bg-yellow-100 text-yellow-700 font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="text-2xl">{button.icon}</span>
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
