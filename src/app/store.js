import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import tournamentReducer from '../features/tournaments/tournamentSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tournaments: tournamentReducer
  },
})
