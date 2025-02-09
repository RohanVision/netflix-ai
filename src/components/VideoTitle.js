import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-auto aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-t from-black'>
            <h1 className='font-bold text-3xl pb-2'>{title}</h1>
            <p className='text-lg w-1/3'>{overview}</p>
            <div className='my-4'>
                <button className='bg-white hover:bg-gray-100 text-black rounded-md py-4 px-12 font-semibold text-lg'>▶️ Play</button>
                <button className='bg-gray-500 text-black rounded-md py-4 px-12 font-semibold text-lg ml-4'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
