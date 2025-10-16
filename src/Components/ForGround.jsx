import React, { useRef } from 'react'
import Card from './Card'


function ForGround() {
  // Giving the constraints so that The drable card should not go out side of the ForGround 
  const ref = useRef(null);

  //converting Static data to state
  const [cards, setCards] = useState([
     { desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          filesize: ".9mb",
          close: false,
          tag: {isOpen: true , tagTitle: "Download Now", tagColor: "green" }
        },
         { desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          filesize: ".9mb",
          close: true,
          tag: {isOpen: true , tagTitle: "Download Now", tagColor: "sky" }
        },
         { desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          filesize: ".9mb",
          close: false,
          tag: {isOpen: false , tagTitle: "Download Now", tagColor: "red" }
        }

  ])

    return (
        <div ref= {ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/50 flex gap-10 flex-wrap p-5'>
           
           {data.map((item, idx) => 
           <Card key={idx} data = {item} reference = {ref} />
          
     )}
        </div>
    )
}

export default ForGround
