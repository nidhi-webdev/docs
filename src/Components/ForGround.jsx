import React from 'react'
import Card from './Card'

function ForGround() {
    const data = [
        { desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          filesize: ".9mb",
          close: true,
          tag: {isOpen: false , tagTitle: "Download Now", tagColor: "green" }
        }
    ]
    return (
        <div className='fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/50'>
           
           {data.map((item, idx) => 
           <Card key={idx} data = {item}  />
          
     )}
        </div>
    )
}

export default ForGround
