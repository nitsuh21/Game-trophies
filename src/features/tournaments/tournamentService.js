import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/tournaments/api/'

// Create new tournament
const createTournament = async (tournamentData) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }
  try {
    const response = await axios.post(API_URL, tournamentData)
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
  
  
}

// Get user tournaments
const getTournaments = async () => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }
  const response = await axios.get(API_URL)
  console.log('response')
  console.log(response.data)

  return response.data
}

// Delete user tournament
const deleteTournament = async (tournamentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + tournamentId, config)

  return response.data
}
//join Tournament
const joinTournament = async (tournamentData) =>{
  try {
    console.log('id')
    console.log(tournamentData.id)
    const data = {user:tournamentData.name,tournament:tournamentData.id}
    const response = await axios.post(API_URL + 'participants//',data)
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}
const tournamentService = {
  createTournament,
  getTournaments,
  deleteTournament,
  joinTournament
}

export default tournamentService
