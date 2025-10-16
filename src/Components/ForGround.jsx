import React, { useRef, useState } from 'react'
import Card from './Card'
import { nanoid } from 'nanoid'



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

    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/50 flex gap-10 flex-wrap p-5'>
            {/* Add button */}
            <button onClick={addCard} className='bg-blue-600 text-white px-4 py2 rounded-2xl fixed top-5 right-5  hover:bg-blue-700 z-10'> + Add Cards </button>

            {cards.map((item, idx) =>
                <Card key={idx} data={item} reference={ref} />

            )}
        </div>
    )
}

export default ForGround
