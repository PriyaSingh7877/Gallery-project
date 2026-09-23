import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

const [userData, setUserData] = useState([]);

const [index, setIndex] = useState(1)

   const getData = async ()=>{
   const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21    `)

   setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading.....</h3>

 if(userData.length>0){
  printUserData = userData.map(function(elem,idx){


    return <div key={idx}>
      <a href={elem.url} target='_blank'>
      <div className='h-40 w-44 overflow-hidden bg-white rounded-2xl'>
      <img className=' object-cover w-full h-full' src={elem.download_url} alt=''/>
    </div>
    <h2 className='font-bold '>{elem.author }</h2>
    </a>
    </div>
  })
 }


  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      
      <div className=' flex flex-wrap gap-4'>
     {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button onClick={()=>{
       if (index > 1){ setIndex(index-1)}
       setUserData([])
        }} className='bg-amber-500 active:scale-95 cursor-pointer text-black px-4 py2 font-bold '>Back</button>
       <h4>page{index}</h4>
        <button onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }} className='bg-amber-500 active:scale-95 cursor-pointer text-black px-4 py2 font-bold'> next</button>
      </div>
    </div>
  )
}

export default App
