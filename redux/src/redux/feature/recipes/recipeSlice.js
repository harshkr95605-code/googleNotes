

import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async()=>{
        const res =await fetch("https://dummyjson.com/recipes");//from here recipes come from
        const data = await res.json();
        return data.recipes;
    }
);

const recipeSlice =createSlice({
    name:"recipes",
    initialState:{
        list:[],
        status:'idle',
        error: 'Error fetching recipes',

    },

    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchRecipes.pending,(state)=>{
            state.status = 'loading';
        })
        .addCase(fetchRecipes.rejected,(state,action)=>{
             state.status = 'failed';
             state.error = action.error.message;
        })
        .addCase(fetchRecipes.fulfilled,(state,action)=>{
            state.status = 'fulfilled';
            state.list = action.payload;
        })
    }
})
export default recipeSlice.reducer;