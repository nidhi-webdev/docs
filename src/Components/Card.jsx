import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";
import { motion, scale } from "motion/react"
import { MdDelete } from "react-icons/md";




const Card = ({ data, reference, onDelete }) => {
    

    // Color mapping 
    const getTagColor = (color) => {
        const colorMap = {
            green: 'bg-green-600',
            sky: 'bg-sky-600', 
            red: 'bg-red-600',
            blue: 'bg-blue-600',
            yellow: 'bg-yellow-600',
            purple: 'bg-purple-600'
        }
        return colorMap[color] || 'bg-gray-600'
    }

    return (

        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.1}  className='w-60 h-72 bg-zinc-900 rounded-[45px] px-8 py-10 relative text-white overflow-hidden'>
             <button 
                onClick={onDelete}
                className='absolute top-3 right-5  text-white hover:text-red-600 z-10'
            >  
                <MdDelete size="1.2em" />
            </button>

            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold'> {data.desc} </p>
            <div className='footer  bottom-0 absolute w-full left-0'>
                <div className='flex items-center justify-between mb-3 px-8 py-3 '>
                    <h5> {data.filesize} </h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoMdCloseCircle /> : <LuDownload size=".8em" color='#fff' />}
                    </span>

                </div>
                {data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${getTagColor(data.tag.tagColor)} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'> {data.tag.tagTitle} </h3>
                    </div>
                ) }

            </div>
        </motion.div>

    )
}

export default Card
