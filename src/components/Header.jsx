import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
  const { getuser } = useSelector((state) => state.auth)
  const user = getuser?getuser:''
  console.log('from header')
  console.log(getuser)
    return (
      <div className='flex justify-between px-4 pt-4'>
          <h2>Dashboard</h2>
        <div className='flex justify-between px-2'>
          <h2 className='mr-2 ml-2'>{user.username}</h2>
          <h2>Signout</h2>
        </div>
      </div>
    )
  }
  
  export default Header