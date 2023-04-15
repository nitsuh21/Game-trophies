import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import tournamentService from './tournamentService'

const initialState = {
  tournaments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new tournament
export const createTournament = createAsyncThunk(
  'tournaments/create',
  async (tournamentData, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      // console.log(tournamentData)
      console.log(tournamentData)
      return await tournamentService.createTournament(tournamentData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data && 
          error.response.data.message) ||
        error.message ||
        error.toString()
      console.log(message)
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user tournaments
export const getTournaments = createAsyncThunk(
  'tournaments/getAll',
  async (_, thunkAPI) => {
    try {
      return await tournamentService.getTournaments()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user song
export const deleteTournament = createAsyncThunk(
  'tournaments/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await tournamentService.deleteTournament(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
//join tournament
export const joinTournament = createAsyncThunk(
  'tournaments/join',
  async(tournamentData,thunkAPI)=>{
    try {
      return await tournamentService.joinTournament(tournamentData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
//join tournament
export const joinedTournaments = createAsyncThunk(
  'tournaments/joined',
  async(tournamentData,thunkAPI)=>{
    try {
      return await tournamentService.joinedTournaments(tournamentData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
export const tournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTournament.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTournament.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tournaments.push(action.payload)
      })
      .addCase(createTournament.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getTournaments.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTournaments.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tournaments = action.payload
      })
      .addCase(getTournaments.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteTournament.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteTournament.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tournaments = state.tournaments.filter(
          (song) => song._id !== action.payload.id
        )
      })
      .addCase(deleteTournament.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = tournamentSlice.actions
export default tournamentSlice.reducer
