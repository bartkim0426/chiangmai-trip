'use client';

const PreparationTab = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-blue-600">가족과 함께하는 치앙마이 여행</h1>
      <p className="text-gray-700">여행 기간: 2025년 2월 2일 ~ 2월 7일</p>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">✅ 준비물 체크리스트</h2>
        <ul className="list-disc list-inside ml-4 text-gray-600 space-y-1">
          <li>여권 및 신분증 (국제운전면허증 포함)</li>
          <li>여름철 가벼운 옷과 편한 신발 (간단한 등산을 할 수도 있음)</li>
          <li>온천을 위한 수영복</li>
          <li>선선한 날씨 대비 겉옷</li>
          <li>모자, 선글라스, 자외선 차단제</li>
          <li>개인 위생용품, (더위를 많이 타는 경우 손풍기)</li>
          <li>작은 우산, 상비약 (멀미약, 지사제, 먹는 약)</li>
          <li>(태국 전압은 한국과 같으므로 어댑터는 따로 필요없음)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">🏨 숙소 주소 및 구글 링크</h2>
        <p>주소: Suthep, Mueang, Chiang Mai 50200, 태국</p>
        <a href="https://maps.app.goo.gl/mqLHKZ3NeWhQrMkM7" target="_blank" className="text-blue-500 underline">구글 지도에서 보기</a>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">🌤️ 2/3 - 2/7 치앙마이 날씨</h2>
        <ul className="list-disc list-inside ml-4 text-gray-600 space-y-1">
          <li>2월 3일 (월): 맑음, 최고 34°C, 최저 18°C</li>
          <li>2월 4일 (화): 맑음, 최고 33°C, 최저 19°C</li>
          <li>2월 5일 (수): 구름 조금, 최고 33°C, 최저 17°C</li>
          <li>2월 6일 (목): 맑음, 최고 34°C, 최저 17°C</li>
          <li>2월 7일 (금): 구름 많음, 최고 34°C, 최저 17°C</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">✈️ 항공편 출/도착 시간</h2>
        <ul className="list-disc list-inside ml-4 text-gray-600 space-y-1">
          <li>이스타항공 ZE517: 인천 출발 → 치앙마이 도착</li>
          <li>이스타항공 ZE158: 치앙마이 출발 → 인천 도착</li>
          <li>제주항공 7C4205: 인천 출발 → 치앙마이 도착</li>
          <li>제주항공 7C4206: 치앙마이 출발 → 인천 도착</li>
        </ul>
      </section>
    </div>
  );
};

export default PreparationTab;