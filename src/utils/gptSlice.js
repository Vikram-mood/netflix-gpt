import {CreateSlice, createSlice} from "@reduxjs/toolkit"

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptsearchView:false,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptsearchView=!state.showGptsearchView;
        },
        
    }
})
export const{toggleGptSearchView} =gptSlice.actions
export default gptSlice.reducer;
