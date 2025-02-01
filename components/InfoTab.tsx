'use client';

const InfoTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">🇹🇭 태국 및 치앙마이 소개</h2>

      <section className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">📍 태국 개요</h3>
        <p className="text-gray-700 leading-relaxed">
          태국은 동남아시아에 위치한 아름다운 나라로, 풍부한 문화유산과 열대 자연경관으로 유명합니다. 수도는 방콕이며 공식 언어는 태국어입니다.
          태국은 활기찬 도시부터 고요한 사원, 이국적인 해변까지 다양한 매력을 갖추고 있어 전 세계 여행자들의 사랑을 받고 있습니다.
        </p>
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">🏞️ 치앙마이 소개</h3>
        <p className="text-gray-700 leading-relaxed">
          치앙마이는 태국 북부에 위치한 도시로, 란나 왕국의 고도(古都)였습니다. 전통과 현대가 조화를 이루며, 아름다운 사원과 고즈넉한 올드타운,
          자연 경관이 어우러진 도시입니다. 또한, 트레킹, 사원 탐방, 코끼리 보호구역 방문 등 다양한 액티비티를 즐길 수 있습니다.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">🍽️ 치앙마이 대표 음식</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg shadow-md p-4">
            <img src="https://source.unsplash.com/featured/?khao-soi" alt="카오 소이" className="rounded-md mb-2 w-full h-40 object-cover" />
            <h4 className="text-lg font-bold text-gray-800">카오 소이 (Khao Soi)</h4>
            <p className="text-gray-600">
              치앙마이의 대표적인 커리 국수 요리로, 고소한 코코넛 밀크와 향신료가 어우러진 국물에 튀긴 노란 국수가 올라가는 것이 특징입니다.
              치킨이나 소고기를 곁들여 먹으면 더욱 맛있습니다.
            </p>
          </div>

          <div className="border rounded-lg shadow-md p-4">
            <img src="https://source.unsplash.com/featured/?som-tum" alt="쏨땀" className="rounded-md mb-2 w-full h-40 object-cover" />
            <h4 className="text-lg font-bold text-gray-800">쏨땀 (Som Tum)</h4>
            <p className="text-gray-600">
              신선한 파파야를 채 썰어 매콤새콤하게 버무린 태국식 샐러드입니다. 라임, 피쉬 소스, 고추, 땅콩 등이 들어가며, 상큼한 맛이 입맛을 돋웁니다.
            </p>
          </div>

          <div className="border rounded-lg shadow-md p-4">
            <img src="https://source.unsplash.com/featured/?pad-thai" alt="팟타이" className="rounded-md mb-2 w-full h-40 object-cover" />
            <h4 className="text-lg font-bold text-gray-800">팟타이 (Pad Thai)</h4>
            <p className="text-gray-600">
              쌀국수를 달콤짭짤한 소스에 볶아낸 태국의 대표적인 볶음 국수입니다. 새우, 숙주, 땅콩 등을 곁들여 먹으며, 라임을 뿌려 상큼함을 더합니다.
            </p>
          </div>

          <div className="border rounded-lg shadow-md p-4">
            <img src="https://source.unsplash.com/featured/?mango-sticky-rice" alt="망고 스티키 라이스" className="rounded-md mb-2 w-full h-40 object-cover" />
            <h4 className="text-lg font-bold text-gray-800">망고 스티키 라이스 (Mango Sticky Rice)</h4>
            <p className="text-gray-600">
              달콤한 망고와 찰기가 있는 코코넛 밀크로 맛을 낸 찹쌀밥의 조화가 일품인 디저트입니다. 부드럽고 달콤한 맛이 매력적입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">🚨 비상 연락처</h3>
        <ul className="list-disc list-inside ml-4 text-gray-600 space-y-1">
          <li>대한민국 대사관: +66-2-247-7537</li>
          <li>태국 관광 경찰: 1155</li>
          <li>태국 경찰: 191</li>
          <li>화재 신고: 199</li>
        </ul>
      </section>
    </div>
  );
};

export default InfoTab;