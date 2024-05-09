import React from 'react'
import lang from "../utils/languageConstants"
import { useSelector } from 'react-redux'
const GptSearchBar = () => {

    const langKey=useSelector(store=>store.config.lang);
    // console.log(langKey);
    return (
        <div className='pt-[8%] justify-center flex'>
        
            <form className=' bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
                <input  className="p-2 m-2 col-span-10" 
                type="text" 
                placeholder={lang[langKey].gptSearchPlaceholder}>     
                </input>
                <button  className='bg-red-700 text-white py-1 px-4 col-span-2'>
                {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}
export default GptSearchBar;