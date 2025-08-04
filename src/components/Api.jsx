import React, { useState } from 'react'
import axios from 'axios'

export const Api = (props) => {
  const[data, setData]=useState([])
  const getData=async()=> {
      const response =await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
      setData(response.data)
  }
  return (
    <>
    <div className='flex items-center justify-center h-10'>
      <button onClick={getData} className='bg-amber-400 text-2xl w-50 rounded-2xl hover:bg-blue-500 mb-4 font-bold'>Click to get API
      </button>
    </div>
    <div className='mt-5 mb-8'>
      {data.map(function(elem,idx){
      return <div key={idx} className='text-white flex justify-between flex-wrap  bg-zinc-700 w-full p-4 mb-4 rounded-2xl hover:bg-amber-600'>
        <h1 className='text-center bg-emerald-700 w-32 h-7 rounded-2xl flex justify-center items-center'>{elem.id}-{elem.author}</h1>
        <img className='h-60 w-140'src={elem.download_url} />
      </div>
      })}
    </div>
    </>
  )
}

export default Api