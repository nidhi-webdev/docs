import React, { useRef, useState } from 'react'
import Card from './Card'
import { nanoid } from 'nanoid'
import EditModal from './editModel';


function ForGround() {
    // Giving the constraints so that The drable card should not go out side of the ForGround 
    const ref = useRef(null);

    //converting Static data to state
    const [cards, setCards] = useState([
        {
            id: nanoid(),
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            id: nanoid(),
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "sky" }
        },
        {
            id: nanoid(),
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "red" }
        }

    ])

    // Adding card Functionality 
    const addCard = () => {
        const newCard = {
            id: nanoid(),
            desc: " New Documents added",
            filesize: "1.9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "New", tagColor: "red" }
        };
        setCards([...cards, newCard])
    };

    // Delete card functinality
    const deleteCard = (id) => {
        setCards(cards.filter(card => card.id !== id))
    }
    // Using usesate for edit 
    const [editingCard, setEditingCard] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Edit card data
    const editCard = (id) => {
        //finding the card 
        const cardToEdit = cards.find(card => card.id == id)
        // setting is as the editing Card
        setEditingCard(cardToEdit)
        // Opening the model
        setIsModalOpen(true)

    }
    // save edited data 
    const updateCard = (id, updatedData) => {

    }

    const closeModel = () => {

    }

    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/50 flex gap-10 flex-wrap p-5'>
            {/* Add button */}
            <button onClick={addCard} className='bg-blue-600 text-white px-4 py2 rounded-2xl fixed top-5 right-5  hover:bg-blue-700 z-10'> + Add Cards </button>
            {/* <button onClick={deleteCard} className='bg-red-600 text-white  px-4 py2 rounded-2xl fixed  top-5 right-40 hover:bg-red-700 z-10'> - Delete card </button> */}

            {cards.map((item, idx) =>
                <Card key={item.id} data={item} reference={ref} onDelete={() => deleteCard(item.id)} onEdit={() => editCard(item.id)} />

            )}

            <EditModal
         
            />
        </div>
    )
}

export default ForGround
