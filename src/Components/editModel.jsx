import { useState, useEffect } from "react"


const EditModal = ({ isOpen, cardData, onClose }) => {
    console.log("from Edit Model", cardData)

    const [desc, setDesc] = useState('')
    const [filesize, setFilesize] = useState('')
    const [tagTitle, setTagTitle] = useState('')
    const [tagColor, setTagColor] = useState('')

    useEffect(() => {
        if (isOpen && cardData) {
            setDesc(cardData.desc || '')
            setFilesize(cardData.filesize || '')
            setTagTitle(cardData.tag.tagTitle || '')
            setTagColor(cardData.tag.tagColor || '')
        }
    }, [isOpen, cardData])


    if (!isOpen) return null

    return (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
+            <div className='bg-white rounded-lg w-full max-w-lg mx-4 px-6 py-6'>
                <h2 className='text-2xl font-bold mb-4 text-gray-800'> Edit Card </h2>

                <label className="block mb-2"> Description </label>
                <input value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="px-2 py-3 border border-gray-400 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5" />

                <label className="block mb-2"> filesize </label>
                <input value={filesize}
                    onChange={(e) => setFilesize(e.target.value)}
                    className="px-2 py-3 border border-gray-400 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5"  />

                <label className="block mb-2"> Tag Title </label>
                <input value={tagTitle}
                    onChange={(e) => setTagTitle(e.target.value)}
                    className="px-2 py-3 border border-gray-400 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5" />

                <label className="block mb-2"> Tag Color </label>
                <input value={tagColor}
                    onChange={(e) => setTagColor(e.target.value)}
                    className="px-2 py-3 border border-gray-400 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5" />




                <button className='bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-700 cursor-pointer float-start'> Save </button>
                <button onClick={onClose}
                    className='bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-gray-600 mt-4 cursor-pointer float-end'> Cancel </button>
            </div>
        </div>
    )
}

export default EditModal

