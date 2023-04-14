import React from 'react';
import {Link} from 'react-router-dom';
import { RxSketchLogo, RxDashboard } from 'react-icons/rx';
import { HiOutlineShoppingBag,HiLogout,HiLogin } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import {GiDiamondTrophy,GiNotebook} from 'react-icons/gi'
import { useSelector, useDispatch } from 'react-redux'
import {logout} from '../features/auth/authSlice'

const Sidebar = ({ children }) => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const onSubmit= (e)=>{
    e.preventDefault()
    dispatch(logout())
  }
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link to='/'>
            <div className='bg-green-500 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          {user?
          <Link to='/dashboard'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>:''
          }
          {user?
          <Link to='/tournaments'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <GiDiamondTrophy size={20} />
            </div>
          </Link>:''
          }
          <Link to='/leaderboard'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <GiNotebook size={20} />
            </div>
          </Link>
          <Link to='/marketplace'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          {user?
          <Link to='/settings'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FiSettings size={20} />
            </div>
          </Link>:''
          }
          {user?
          <form onSubmit={onSubmit}>
          <button className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
          <HiLogout size={20} />
          </button>
          </form>:
            <Link to='/auth/signin' className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
          <HiLogin size={20} />
            </Link>
         }
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;