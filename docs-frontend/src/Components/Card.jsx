import React from 'react'
import PropTypes from 'prop-types'
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "motion/react"  // Removed unused 'scale' import
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { FaCloudUploadAlt, FaCloudDownloadAlt } from "react-icons/fa";
import { useRef } from 'react';

const Card = ({ data = {}, reference, onDelete, onEdit, onFileUpload }) => {
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

    const tag = data.tag || {}

    const fileInputRef = useRef(null)

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }

    }

    const handleFileChange = (e) => {
     const files = Array.from(e.target.files) 
     if(onFileUpload) {
        onFileUpload(files, data)
     }
    }

    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.1} className='w-60 h-72 bg-zinc-900 rounded-[45px] px-8 py-10 relative text-white overflow-hidden cursor-pointer'>
            <div className='absolute top-3 flex gap-1'>
                <button onClick={onEdit} aria-label="Edit card" className='p-2 hover:bg-white/10 rounded-full transition-all hover:scale-110 cursor-pointer'>
                    <TiEdit size="1.1em" className='text-blue-400' />
                </button>

                <button onClick={onDelete} aria-label="Delete card" className='p-2 hover:bg-white/10 rounded-full transition-all hover:scale-110 cursor-pointer'>
                    <MdDelete size="1.1em" className='text-red-400' />
                </button>
            </div>

            <div className='mt-4'>
                <p className='text-sm mt-5 font-semibold'> {data.desc} </p>
                <div className='mt-4'>
                    <FaRegFileAlt size="1em" className='text-gray-400' />
                </div>
                <div className='footer bottom-0 absolute w-full left-0'>
                    <div className='flex items-center justify-between mb-3 px-8 py-3'>
                        <h5> {data.filesize} </h5>
                        <span onClick={handleUploadClick}
                            className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                            {data.close ? <IoMdCloseCircle /> : <FaCloudUploadAlt size=".8em" color='#fff' />}
                        </span>
                        <input 
                           type='file' multiple ref={fileInputRef}
                           style={{ display: 'none'}}
                           onChange={handleFileChange}
                        />
                    </div>
                    {tag.isOpen && (
                        <div className={`tag w-full py-4 ${getTagColor(tag.tagColor)} flex items-center justify-center`}>
                            <FaCloudDownloadAlt size="1.5em" color='#fff' className='mr-2' />
                            <h3 className='text-sm font-semibold'> {tag.tagTitle} </h3>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

Card.propTypes = {
    data: PropTypes.shape({
        desc: PropTypes.string,
        filesize: PropTypes.string,
        close: PropTypes.bool,
        tag: PropTypes.shape({
            isOpen: PropTypes.bool,
            tagColor: PropTypes.string,
            tagTitle: PropTypes.string
        })
    }),
    reference: PropTypes.any,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onFileUpload: PropTypes.func // <-- Added prop type for file upload
}

export default Card