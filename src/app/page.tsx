"use client";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { useMenuStore } from "@/store/menuStore";

export default function Home() {
  const { isCollapsed } = useMenuStore();

  return (
    <div className="min-h-screen bg-white flex select-none relative">
      <Sidebar />
      <div className="absolute right-4 top-4">
        <Link
          href="/login"
          className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-600 transition-colors"
        >
          <span className="text-white text-xl">P</span>
        </Link>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isCollapsed ? "ml-4" : "ml-64"
        }`}
        style={{
          width: isCollapsed ? "calc(100% - 64px)" : "calc(100% - 256px)",
          marginLeft: isCollapsed ? "16px" : "256px",
        }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-yellow-700 mb-6">
              방황의 끝에서, 평비가 태어났습니다.
            </h1>
            <div className="flex justify-center gap-4 mb-16">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                [커피챗 신청하기]
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-yellow-50 p-8 rounded-2xl mb-8">
                <p className="text-xl text-gray-800 mb-4">
                  전자공학도로 시작했지만, 개발자가 되는 길은 쉽지 않았습니다.
                  어떤 방향도, 멘토도 없었죠.
                </p>
                <p className="text-xl text-gray-800 mb-4">
                  그래서, 제가 직접 길이 되기로 했습니다. 누군가의 작은 등불이
                  되기 위해.
                </p>
              </div>

              <div className="bg-yellow-100 p-8 rounded-2xl mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-2">
                      LG CNS 현직 개발자
                    </h3>
                    <p className="text-gray-700">
                      전자공학과 출신으로 IT 업계에 입문하여 성장 중인
                      개발자입니다.
                    </p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-2">
                      예비 개발자들과의 커뮤니티 운영
                    </h3>
                    <p className="text-gray-700">
                      예비 개발자들의 취업과 커리어 성장을 돕는 커뮤니티를
                      운영하고 있습니다.
                    </p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-2">
                      Beedio 유튜버
                    </h3>
                    <p className="text-gray-700">
                      기술 밖의 교양을 나누는 콘텐츠를 제작합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-8 rounded-2xl mb-8">
                <p className="text-xl text-gray-800 mb-4">
                  지금은 개발자의 길을 걸으며, &quot;어떻게 일할 것인가&quot;
                  보다 &quot;어떻게 살아갈 것인가&quot;를 고민합니다.
                </p>
                <p className="text-xl text-gray-800 mb-4">
                  성장은 혼자보다 함께할 때 더 강합니다. 어디서부터 시작해야
                  할지 모르겠다면, 저와 함께 이야기를 나눠봐요.
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl text-gray-800 mb-8">
                  지금 이 순간부터, 당신의 다음이 시작됩니다.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  커피챗 신청하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
