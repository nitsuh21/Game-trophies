import React from 'react';
import { data } from '../data/data.js';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getTournaments } from '../features/tournaments/tournamentSlice.js';
import {GiTrophyCup,GiMedal} from "react-icons/gi";

const RecentGames = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTournaments())
  },[])
  const { tournaments } = useSelector((state) => state.tournaments)
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <div className='flex'>
      <GiTrophyCup className='text-xl text-yellow-500 '/>
      <h1>  Recent Tournaments</h1>
      </div>
      <ul>
        {tournaments.map((tournament, id) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='text-green-200 rounded-lg p-3'>
              <GiMedal className='text-green-500 text-2xl' />
              <i class="fa-solid fa-medal"></i>
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>${tournament.name}</p>
              <p className='text-gray-400 text-sm'>{tournament.award}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{tournament.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentGames;