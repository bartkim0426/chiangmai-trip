'use client';

const ThaiTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">🇹🇭 기본 태국어 표현 모음</h2>

      {/* 기본 인사말 */}
      <section className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">👋 기본 인사말</h3>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
          <li>안녕하세요: <strong>싸왓디 캅/카</strong> (สวัสดีครับ/ค่ะ)</li>
          <li>감사합니다: <strong>컵쿤 캅/카</strong> (ขอบคุณครับ/ค่ะ)</li>
          <li>죄송합니다: <strong>커 톳 캅/카</strong> (ขอโทษครับ/ค่ะ)</li>
          <li>괜찮습니다: <strong>마이 뺀 라이 캅/카</strong> (ไม่เป็นไรครับ/ค่ะ)</li>
          <li>안녕히 가세요: <strong>라 꾼 캅/카</strong> (ลาก่อนครับ/ค่ะ)</li>
        </ul>
      </section>

      {/* 쇼핑 시 유용한 태국어 */}
      <section className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">🛍️ 쇼핑할 때 유용한 표현</h3>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
          <li>이거 얼마에요?: <strong>라카 타오라이 캅/카?</strong> (ราคาเท่าไหร่ครับ/ค่ะ?)</li>
          <li>조금 깎아주세요: <strong>롯 나 카 캅/카</strong> (ลดราคาได้ไหมครับ/ค่ะ?)</li>
          <li>너무 비싸요: <strong>팽 마크 캅/카</strong> (แพงมากครับ/ค่ะ)</li>
          <li>이거 주세요: <strong>카오 니 캅/카</strong> (เอาอันนี้ครับ/ค่ะ)</li>
        </ul>
      </section>

      {/* 음식 주문 */}
      <section className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">🍽️ 음식 주문 시 표현</h3>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
          <li>이것은 무엇인가요?: <strong>니 아라이 캅/카?</strong> (นี่อะไรครับ/ค่ะ?)</li>
          <li>맵지 않게 해주세요: <strong>마이 싸이 프릭 캅/카</strong> (ไม่ใส่พริกครับ/ค่ะ)</li>
          <li>계산서 주세요: <strong>첵 빌 두어이 캅/카</strong> (เช็คบิลด้วยครับ/ค่ะ)</li>
          <li>맛있어요: <strong>아로이 캅/카</strong> (อร่อยครับ/ค่ะ)</li>
        </ul>
      </section>

      {/* 숫자 표현 */}
      <section className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">🔢 숫자 (1~10, 100)</h3>
        <table className="w-full table-auto border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border p-2">숫자</th>
              <th className="border p-2">태국어</th>
              <th className="border p-2">태국어 발음</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-center">
            <tr><td className="border p-2">1</td><td className="border p-2">๑</td><td className="border p-2">눙 (หนึ่ง)</td></tr>
            <tr><td className="border p-2">2</td><td className="border p-2">๒</td><td className="border p-2">쏭 (สอง)</td></tr>
            <tr><td className="border p-2">3</td><td className="border p-2">๓</td><td className="border p-2">쌈 (สาม)</td></tr>
            <tr><td className="border p-2">4</td><td className="border p-2">๔</td><td className="border p-2">씨 (สี่)</td></tr>
            <tr><td className="border p-2">5</td><td className="border p-2">๕</td><td className="border p-2">하 (ห้า)</td></tr>
            <tr><td className="border p-2">6</td><td className="border p-2">๖</td><td className="border p-2">혹 (หก)</td></tr>
            <tr><td className="border p-2">7</td><td className="border p-2">๗</td><td className="border p-2">쩻 (เจ็ด)</td></tr>
            <tr><td className="border p-2">8</td><td className="border p-2">๘</td><td className="border p-2">뺏 (แปด)</td></tr>
            <tr><td className="border p-2">9</td><td className="border p-2">๙</td><td className="border p-2">까오 (เก้า)</td></tr>
            <tr><td className="border p-2">10</td><td className="border p-2">๑๐</td><td className="border p-2">십 (สิบ)</td></tr>
            <tr><td className="border p-2">100</td><td className="border p-2">๑๐๐</td><td className="border p-2">릉 (ร้อย)</td></tr>
          </tbody>
        </table>
      </section>

      {/* 긴급 상황 시 */}
      <section className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">🚨 긴급 상황 시 표현</h3>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
          <li>도와주세요: <strong>춥 두어이 캅/카</strong> (ช่วยด้วยครับ/ค่ะ)</li>
          <li>경찰 불러주세요: <strong>리억 땀 루앗 캅/카</strong> (เรียกตำรวจให้หน่อยครับ/ค่ะ)</li>
          <li>병원은 어디에 있나요?: <strong>롱팡 유 티나이 캅/카?</strong> (โรงพยาบาลอยู่ที่ไหนครับ/ค่ะ?)</li>
        </ul>
      </section>
    </div>
  );
};

export default ThaiTab;