import {createSlice} from "@reduxjs/toolkit"

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        TrailerVideo:null,
    },
    reducers:{
        AddNowPlayigMovies:(state,action)=>{
            state.NowPlayingMovies=action.payload;
        },
        AddTrailer:(state,action)=>{
            state.TrailerVideo=action.payload;
        }
    }

})

export const {AddNowPlayigMovies,AddTrailer}=movieSlice.actions;
export default movieSlice.reducer;