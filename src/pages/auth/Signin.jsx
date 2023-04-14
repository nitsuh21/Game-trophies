import {Link} from 'react-router-dom'
import { FaFacebook,FaGoogle,FaTelegram } from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AiOutlineMail } from 'react-icons/ai'
import { login, reset } from '../../features/auth/authSlice'

export default function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector(
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
      email,
      password,
    }

    dispatch(login(userData))
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2
    bg-no-repeat bg-cover bg-center bg-fixed bg-[url('https://www.mordeo.org/files/uploads/2022/08/Victor-With-Suitcase-PUBG-Mobile-Mad-Gala-Festival-4K-Ultra-HD-Mobile-Wallpaper-scaled.jpg')]">

    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className='bg-white rounded-2xl shadow-2xl flex md:w-2/3 w-3/3 max-w-4xl'>
        <div className="w-5/5 justify-center md:w-3/5 md:p-5 bg-white ">
         <div className='text-left font-bold'>
          <span className='text-green-500'>PubGAwards </span>ET
         </div>
         <div className='py-10'>
          <h2 className='text-3xl font-bold text-green-500 mb-2'>SignIn</h2>
          <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
          <div className='flex justify-center my-2'>
            <a href="'login/" className='border-2 border-gray-200 roundede-full p-3 mx-1'>
              <FaFacebook className='text-sm'/>
            </a>
            <a href="login/" className='border-2 border-gray-200 roundede-full p-3 mx-1'>
              <FaGoogle className='text-sm' />
            </a>
            <a href="login/" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
              <FaTelegram className='text-sm'/>
            </a>
          </div>
          <div className='flex flex-col items-center'>
              <p className='test-grey-400 my-3'>or manually signin</p>
              <form onSubmit={onSubmit}>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <AiOutlineMail className='text-grey-400 m-2'/>
                <input className='bg-grey-100 outline-none text-sm flex-1' type="text" value={email} onChange={onChange} name='email' placeholder='email'/>
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center'>
                <MdLockOutline className='text-grey-400 m-2'/>
                <input className='bg-grey-100 outline-none text-sm flex-1' type="password" value={password} onChange={onChange} name='password' placeholder='Enter Password'/>
              </div>
              <button className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white '>
                Sign In
              </button>
              </form>
          </div>
          <div className='flex w-64 justify-between mb-5 mt-3'>
            <label className='flex items-center text-xs'><input type="checkbox" name='remember' className='mr-1' />Remember me</label>
            <a href="login/" className='text-xs'>Forget password?</a>
          </div>
         </div>
        </div> 
        {/* Sign Up Section*/}
        <div className='hidden w-2/5 bg-green-500 md:block text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
          <h2 className='text-3xl font-bold mb-2'>Welcome</h2>
          <div className='border-2 w-10 border-white inline-block mb-2'></div>
          <p className='mb-2'>Signup Now and make your Journey even more fun</p>
          <Link className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 ' to="/auth/signup">Signup</Link>
        </div>
      </div>  
    </main>
    </div>
  )
}
