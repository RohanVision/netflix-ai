import React from 'react'

const GptSearchBar = () => {
    return (
        <div className='bg-black p-40'>
            <form className='flex justify-center'>
                <input type="text" className='w-1/3 flex-4 flex-grow-0 border px-4 py-2 outline-none' placeholder='What would you like to watch today?' />
                <button className='bg-red-500 rounded-sm text-white px-4 py-2 flex-2'>Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar
