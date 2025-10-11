import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";


const Card = () => {
    return (
        <>
            <div className='w-60 h-72 bg-zinc-900 rounded-[50px] px-8 py-10 relative text-white overflow-hidden'>
                <FaRegFileAlt />
                <p className='text-sm mt-5 font-semibold'> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className='footer  bottom-0 absolute w-full left-0'> 
                    <div className='flex items-center justify-between mb-3 px-8 py-3 '> 
                        <h5> .4mb </h5>
                        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                            <LuDownload size=".8em"color='#fff' />
                        </span>
                        
                    </div>
                    <div className='tag w-full py-4 bg-sky-200'> </div>
                     </div>

            </div>
        </>
    )
}

export default Card
