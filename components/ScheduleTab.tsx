'use client';

const ScheduleTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">🗓️ 일정표 (2월 2일 ~ 2월 7일)</h2>

      <table className="w-full table-auto border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border p-3">날짜</th>
            <th className="border p-3">일정</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="bg-gray-50">
            <td className="border p-3 text-center">2월 2일 (일)</td>
            <td className="border p-3">✈️ 출국 및 치앙마이로 이동</td>
          </tr>
          <tr>
            <td className="border p-3 text-center">2월 3일 (월)</td>
            <td className="border p-3 space-y-1">
              <ul className="list-disc list-inside ml-4">
                <li>🏨 새벽 도착 후 숙소 체크인 및 휴식</li>
                <li>🕌 올드타운 사원 방문 (왓 프라싱, 왓 체디루앙)</li>
                <li>🥢 현지 시장 탐방 및 로컬 음식 체험</li>
                <li>🌙 야시장 방문 및 거리 음식 맛보기</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border p-3 text-center">2월 4일 (화)</td>
            <td className="border p-3 space-y-1">
              <ul className="list-disc list-inside ml-4">
                <li>🏞️ 도이 인타논 국립공원 투어</li>
                <li>🏯 쌍둥이 파고다 및 왓 파랏 사원 방문</li>
                <li>🌊 근처 폭포 탐방 및 자연 감상</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border p-3 text-center">2월 5일 (수)</td>
            <td className="border p-3 space-y-1">
              <ul className="list-disc list-inside ml-4">
                <li>🐘 코끼리 보호구역 방문 (반나절 투어)</li>
                <li>🏫 치앙마이 대학교 산책 및 저수지 휴식</li>
                <li>🍽️ 푸드코트에서 현지 음식 체험</li>
                <li>🎷 현지 재즈 바 방문</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border p-3 text-center">2월 6일 (목)</td>
            <td className="border p-3 space-y-1">
              <ul className="list-disc list-inside ml-4">
                <li>⛩️ 도이 수텝 사원 방문 및 전망 감상</li>
                <li>💦 산캄펭 온천 체험 및 휴식</li>
                <li>🍴 현지 레스토랑에서 저녁 식사</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border p-3 text-center">2월 7일 (금)</td>
            <td className="border p-3 space-y-1">
              <ul className="list-disc list-inside ml-4">
                <li>🌳 부아텅 폭포 방문 및 산책</li>
                <li>🛫 호텔 체크아웃 후 공항으로 이동 (오후 3~4시 출발)</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTab;