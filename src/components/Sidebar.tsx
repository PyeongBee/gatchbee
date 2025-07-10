"use client";

import { useMenuStore } from "@/store/menuStore";
import Link from "next/link";

export default function Sidebar() {
  const { activeMenu, setActiveMenu } = useMenuStore();

  const menuItems = [
    {
      id: "about",
      text: "평비 소개",
      icon: "🐝",
      status: "현재 위치",
    },
    {
      id: "lgcns",
      text: "LG CNS",
      icon: "🎁",
      status: "현재 위치",
    },
    {
      id: "activities",
      text: "활동사항",
      icon: "🐝",
      status: "현재 위치",
    },
    {
      id: "philosophy",
      text: "철학",
      icon: "🐝",
      status: "현재 위치",
    },
    {
      id: "contact",
      text: "커피챗 신청",
      icon: "🐝",
      status: "현재 위치",
    },
  ];

  return (
    <div className="w-64 bg-yellow-100 h-full fixed left-0 top-0 p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-yellow-700 mb-2">
          🐝 평비의 커피챗
        </h2>
        <p className="text-gray-700">개발자 취업과 커리어를 위한 커뮤니티</p>
      </div>

      <nav className="space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.id === "about" ? "/" : `/${item.id}`}
            onClick={() => setActiveMenu(item.id)}
            className={`block ${
              activeMenu === item.id
                ? "text-white bg-amber-800"
                : "text-brown-600"
            } hover:bg-amber-800/80 hover:text-white font-semibold py-2 px-3 relative`}
          >
            {item.icon} {item.text}
            {activeMenu === item.id && item.status && (
              <span className="absolute -right-2 -top-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                {item.status}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
