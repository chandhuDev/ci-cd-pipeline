import React from 'react'

const ViewFile = () => {
  return (
    <>
    <div className='flex justify-center items-center w-full h-screen'>
        <div className='flex w-[80%] h-3/5 bg-amber-100 rounded-lg shadow-xl  cursor-pointer justify-center items-center flex-col'>
            <div className='w-full h-4/5 rounded-lg rounded-bl-none rounded-br-none border-b-2 border-pink-400 bg-orange-400'>
              
            </div>
            <div className='w-full h-1/2 flex gap-y-2 justify-center items-center p-4 rounded-md bg-slate-400'>
                  <div className='bg-stone-500 w-full h-full flex flex-col items-center justify-between'>
                     <div className=' flex flex-row px-12 mt-5 items-center  w-full h-20 rounded-md'>
                       <button className='py-3 px-8 text-5xl grow-0 font-bold bg-indigo-600 text-center'> - </button>
                       <p className='border-1 rounded-lg grow px-4 py-6 text-3xl font-bold bg-yellow-400 text-center'> hello </p>
                       <button className='py-3 px-8 text-4xl grow-0 font-bold bg-indigo-600 text-center'> + </button>
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
