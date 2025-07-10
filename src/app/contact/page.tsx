"use client";

import Sidebar from "@/components/Sidebar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <div className="ml-64 flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-yellow-700 mb-4">
              🐝 커피챗 신청
            </h1>
            <p className="text-gray-600">
              개발자 취업 면접 준비를 위한 커피챗 신청
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-yellow-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                📝 커피챗 신청서
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="이름을 입력해주세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="이메일을 입력해주세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    지원 기업
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                    <option value="">기업을 선택해주세요</option>
                    <option value="lgcns">LG CNS</option>
                    <option value="naver">네이버</option>
                    <option value="kakao">카카오</option>
                    <option value="samsung">삼성 SDS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    상담 희망 날짜
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    상담 희망 시간
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                    <option value="">시간을 선택해주세요</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    상담 희망 내용
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="면접 준비, 자기소개서 첨삭 등 상담 희망 내용을 작성해주세요"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  커피챗 신청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
