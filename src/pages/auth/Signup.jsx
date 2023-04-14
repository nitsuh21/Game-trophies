
import { FaFacebook,FaGoogle,FaTelegram,FaRegEnvelope } from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'
import {MdLockOutline} from 'react-icons/md'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import { HiUserCircle } from 'react-icons/hi'
import { register, reset } from '../../features/auth/authSlice'


export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email:''
  })

  const { username,password,email} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      username,
      email,
      password,
    }
    console.log(userData)
    dispatch(register(userData))
    
      };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2
    bg-no-repeat bg-cover bg-center bg-fixed bg-[url('https://www.mordeo.org/files/uploads/2022/08/Victor-With-Suitcase-PUBG-Mobile-Mad-Gala-Festival-4K-Ultra-HD-Mobile-Wallpaper-scaled.jpg')]">
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className=' rounded-2xl shadow-2xl flex bg-center md:w-2/3 max-w-4xl'>
        {/* Sign In Section*/}
        <div className='hidden w-2/5 bg-green-500 md:block text-white rounded-tl-2xl rounded-bl-2xl py-36 px-12'>
          <h2 className='text-3xl font-bold mb-2'>Hello Warrior</h2>
          <div className='border-2 w-10 border-white inline-block mb-2'></div>
          <p className='mb-2'>Are you ready for the next tournament?</p>
          <Link className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 ' to="/auth/signin">SignIn</Link>
        </div>
        <div className="w-5/5 justify-center md:w-3/5 p-5 bg-white ">
         <div className='text-left font-bold'>
          <span className='text-green-500'>PubGAwards </span>ET
         </div>
         <div className='py-10'>
          <h2 className='text-3xl font-bold text-green-500 mb-2'>SignUp</h2>
          <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
          <div className='flex justify-center my-2'>
            <a href="#" className='border-2 border-gray-200 roundede-full p-3 mx-1'>
              <FaFacebook className='text-sm'/>
            </a>
            <a href="#" className='border-2 border-gray-200 roundede-full p-3 mx-1'>
              <FaGoogle className='text-sm' />
            </a>
            <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
              <FaTelegram className='text-sm'/>
            </a>
          </div>
          <div className='flex flex-col items-center'>
              <p className='test-grey-400 my-3'>or manually singup</p>
              <form onSubmit={onSubmit}>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <HiUserCircle className='text-grey-400 m-2'/>
                <input className='bg-grey-100 outline-none text-sm flex-1' type="text" value={username} onChange={onChange} name='username' placeholder='Username'/>
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <AiOutlineMail className='text-grey-400 m-2'/>
                <input className='bg-grey-100 outline-none text-sm flex-1' type="email" value={email} onChange={onChange} name='email' placeholder='Email'/>
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <MdLockOutline className='text-grey-400 m-2'/>
                <input className='bg-grey-100 outline-none text-sm flex-1' type="password" value={password} onChange={onChange} name='password' placeholder='Enter Password'/>
              </div>
              <button className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white mt-3'>
                Sign Up
              </button>
              </form>
              <div className='flex w-64 justify-between mb-5 mt-3'>
                <Link to="/auth/signin">
                    <p>already have an account?</p>
                </Link>
              </div>
          </div>
         </div>
        </div> 
      </div>  
    </main>
    </div>
  )
}
 