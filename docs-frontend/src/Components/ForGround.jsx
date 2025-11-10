import React, { useRef, useState } from 'react'
import Card from './Card'
import { nanoid } from 'nanoid'
import EditModal from './editModel';
import { useEffect } from 'react';




function ForGround({ username = ' ' }) {
    // Giving the constraints so that The drable card should not go out side of the ForGround 
    const ref = useRef(null);

    //converting Static data to state
    const initialCards = [
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
    ]

    const [cards, setCards] = useState(() => {
        try {
            const raw = localStorage.getItem('cards')
            return raw ? JSON.parse(raw) : initialCards
        } catch (e) {
            console.warn('Failed to parse stored cards, e')
            return initialCards
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem('cards', JSON.stringify(cards))
        } catch (e) {
            console.warn('Falied to save cards to localStorage', e)
        }

    }, [cards])





    // Adding card Functionality 
    const addCard = () => {
        const newCard = {
            id: nanoid(),
            desc: " New Documents added",
            filesize: "1.9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "DownLoad Now", tagColor: "red" }
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
        console.log('updateCard called with:', id, updatedData)

        setCards(prev =>
            prev.map(card => {
                if (card.id !== id) return card
                const updated = {
                    ...card,
                    desc: updatedData.desc ?? card.desc,
                    filesize: updatedData.filesize ?? card.filesize,
                    uploadedFiles: updatedData.uploadedFiles ?? card.uploadedFiles,

                    tag: {
                        ...card.tag,
                        tagTitle: updatedData.tagTitle ?? card.tag.tagTitle,
                        tagColor: updatedData.tagColor ?? card.tag.tagColor
                    }
                }
                console.log('Updated card:', updated)
                return updated
            })
        )
        setEditingCard(null)
        setIsModalOpen(false)

    }

    const closeModel = () => {
        setEditingCard(null)
        setIsModalOpen(false)
    }

    // Handling file upload
    const handleFileUpload = (files, cardData) => {

        if (files.length > 0) {
            const totalSize = files.reduce((acc, file) => acc + file.size, 0)
            const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2)

            // raw binary data of a file (like a PDF, image, or text file) and encoding it as a long string using the Base64 encoding scheme.
            const filePromises = files.map(file => {
                return new Promise((resolve) => {
                    const reader = new FileReader()
                    reader.onload = (e) => {
                        resolve({
                            name: file.name,
                            type: file.type,
                            size: file.size,
                            data: e.target.result
                        })
                    }
                    reader.readAsDataURL(file)
                })
            })

            // Updating the card with new file info
            Promise.all(filePromises).then(filesData => {

                updateCard(cardData.id, {
                    filesize: `${sizeInMB}mb`,
                    desc: `${files.length} file(s) uploaded: ${files[0].name}${files.length > 1 ? ' and more' : ''}`,
                    tagTitle: 'Download Now',
                    tagColor: cardData.tag?.tagColor || 'green',
                    uploadedFiles: filesData
                })

                alert(`Successfully uploaded ${files.length} file(s)!`)

            })

        }
    }

    const handleDownload = (cardData) => {

        if (!cardData.uploadedFiles || cardData.uploadedFiles.length === 0) {
            alert('No files to download!')
            return
        }

        cardData.uploadedFiles.forEach(file => {
            const link = document.createElement('a')
            link.href = file.data
            link.download = file.name
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })

        alert(`Downloaded ${cardData.uploadedFiles.length} file(s)!`)
    }

    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/50 flex gap-10 flex-wrap p-5'>
            {/* Add button */}


            <button onClick={addCard} className='bg-blue-600 text-white px-4 py2 rounded-2xl fixed top-5 right-30  hover:bg-blue-700 z-10'> + Add Cards </button>

            <div className='fixed top-5 right-7 z-10'>
                <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                        {(username || 'G')[0]?.toUpperCase()
                        }</div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-xs opacity-80">Signed in as</span>
                        <span className="text-sm font-semibold">{username || 'Guest'}</span>
                    </div>
                </div>
            </div>

            {cards.map((item, idx) =>
                <Card key={item.id}
                    data={item}
                    reference={ref}
                    onDelete={() => deleteCard(item.id)}
                    onEdit={() => editCard(item.id)}
                    onFileUpload={handleFileUpload}
                    onDownload={() => handleDownload(item)}
                />

            )}

            <EditModal
                isOpen={isModalOpen}
                cardData={editingCard}
                onClose={closeModel}
                onSave={updateCard}
            />
        </div>
    )
}

export default ForGround
