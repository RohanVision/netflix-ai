import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-36 px-12'>
            <h1 className='font-bold text-3xl pb-2'>{title}</h1>
            <p className='text-lg w-1/3'>{overview}</p>
            <div className='my-4'>
                <button className='bg-white text-black border rounded-md py-4 px-12 font-semibold text-lg'>▶️ Play</button>
                <button className='bg-gray-50 text-black border rounded-md py-4 px-12 font-semibold text-lg ml-4'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
