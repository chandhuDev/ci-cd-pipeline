import React,{useState,useEffect} from 'react'

const ImageFile = () => {
    const [movieData,setMovieData]=useState()

   async function getFilmDetails(){
   let response=await fetch(`
   https://api.themoviedb.org/3/movie/upcoming?api_key=1f5086bec29ee6ee4a7f31e2eee9d13e&language=en-US&page=1&region=IN`)
   let movieDataList=await response.json()
   let movieArray=movieDataList?.results
   console.log(movieArray)
   movieArray.map((item)=>{
    setMovieData({
      title:item.title,
      description:item.overview,
      images:[item.poster_path,item.backdrop_path]
    })
   })
   console.log(movieData)

   }

   useEffect(()=>{
      getFilmDetails()
   },[])

  return (
    <>
      <div className='mx-auto py-20 bg-yellow-500 w-full h-screen flex justify-center gap-y-8'>
        <div className='w-[75%] h-32 rounded-lg border-1 bg-black'>
        <div className='flex border-blue-300 rounded-lg border-1 w-full h-full mx-auto bg-green-700 shadow-lg hover:-translate-x-2 hover:-translate-y-2 duration-500 ease-out delay-100 justify-end cursor-pointer relative'>
          <div className='w-2/4 h-full flex rounded-lg bg-yellow-200 rounded-tl-none rounded-bl-none flex-col px-2 py-1'>
               <h2 className='text-3xl font-bold h-1/3 w-full'>cjidjsifmffdofksodf</h2>
               <h6 className='text-base font-serif font-thin h-3/5 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor voluptate dolores illo ex deserunt. Odio?</h6>
          </div>
        </div>
        <div className='absolute w-[20%] h-36 border-2 border-black rounded-md top-14 left-32 bg-pink-600'>
        </div>
        </div>
      </div>
    </>
  )
}

export default ImageFile