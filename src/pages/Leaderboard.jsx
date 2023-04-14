import React from 'react';
import { useEffect } from 'react';
import {  BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data.js';
import {GiMedalSkull} from 'react-icons/gi'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers} from '../features/auth/authSlice.js';


const Leaderboard = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUsers())
  },[])
  const { users } = useSelector((state) => state.auth)
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between p-4'>
        <h2>leaderboard</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Userame</span>
            <span className='sm:text-left text-right'>Rank</span>
            <span className='hidden md:grid'>Total Point</span>
            <span className='hidden sm:grid'>Badge</span>
          </div>
          <ul>
            {users.map((leader, id) => (
                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <div className='flex items-center'>
                        <div className='bg-green-100 p-3 rounded-lg'>
                            <GiMedalSkull className='text-green-500 text-3xl' />
                        </div>
                        <p className='pl-4'>{leader.username}</p>
                    </div>
                    <p className='text-gray-600 sm:text-left text-right'>{leader.rank}</p>
                    <p className='hidden md:flex'>{leader.balance}</p>
                    <div className='sm:flex hidden justify-between items-center'>
                        <p>{leader.email}</p>
                        <BsThreeDotsVertical />
                    </div>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;