import React, { useEffect } from 'react';
import { GiChaingun } from 'react-icons/gi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data.js';
import Header from '../components/Header.jsx';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getTournaments } from '../features/tournaments/tournamentSlice.js';
import {joinTournament} from '../features/tournaments/tournamentSlice.js'

const Tournaments = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { tournaments } = useSelector((state) => state.tournaments)
  const { user } = useSelector((state) => state.auth)

  useEffect(()=>{
    dispatch(getTournaments())
  },[])

  const add_T = () =>{
    navigate('/addtournament')
  }
  
  const onSubmit = (e,tournament,user) => {
    e.preventDefault();
    const data = {tournament,user}
    dispatch(joinTournament(data))
      };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />
      <button type="button" onClick={add_T} class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800
       font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-3 mt-2 mr-2 mb-2">Add New</button>
     
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Tournament</span>
            <span className='hidden sm:grid'>Game</span>
            <span className='sm:text-left text-right'>Status</span>
            <span className='hidden md:grid'>Date</span>
            <span className='hidden md:grid'>Join</span>
          </div>
          <ul>
            {tournaments.map((tournament, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div className='bg-green-100 p-3 rounded-lg'>
                    <GiChaingun className='text-xl' />
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                      {tournament.name}
                    </p>
                    <p className='text-gray-800 text-sm'>{tournament.type}</p>
                  </div>
                </div>
                <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                      {tournament.game_name}
                    </p>
                    <p className='text-gray-800 text-sm'>award: {tournament.award}</p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>
                  <span
                    className={
                      tournament.status === 'Upcomming'
                        ? 'bg-green-200 p-2 rounded-lg'
                        : tournament.status === 'completed'
                        ? 'bg-red-200 p-2 rounded-lg'
                        : 'bg-yellow-200 p-2 rounded-lg'
                    }
                  >
                    {tournament.status}
                  </span>
                </p>
                <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                      {tournament.date}
                    </p>
                    <p className='text-gray-800 text-sm'>time:{tournament.time}</p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>
                  <form onSubmit={()=>this.onSubmit(tournament.id,user.id)}>
                  <button className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white mt-3'>
                    Join
                  </button>
                  </form>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;