import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondayContainer from './SecondayContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptSearch from './GptSearch';
import {useSelector} from "react-redux"
import { Outlet } from 'react-router-dom';

const Browse = () => {

       
    const {showGptsearchView}=useSelector(store=>store.gpt);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();

    return (
        <div>
            
            <Header />
            {showGptsearchView? <GptSearch /> :
            <> 
            <MainContainer />
            <SecondayContainer />
           
            </>}
            
           
        </div>
    )
}
export default Browse;
