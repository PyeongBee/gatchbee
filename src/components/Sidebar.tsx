"use client";

import { useMenuStore } from "@/store/menuStore";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const { activeMenu, setActiveMenu, isCollapsed, toggleSidebar } =
    useMenuStore();

  const menuItems = [
    {
      id: "about",
      text: "평비 소개",
      icon: "🐝",
    },
    {
      id: "lgcns",
      text: "LG CNS",
      icon: "🎁",
    },
    {
      id: "activities",
      text: "활동사항",
      icon: "🐝",
    },
    {
      id: "philosophy",
      text: "철학",
      icon: "🐝",
    },
    {
      id: "contact",
      text: "커피챗 신청",
      icon: "🐝",
    },
  ];

  return (
    <div
      className={`bg-yellow-100 h-full fixed left-0 top-0 transition-all duration-300 ${
        isCollapsed ? "w-16 pt-2" : "w-64 pt-2"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-between mb-2 pl-4">
        <button onClick={() => (isCollapsed ? toggleSidebar() : null)}>
          <Image
            src="/logo_Bee_lsh_clear_gra_64.png"
            alt="Logo"
            width={40}
            height={40}
          />
        </button>
        <button
          onClick={() => {
            toggleSidebar();
          }}
          className={`p-2 rounded-full hover:bg-yellow-200 transition-all duration-300 ${
            isCollapsed ? "opacity-0 w-0 h-0" : "opacity-100 w-10 h-10 mr-2"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>

      <nav className="space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.id === "about" ? "/" : `/${item.id}`}
            onClick={() => setActiveMenu(item.id)}
            className={`block pl-5 ${
              activeMenu === item.id
                ? "text-white bg-amber-800"
                : "text-brown-600"
            } hover:bg-amber-800/80 hover:text-white font-semibold py-2 pl-3 relative transition-all duration-300`}
          >
            {item.icon}
            <span
              className={`ml-2 transition-all duration-300 ${
                isCollapsed ? "opacity-0 text-[0px]" : "opacity-100"
              }`}
            >
              {isCollapsed ? "" : item.text}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
