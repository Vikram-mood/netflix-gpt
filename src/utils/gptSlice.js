import {CreateSlice, createSlice} from "@reduxjs/toolkit"

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptsearchView:false,
        movieResults:null,
        movieNames:null,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptsearchView=!state.showGptsearchView;
        },
        AddGptMovieResults:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
            
        }
        
    }
})
export const{toggleGptSearchView,AddGptMovieResults} =gptSlice.actions
export default gptSlice.reducer;
