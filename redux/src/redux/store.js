import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './feature/counterSlice'
import authReducer from './feature/authSlice'
import recipesReducer from "./feature/recipes/recipeSlice"
import logger from "../middleware/logger.js"
export const store = configureStore({
    reducer:{
        counter: counterReducer,
        auth: authReducer,
        recipes : recipesReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})