"use client";

import Sidebar from "@/components/Sidebar";

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <div className="ml-64 flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-yellow-700 mb-4">
              🐝 활동사항
            </h1>
            <p className="text-gray-600">최근 활동과 이벤트를 확인하세요</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    커피챗 세션
                  </h3>
                  <span className="text-sm text-yellow-700">2025.07.10</span>
                </div>
                <p className="text-gray-600">
                  개발자 취업 면접 준비를 위한 커피챗 세션 진행
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    면접 후기 작성
                  </h3>
                  <span className="text-sm text-yellow-700">2025.07.05</span>
                </div>
                <p className="text-gray-600">
                  최근 면접 경험을 공유하고 피드백 제공
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    기술 블로그 업데이트
                  </h3>
                  <span className="text-sm text-yellow-700">2025.07.01</span>
                </div>
                <p className="text-gray-600">
                  프론트엔드 개발 트렌드와 팁 공유
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
