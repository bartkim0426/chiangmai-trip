'use client';

import Head from 'next/head';
import { useState } from 'react';
import PreparationTab from '../components/PreparationTab';
import ScheduleTab from '../components/ScheduleTab';
import InfoTab from '../components/InfoTab';
import ThaiTab from '../components/ThaiTab';
import AttractionsTab from '../components/AttractionsTab';

const Home = () => {
  const [activeTab, setActiveTab] = useState('preparation');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>가족과 함께하는 치앙마이 여행</title>
        <meta name="description" content="2025년 2월 2일부터 2월 7일까지의 치앙마이 여행 계획" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow-md rounded-lg p-4 mb-6 flex justify-around">
        <button
          onClick={() => setActiveTab('preparation')}
          className={`px-4 py-2 rounded-md ${activeTab === 'preparation' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
        >
          준비물
        </button>
        <button
          onClick={() => setActiveTab('schedule')}
          className={`px-4 py-2 rounded-md ${activeTab === 'schedule' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
        >
          일정
        </button>
        <button
          onClick={() => setActiveTab('info')}
          className={`px-4 py-2 rounded-md ${activeTab === 'info' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
        >
          정보
        </button>
        <button
          onClick={() => setActiveTab('thai')}
          className={`px-4 py-2 rounded-md ${activeTab === 'thai' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
        >
          태국어
        </button>
        <button
          onClick={() => setActiveTab('attractions')}
          className={`px-4 py-2 rounded-md ${activeTab === 'attractions' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
        >
          여행지
        </button>
      </nav>

      <main className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        {activeTab === 'preparation' && <PreparationTab />}
        {activeTab === 'schedule' && <ScheduleTab />}
        {activeTab === 'info' && <InfoTab />}
        {activeTab === 'thai' && <ThaiTab />}
        {activeTab === 'attractions' && <AttractionsTab />}
      </main>
    </div>
  );
};

export default Home;