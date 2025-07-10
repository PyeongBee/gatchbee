"use client";

import Sidebar from "@/components/Sidebar";
import { useMenuStore } from "@/store/menuStore";

export default function PhilosophyPage() {
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
            <h1 className="text-4xl font-bold text-yellow-700 mb-4">🐝 철학</h1>
            <p className="text-gray-600">
              개발자 커뮤니티를 이끄는 가치관과 신념
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                💡 핵심 가치
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    공유와 협력
                  </h3>
                  <p className="text-gray-600">
                    경험과 지식을 나누며 함께 성장하는 문화를 추구합니다.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    진정성과 신뢰
                  </h3>
                  <p className="text-gray-600">
                    정직하고 진실된 관계를 통해 신뢰를 쌓아갑니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 목표</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    개발자 커뮤니티 활성화
                  </h3>
                  <p className="text-gray-600">
                    개발자들이 서로 도움을 주고받으며 성장할 수 있는 환경을
                    조성합니다.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    지속 가능한 성장
                  </h3>
                  <p className="text-gray-600">
                    단기적인 성과보다 장기적인 발전을 중시합니다.
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
