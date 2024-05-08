import {createSlice} from "@reduxjs/toolkit"

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        TrailerVideo:null,
        PopularMovies:null,
        TopRatedMovies:null,
        UpComingMovies:null,
    },
    reducers:{
        AddNowPlayigMovies:(state,action)=>{
            state.NowPlayingMovies=action.payload;
        },
        AddPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        AddTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
        AddUpcomingMovies:(state,action)=>{
            state.UpComingMovies=action.payload;
        },
        AddTrailer:(state,action)=>{
            state.TrailerVideo=action.payload;
        }
    }

})

export const {AddNowPlayigMovies,AddTrailer,AddPopularMovies,AddTopRatedMovies,AddUpcomingMovies}=movieSlice.actions;
export default movieSlice.reducer;