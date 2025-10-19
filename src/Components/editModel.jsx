import React from 'react'
import Card from './Card'

const EditModal = ({isOpen, cardData, onClose}) => {

   if(!isOpen) return null

  return (
    <div>
    <div className='bg-white rounded-lg p-6 w-96'> 
<h2> Edit Card </h2>
    </div>
    </div>
  )
}

export default EditModal

