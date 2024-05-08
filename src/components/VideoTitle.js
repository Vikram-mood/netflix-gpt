import React from 'react'

const VideoTitle = ({title,overview}) => {

    return (
        <div className='w-screen aspect-video px-16 absolute text-white pt-[25%] bg-gradient-to-r from-black'>
            <h1 className='font-extrabold text-3xl ' >{title}</h1>
            <p className='w-1/4 text-lg '>{overview}</p>
            <div>
                <button className='bg-white  rounded-md px-2 py-1 mr-2 text-black hover:opacity-80' >⏯️ Play</button>
                <button className='bg-white   rounded-md px-2 py-1 text-black hover:opacity-80'> More</button>
            </div>


        </div>
    )
}
export default VideoTitle;
