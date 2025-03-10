

import React from 'react'
import { useState , useEffect} from 'react'

const Homecard = () => {
  const [data , setData] = useState([]);
  const [Loading , setLoading] = useState(true);
  
   useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=>response.json())
    .then((json)=>{
      // console.log(json)
      const updateData = json.slice(0,10).map((item=>({
        id : item.id,
        title : item.title,
        description : item.description.slice(0,100)+"...",
        image : item.image,
        
      })))
      setData(updateData);
      setLoading(false)
    })
    .catch((error)=>console.error("Error in fetchhing the data from api", error));
  })

  if(Loading){
    return <h1 className='text-center text-xl'>Loading....</h1>
  }
  return (
    <>
    <div className='pl-[150px] pr-[150px] pt-4 pb-4  w-full bg-zinc-300 '>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-2'>
        {data.map((item)=> (
          <div key={item.id} className='bg-white shadow-lg rounded-lg p-4'>
            <div className='w-full h-[50%]'>
              <img  src={item.image} alt="Random" className='w-full h-60  object-center rounded-md' />
            </div>
            <div className='mt-14'>
            <h1 className='text-xl text-[#87b12d] font-bold'>{item.title}</h1>
            <p>{item.description}</p>
            <div className='flex justify-between mt-2'>
              <button className='border border-black p-1 rounded'>ghost</button>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
    </>
  )
}

export default Homecard