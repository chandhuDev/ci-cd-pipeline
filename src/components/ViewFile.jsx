import React,{useState} from 'react'

const ViewFile = ({URL,url}) => {
  const [count,setCount]=useState(0)

  const urlImage=url ? url : '/vdntPLmMipCkHHDDAh2kZ2gCEas.jpg'

  function decreaseCount(e){
    setCount((count)=>{
     return  (
      count===0?0:count-1
      )
    })
  }
  function increaseCount(e){
    setCount((count)=>
    {
      return  (
       count===12? alert('You cannot book more than 12 tickets at a time'):count+1
       )
     }
    )
  }

  return (
    <>
    <div className='flex justify-center items-center w-full h-full'>
        <div className='flex w-[80%] h-3/5 bg-amber-100 rounded-lg shadow-xl  cursor-pointer justify-center items-center flex-col'>
            <div className='w-full h-4/5 rounded-lg rounded-bl-none rounded-br-none border-b-2 border-pink-400 bg-orange-400'>
            <img src={`${URL+'original'}${urlImage}`} alt='No-Image' className='w-full h-full object-cover rounded-md duration-200 ease-in-out'/>
            </div>
            <div className='w-full h-1/2 flex gap-y-2 justify-center items-center p-4 rounded-md bg-slate-400'>
                  <div className='bg-stone-500 w-full h-full flex flex-col items-center justify-between'>
                     <div className=' flex flex-row px-12 mt-5 items-center  w-full h-20 rounded-md'>
                       <button className='py-3 px-8 text-5xl grow-0 font-bold bg-indigo-600 text-center' onClick={decreaseCount}> - </button>
                       <p className='border-1 rounded-lg grow px-4 py-6 text-3xl font-bold bg-yellow-400 text-center'> {count} </p>
                       <button className='py-3 px-8 text-4xl grow-0 font-bold bg-indigo-600 text-center' onClick={increaseCount}> + </button>
                     </div>
                     <div className='bg-black w-4/5 h-12 rounded-lg my-4'>
                     <button className='text-2xl font-medium bg-red-400 w-full h-full rounded-lg  shadow-lg hover:-translate-x-1 hover:translate-y-1 duration-500 ease-in delay-100  cursor-pointer'>Checkout</button>
                     </div>
                     
                  </div>     
            </div>
        </div>
    </div>
    </>
      
    
  )
}

export default ViewFile
