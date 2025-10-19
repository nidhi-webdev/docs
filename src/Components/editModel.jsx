import React from 'react'
import Card from './Card'

const EditModal = ({ isOpen, cardData, onClose }) => {

    if (!isOpen) return null

    return (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg p-6 w-96'>
                <h2 className='text-2xl font-bold mb-4 text-gray-800'> Edit Card </h2>
                <p className='text-gray-600'> Editing: </p>
            </div>
        </div>
    )
}

export default EditModal

