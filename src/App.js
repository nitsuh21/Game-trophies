import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard';
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'
import Tournaments from './pages/Tournaments';
import Leaderboard from './pages/Leaderboard';
import Marketplace from './pages/Marketplace'
import Addtournament from './pages/Addtournament'
import JTournaments from './pages/JTournaments';
import ProtectedRoute from './utils/ProtectedRoute'
import Settings from './pages/settings';
import Home from './pages/Home';
import Sidebar from './components/Sidebar'

function App() {
  const user = JSON.parse(localStorage.getItem('user'))

  console.log(user)
  return (
    <>
    <Router>
    <div className='Container'>
    <Sidebar>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/auth/signup' element={<Signup/>}/>
        <Route path='/auth/signin' element={<Signin/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
        <Route path='/marketplace' element={<Marketplace/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/addtournament' element={<Addtournament/>}/>
        <Route path='/jtournaments' element={<JTournaments/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoute user={user}>
          <Dashboard />
        </ProtectedRoute>
          }/>
        <Route path='tournaments' element={
          <ProtectedRoute user={user}>
          <Tournaments/>
        </ProtectedRoute>
          }/>
      </Routes>
    </Sidebar>
    </div>
    </Router>
    </>
  );
}

export default App;
