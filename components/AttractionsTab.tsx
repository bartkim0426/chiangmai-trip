'use client';

import { useState } from 'react';

const AttractionsTab = () => {
  const [activeTab, setActiveTab] = useState('temples');

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">🌏 치앙마이 여행지 후보</h2>

      <div className="flex space-x-4 mb-6">
        <button onClick={() => setActiveTab('temples')} className={`px-4 py-2 rounded ${activeTab === 'temples' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>🛕 사원 탐방</button>
        <button onClick={() => setActiveTab('markets')} className={`px-4 py-2 rounded ${activeTab === 'markets' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>🛍️ 시장 구경</button>
        <button onClick={() => setActiveTab('nearby')} className={`px-4 py-2 rounded ${activeTab === 'nearby' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>🌿 근교 탐방</button>
        <button onClick={() => setActiveTab('cities')} className={`px-4 py-2 rounded ${activeTab === 'cities' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>🏙️ 주변 도시</button>
      </div>

      {activeTab === 'temples' && (
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">🛕 사원 탐방</h3>

        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-bold text-blue-500">왓 체디 루앙 (Wat Chedi Luang)</h4>
            <p>15세기에 건립된 거대한 불탑이 있는 사원으로, 한때 에메랄드 불상이 모셔져 있던 곳입니다. 현재는 웅장한 폐허의 모습으로 방문객들에게 깊은 인상을 줍니다.</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>⏱️ 소요 시간: 약 1시간</li>
              <li>💸 입장료: 50바트</li>
              <li>🕰️ 운영 시간: 매일 6:00 AM - 6:00 PM</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-bold text-blue-500">왓 프라 싱 (Wat Phra Singh)</h4>
            <p>14세기에 세워진 사원으로, 북태국에서 가장 중요한 불상 중 하나인 프라 싱 불상이 모셔져 있습니다. 아름다운 란나 건축 양식과 정교한 목조 장식이 인상적입니다.</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>⏱️ 소요 시간: 약 1시간</li>
              <li>💸 입장료: 20바트</li>
              <li>🕰️ 운영 시간: 매일 6:00 AM - 5:00 PM</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-bold text-blue-500">왓 치앙만 (Wat Chiang Man)</h4>
            <p>치앙마이에서 가장 오래된 사원으로, 13세기에 세워졌습니다. 독특한 코끼리 조각이 있는 불탑과 고대 불상이 유명합니다.</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>⏱️ 소요 시간: 약 45분</li>
              <li>💸 입장료: 무료</li>
              <li>🕰️ 운영 시간: 매일 8:00 AM - 5:00 PM</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-bold text-blue-500">왓 프라탓 도이수텝 (Wat Phra That Doi Suthep)</h4>
            <p>치앙마이를 대표하는 사원으로, 도이수텝 산 정상에 위치해 있어 시내를 한눈에 내려다볼 수 있습니다. 306개의 계단을 오르면 금빛 불탑이 반짝이는 모습을 볼 수 있으며, 케이블카를 이용할 수도 있습니다.</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>⏱️ 소요 시간: 왕복 교통 포함 약 2-3시간</li>
              <li>💸 입장료: 외국인 50바트</li>
              <li>🕰️ 운영 시간: 매일 6:00 AM - 8:00 PM</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-bold text-blue-500">왓 파랍 (Wat Pha Lat)</h4>
            <p>도이수텝으로 가는 길에 숨어있는 사원으로, 숲속에 자리 잡아 자연과 조화를 이루는 고요한 분위기가 특징입니다. 관광객이 많지 않아 조용한 산책을 즐기기에 좋습니다.</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>⏱️ 소요 시간: 약 1-1.5시간</li>
              <li>💸 입장료: 무료</li>
              <li>🕰️ 운영 시간: 매일 6:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>
      </section>

      )}

      {activeTab === 'markets' && (
        <>
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">🛍️ 시장 구경</h3>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h4 className="text-xl font-bold text-green-500">와로롯 시장 (Warorot Market)</h4>
          <p>현지인들이 주로 찾는 재래시장으로, 신선한 과일, 현지 음식, 의류, 기념품 등을 저렴한 가격에 구입할 수 있습니다. 현지의 일상 생활을 가까이에서 느낄 수 있는 곳입니다.</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>⏱️ 소요 시간: 약 1.5-2시간</li>
            <li>🕰️ 운영 시간: 매일 5:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </section>
<section>
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">🛍️ 남문(Chiang Mai Gate) & 북문(Chang Phuak Gate) 시장</h3>
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h4 className="text-xl font-bold text-green-500">남문(Chiang Mai Gate) & 북문(Chang Phuak Gate) 시장</h4>
    <p className="mt-2 text-gray-700">이른 아침부터 열리는 시장으로, 갓 만든 따끈한 길거리 음식과 현지인들의 활기찬 일상을 엿볼 수 있습니다. 아침 식사로 현지 음식을 맛보기에 좋습니다.</p>
    <ul className="list-disc list-inside mt-2 text-gray-700">
      <li>⏱️ 소요 시간: 각 시장당 약 1시간</li>
      <li>🕰️ 운영 시간: 매일 6:00 AM - 12:00 PM</li>
    </ul>
  </div>
</section>

{/* 🌙 야시장(Night Bazaar) */}
<section>
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">🌙 야시장 (Night Bazaar)</h3>
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h4 className="text-xl font-bold text-purple-500">야시장 (Night Bazaar)</h4>
    <p className="mt-2 text-gray-700">다양한 기념품, 핸드메이드 제품, 그리고 맛있는 길거리 음식이 가득한 치앙마이의 대표적인 야시장입니다. 밤의 분위기를 즐기며 천천히 둘러보기에 좋습니다.</p>
    <ul className="list-disc list-inside mt-2 text-gray-700">
      <li>⏱️ 소요 시간: 약 2-3시간</li>
      <li>🕰️ 운영 시간: 매일 6:00 PM - 11:00 PM</li>
    </ul>
  </div>
</section>
</>
      )}

      {activeTab === 'nearby' && (
        <>
{/* 🐘 코끼리 밥주기 체험 */}
<section>
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">🐘 코끼리 밥주기 체험</h3>
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h4 className="text-xl font-bold text-yellow-500">코끼리 밥주기 체험</h4>
    <p className="mt-2 text-gray-700">반나절 투어로 진행되며, 코끼리에게 직접 먹이를 주고 교감할 수 있는 기회입니다. 동물 학대 없는 보호소 투어를 선택하면 더 의미 있는 체험이 됩니다.</p>
    <ul className="list-disc list-inside mt-2 text-gray-700">
      <li>⏱️ 소요 시간: 약 4-5시간</li>
      <li>💰 비용: 1인당 약 2,500-3,500바트 (포함 사항에 따라 다름)</li>
      <li>📌 참고 사항: 사전 예약 필수, 편안한 복장과 운동화 착용 권장</li>
    </ul>
  </div>
</section>

{/* 🏞️ 도이 인타논 국립공원 (Doi Inthanon National Park) */}
<section>
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">🏞️ 도이 인타논 국립공원 (Doi Inthanon National Park)</h3>
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h4 className="text-xl font-bold text-green-600">도이 인타논 국립공원 (Doi Inthanon National Park)</h4>
    <p className="mt-2 text-gray-700">
      태국에서 가장 높은 산인 도이 인타논(해발 2,565m)을 중심으로 한 국립공원으로, 울창한 열대우림과 다양한 동식물의 서식지로 유명합니다. 
      공원 내에는 와치라탄(Wachirathan) 폭포, 시리팟(Siriphum) 폭포 등 아름다운 폭포들이 있으며, 왕과 왕비를 기리기 위해 세워진 장수 기념탑도 있습니다.
    </p>
    <ul className="list-disc list-inside mt-2 text-gray-700">
      <li>⏱️ 소요 시간: 치앙마이 시내에서 약 2시간, 공원 내에서 약 4-5시간 머무름</li>
      <li>💰 비용: 성인 300바트, 어린이 150바트 (차량 진입 시 추가 요금 발생)</li>
      <li>🕰️ 운영 시간: 매일 5:30 AM - 6:30 PM</li>
      <li>📌 참고 사항: 기온이 낮을 수 있어 따뜻한 옷과 편안한 신발 준비 권장</li>
    </ul>
  </div>
</section>

{/* 🛕 도이수텝 사원 (Doi Suthep Temple) & 도이 뿌이 마을 (Doi Pui Village) */}
<section>
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">🛕 도이수텝 사원 (Doi Suthep Temple) & 도이 뿌이 마을 (Doi Pui Village)</h3>
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h4 className="text-xl font-bold text-yellow-600">도이수텝 사원 (Doi Suthep Temple) & 도이 뿌이 마을 (Doi Pui Village)</h4>
    <p className="mt-2 text-gray-700">
      도이수텝 사원은 치앙마이 시내를 내려다볼 수 있는 산 정상에 위치한 유명한 사원으로, 306개의 계단을 오르면 금빛 불탑과 아름다운 전경을 감상할 수 있습니다. 
      도이 뿌이 마을은 몽족(Hmong) 소수민족이 거주하는 전통 마을로, 그들의 문화와 생활 방식을 엿볼 수 있으며, 전통 의상 체험과 수공예품 구입이 가능합니다.
    </p>
    <ul className="list-disc list-inside mt-2 text-gray-700">
      <li>⏱️ 소요 시간: 도이수텝 사원 약 1-2시간, 도이 뿌이 마을 약 1-2시간 소요</li>
      <li>💰 비용: 도이수텝 사원 입장료 50바트, 도이 뿌이 마을은 무료 (일부 체험은 별도 요금)</li>
      <li>🕰️ 운영 시간: 도이수텝 사원 매일 6:00 AM - 8:00 PM, 도이 뿌이 마을 일출~일몰까지</li>
      <li>📌 참고 사항: 사원 방문 시 어깨와 무릎을 가리는 옷 착용 필수</li>
    </ul>
  </div>
</section>
{/* ♨️ 싼캄펭 온천 (San Kamphaeng Hot Springs) */}
<section>
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">♨️ 싼캄펭 온천 (San Kamphaeng Hot Springs)</h3>
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h4 className="text-xl font-bold text-blue-600">싼캄펭 온천 (San Kamphaeng Hot Springs)</h4>
    <p className="mt-2 text-gray-700">
      치앙마이 시내에서 약 36km 떨어진 곳에 위치한 온천으로, 자연 속에서 온천욕을 즐길 수 있습니다. 
      뜨거운 온천수에 계란을 삶아 먹는 독특한 체험도 가능합니다.
    </p>
    <ul className="list-disc list-inside mt-2 text-gray-700">
      <li>⏱️ 소요 시간: 왕복 교통 시간 포함 약 3-4시간 소요</li>
      <li>💰 비용: 성인 100바트, 어린이 50바트 (개인 온천탕 이용 시 추가 요금 발생)</li>
      <li>🕰️ 운영 시간: 매일 7:00 AM - 6:00 PM</li>
      <li>📌 참고 사항: 수영복과 수건 지참 권장</li>
    </ul>
  </div>
</section>

{/* 🏞️ 먼쨈 (Mon Cham) */}
<section>
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">🏞️ 먼쨈 (Mon Cham)</h3>
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h4 className="text-xl font-bold text-green-600">먼쨈 (Mon Cham)</h4>
    <p className="mt-2 text-gray-700">
      치앙마이에서 북서쪽으로 약 40km 떨어진 산악 지대로, 아름다운 산악 경치와 시원한 기후로 유명합니다. 
      캠핑, 글램핑, 현지 농산물 시식 등 다양한 활동을 즐길 수 있습니다.
    </p>
    <ul className="list-disc list-inside mt-2 text-gray-700">
      <li>⏱️ 소요 시간: 왕복 교통 포함 당일치기 또는 1박 2일 일정 가능</li>
      <li>💰 비용: 입장료 없음 (숙박 및 일부 체험은 별도 요금 발생)</li>
      <li>📌 참고 사항: 주말/성수기에는 사전 예약 권장</li>
    </ul>
  </div>
</section>

{/* 🛕 치앙다오 사원 (Chiang Dao Temple) */}
<section>
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">🛕 치앙다오 사원 (Chiang Dao Temple)</h3>
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h4 className="text-xl font-bold text-yellow-600">치앙다오 사원 (Chiang Dao Temple)</h4>
    <p className="mt-2 text-gray-700">
      치앙마이에서 북쪽으로 약 70km 떨어진 곳에 위치한 사원으로, 동굴 내부에 사원이 자리 잡고 있어 독특한 분위기를 자아냅니다. 
      동굴 탐험과 함께 불교 문화에 대한 이해를 높일 수 있습니다.
    </p>
    <ul className="list-disc list-inside mt-2 text-gray-700">
      <li>⏱️ 소요 시간: 왕복 교통 포함 약 4-5시간 소요</li>
      <li>💰 비용: 무료 (동굴 조명 사용 시 소정의 기부금 요청 가능)</li>
      <li>🕰️ 운영 시간: 매일 8:00 AM - 5:00 PM</li>
      <li>📌 참고 사항: 동굴 탐험 시 손전등 지참 권장</li>
    </ul>
  </div>
</section>
</>
      )}

      {activeTab === 'cities' && (
        <>
<section>
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">🏙️ 주변 도시 탐방</h3>
  
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h4 className="text-xl font-bold text-purple-600">치앙라이 (Chiang Rai)</h4>
    <p className="mt-2 text-gray-700">
      치앙마이에서 북동쪽으로 약 190km 떨어진 도시로, 독특한 사원과 예술 작품으로 유명합니다.
      대표적인 명소로는 화이트 템플(왓 롱쿤), 블루 템플(왓 롱수아텐), 블랙 하우스(반 담 박물관) 등이 있습니다.
    </p>
    <ul className="list-disc list-inside mt-2 text-gray-700">
      <li>⏱️ 소요 시간: 치앙마이에서 차량으로 약 3시간 소요 (하루 일정 추천)</li>
      <li>💰 비용: 일일 투어 1인당 약 1,500-2,500바트 (포함 사항에 따라 상이)</li>
      <li>📌 참고 사항: 명소 간 거리가 멀어 투어나 차량 대여 추천</li>
    </ul>
  </div>

  {/* 🏞️ 빠이 (Pai) */}
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h4 className="text-xl font-bold text-green-600">빠이 (Pai)</h4>
    <p className="mt-2 text-gray-700">
      치앙마이에서 북서쪽으로 약 130km 떨어진 작은 마을로, 아름다운 자연 경관과 히피 문화로 유명합니다.
      주요 명소로는 빠이 캐년, 멤모리얼 브릿지, 화이트 부다, 밤부 브릿지 등이 있습니다.
    </p>
    <ul className="list-disc list-inside mt-2 text-gray-700">
      <li>⏱️ 소요 시간: 차량으로 약 3시간 소요 (1박 2일 이상 추천)</li>
      <li>💰 비용: 일일 투어 1인당 약 300-500바트 (포함 사항에 따라 다름)</li>
      <li>📌 참고 사항: 산길이 많아 멀미 예방 필요</li>
    </ul>
  </div>

  {/* 🌏 골든 트라이앵글 (Golden Triangle) */}
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <h4 className="text-xl font-bold text-yellow-600">골든 트라이앵글 (Golden Triangle)</h4>
    <p className="mt-2 text-gray-700">
      태국, 미얀마, 라오스 세 나라의 국경이 만나는 지점으로, 메콩 강과 루악 강이 합류하는 곳입니다.
      과거 아편 무역의 중심지였으며, 현재는 박물관과 전망대를 통해 역사와 문화를 배울 수 있습니다.
    </p>
    <ul className="list-disc list-inside mt-2 text-gray-700">
      <li>⏱️ 소요 시간: 치앙라이에서 차량으로 약 1-1.5시간, 관람 약 2-3시간 소요</li>
      <li>💰 비용: 박물관 입장료 약 50-100바트, 보트 투어 추가 비용 발생 가능</li>
      <li>📌 참고 사항: 여권 지참 필수, 일부 지역 출입 제한 가능</li>
    </ul>
  </div>
</section>
</>
      )}
    </div>
  );
};

export default AttractionsTab;