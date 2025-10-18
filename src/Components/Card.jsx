import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";
import { motion, scale } from "motion/react"
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";





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

        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.1} className='w-60 h-72 bg-zinc-900 rounded-[45px] px-8 py-10 relative text-white overflow-hidden cursor-pointer'>
            editModel
            {/* Edit Button */}
            <div className='absolute top-3  '>
                <button onClick={onEdit}
                    className='p-2 hover:bg-white/10 rounded-full transition-all hover:scale-110 cursor-pointer'>
                    <TiEdit size="1.1em" className='text-blue-400' />
                </button>

                {/* Delete Button */}
                <button
                    onClick={onDelete}
                    className='p-2 hover:bg-white/10 rounded-full transition-all hover:scale-110 cursor-pointer '>
                    <MdDelete size="1.1em" className='text-red-400' />
                </button>
            </div>

           <div className='mt-4'>
            <p className='text-sm mt-5 font-semibold'> {data.desc} </p>
             {/* File icon - better spacing */}
            <div className='mt-4'>
                <FaRegFileAlt size="1em" className='text-gray-400' />
            </div>
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
                )}

            </div>
            </div>
        </motion.div>

    )
}

export default Card
