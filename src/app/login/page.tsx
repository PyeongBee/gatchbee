"use client";

import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { useMenuStore } from "@/store/menuStore";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isCollapsed } = useMenuStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: 실제 로그인 로직 구현
    console.log("로그인 시도:", phone);
    // 여기서 실제 로그인 API 호출
    setIsSubmitting(false);
  };

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
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-yellow-700 mb-4">
                📱 핸드폰으로 로그인
              </h1>
              <p className="text-gray-600">
                핸드폰 번호만으로 간편하게 로그인하세요.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  핸드폰 번호
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010-1234-5678"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !phone}
                className={`w-full py-3 px-6 rounded-lg transition-all duration-300 ${
                  isSubmitting || !phone
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-yellow-500 hover:bg-yellow-600 text-white font-bold"
                }`}
              >
                {isSubmitting ? "로그인 중..." : "로그인하기"}
              </button>

              <div className="text-center text-gray-600">
                <p>개인 정보는 안전하게 보호됩니다.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
