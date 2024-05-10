import React, { useRef } from 'react'
import lang from "../utils/languageConstants"
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from '../utils/constant';
import { AddGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {

    const langKey=useSelector(store=>store.config.lang);
    const searchText=useRef(null);
    const dispatch=useDispatch();

    const searchMovieTmdb= async(movieName)=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
        // console.log(json);
        return json.results;
    }
    const handleGptSearch=async()=>{
        
        // const gptResults= await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: 'Say this is a test' }],
        //     model: 'gpt-3.5-turbo',
        //   });
        //   console.log(gptResults.choices);

   
            // For text-only input, use the gemini-pro model
            const API_KEY = process.env.REACT_APP_GEMINI_KEY;
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-pro"});

            const query="Act as a movie Recommandation system and suggest some movies for the query"+searchText.current.value+". only give me names of 5 moveis, comma seperated like the example given ahead. Example results: Dangal,Jersey,Adipurush,KGF,Chak de India"
            // const prompt = searchText.current.value;
            const result = await model.generateContent(query);
            const response = await result.response;
            const gptResults= response.text();
            // console.log(gptResults);
            const gptMovies=gptResults.split(",");
            // const data=searchMovieTmdb(gptMovies[0]);
            // console.log(gptMovies);

            const promiseArray=gptMovies.map((movie)=>searchMovieTmdb(movie)); // as searchMovieTmdb function is a async function , it will return promise, we need to resolve these promises.
            // console.log(promiseArray);
            const tmdbResults=await Promise.all(promiseArray)
            // console.log(tmdbResults);

            dispatch(AddGptMovieResults({movieNames:gptMovies,movieResults:tmdbResults}));




          
          

    }
   
    // console.log(langKey);
    return (
        <div className='justify-center flex pt-[50%] md:pt-[8%]'>
        
            <form 
                className=' bg-black  grid grid-cols-12 w-full md:w-1/2' 
                onSubmit={(e)=>e.preventDefault()}
            >
                <input  
                    className="p-2 m-2 col-span-9" 
                    ref={searchText}
                    type="text" 
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />     
               
                <button  
                    className='bg-red-700 text-white  px-4 m-2 py-2 col-span-3 rounded-lg'
                    onClick={handleGptSearch}
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}
export default GptSearchBar;