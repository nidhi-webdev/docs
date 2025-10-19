import React from 'react'
import Card from './Card'

const EditModal = ({ isOpen, cardData, onClose }) => {
    console.log("from Edit Model", onClose )

    if (!isOpen) return null

    return (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg p-6 w-96'>
                <h2 className='text-2xl font-bold mb-4 text-gray-800'> Edit Card </h2>
                <p className='text-gray-600'> Editing: {cardData?.desc} </p>
                <button className=''> Save </button>
                <button className='bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-gray-600 mt-4 cursor-pointer'> Cancel </button>
            </div>
        </div>
    )
}

export default EditModal

