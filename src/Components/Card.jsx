import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

const Card = () => {
    return (
        <>
            <div className='w-60 h-72 bg-sky-200 rounded-2xl p-5 relative'>
                <FaRegFileAlt />
                <p className='text-sm mt-5 font-semibold'> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className=''> Footer </div>
            </div>
        </>
    )
}

export default Card
