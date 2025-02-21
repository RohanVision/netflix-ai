import React from 'react'
import { useSelector } from 'react-redux'
import lang from "../utlis/languageConstant"

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
    return (
        <div className='bg-black p-40'>
            <form className='flex justify-center'>
                <input type="text" className='w-1/2 flex-4 flex-grow-0 border px-4 py-2 outline-none'
                    placeholder={lang[langKey].gptPlaceholder} />
                <button className='bg-red-500 w-1/6 rounded-sm text-white px-4 py-2 flex-2'>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
