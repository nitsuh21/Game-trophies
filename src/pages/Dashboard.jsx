import React from 'react'
import { useEffect } from 'react';
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentGames from '../components/RecentGames';


function Dashboard() {
  useEffect(()=>{},[])
  return (
    <>
      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentGames />
        </div>
      </main>
    </>
  );
}

export default Dashboard