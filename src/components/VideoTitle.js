import React from 'react'

const VideoTitle = ({title,overview}) => {

    return (
        <div className='w-screen aspect-video px-6 md:px-16 absolute text-white pt-[25%] bg-gradient-to-r from-black'>
            <h1 className='text-2xl font-extrabold md:text-3xl ' >{title}</h1>
            <p className=' hidden md:inline-block w-1/2 text-lg '>{overview}</p>
            <div className='my-2 md:my-1'>
                <button className='bg-white  rounded-md px-2 py-1 mr-2 text-black hover:opacity-80' >⏯️ Play</button>
                <button className=' hidden md:inline-block bg-white   rounded-md px-2 py-1 text-black hover:opacity-80'> More</button>
            </div>


        </div>
    )
}
export default VideoTitle;
