import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";


const Card = () => {
    return (
        <>
            <div className='w-60 h-72 bg-zinc-900 rounded-[50px] px-8 py-10 relative text-white overflow-hidden'>
                <FaRegFileAlt />
                <p className='text-sm mt-5 font-semibold'> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className='footer  bottom-0 absolute w-full left-0 px-8 py-3'> 
                    <div className='flex items-center justify-between mb-5'> 
                        <h5> .4mb </h5>
                        <LuDownload />
                    </div>
                     </div>
            </div>
        </>
    )
}

export default Card
