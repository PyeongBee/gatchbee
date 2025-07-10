"use client";

import Sidebar from "@/components/Sidebar";
import { useMenuStore } from "@/store/menuStore";

export default function AboutPage() {
  const { isCollapsed } = useMenuStore();

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
              🐝 평비 소개
            </h1>
            <p className="text-gray-600">
              개발자 취업과 커리어를 위한 커뮤니티 리더
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📋 경력 소개
              </h2>
              <ul className="space-y-4">
                <li className="text-gray-700">
                  <span className="font-semibold">LG CNS 개발자</span>
                  <span className="text-gray-500"> | 2023년 ~ 현재</span>
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">개발자 취업 멘토</span>
                  <span className="text-gray-500"> | 2022년 ~ 현재</span>
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">프론트엔드 개발자</span>
                  <span className="text-gray-500"> | 2021년 ~ 2023년</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🎯 전문 분야
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    프론트엔드 개발
                  </h3>
                  <p className="text-gray-600">
                    React, Next.js, TypeScript, Tailwind CSS 등 최신 프론트엔드
                    기술
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    면접 준비
                  </h3>
                  <p className="text-gray-600">
                    기술 면접, 프로젝트 경험, 자기소개서 첨삭 등
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
