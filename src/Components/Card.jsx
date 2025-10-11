import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

const Card = () => {
    return (
        <>
            <div className='w-60 h-72 bg-zinc-900 rounded-[50px] px-8 py-10 relative text-white overflow-hidden'>
                <FaRegFileAlt />
                <p className='text-sm mt-5 font-semibold'> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className='footer bg-sky-200 bottom-0 absolute w-full h-10 left-0'> Footer </div>
            </div>
        </>
    )
}

export default Card
