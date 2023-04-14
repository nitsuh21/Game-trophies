import React, { useEffect } from 'react'
import {useState} from 'react'
import {createTournament} from '../features/tournaments/tournamentSlice'
import { useDispatch } from 'react-redux'

function Addtournament() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    game_name: '',
    status:'upcomming',
    date:'',
    time:'',
    award:''
    })

  const { name,type, game_name,status,date,time,award } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const dispatch = useDispatch()

  useEffect(()=>{
    
  },[])
  const onSubmit = (e)=>{
    e.preventDefault()
    const tournamentData ={
        name,type,game_name,status,date,time,award
    }
    dispatch(createTournament(tournamentData))
    setFormData('')
  }
  return (
    <div className='flex flex-col items-center justify-center w-full flex-1 py-20 px-20 text-center"'>
    <form class="w-full max-w-lg" onSubmit={onSubmit}>
    <div class="flex flex-wrap -mx-3 mb-6 ">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Tournament Name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name='name' onChange={onChange} type="text" placeholder="Tournament Name"></input>
        
        </div>
        
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Game Type
        </label>
        <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='type' onChange={onChange} id="grid-state">
            <option>PubG</option>
            <option>COD</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Game Name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" name='game_name' onChange={onChange} type="text" placeholder="Game Name"></input>
        
        </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            Date
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="date" name='date' onChange={onChange} placeholder="Date"></input>
        </div>
        <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Time
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='Time' onChange={onChange}  type="text" placeholder="Time"></input>
        </div>
        <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4" for="grid-last-name">
            Award
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='award' onChange={onChange}  type="text" placeholder="Award"></input>
        </div>
    </div>
    <button className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white mt-3'>
        Create
    </button>
    </form>
    </div>
    
  )
}

export default Addtournament