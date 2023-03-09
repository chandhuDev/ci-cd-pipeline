import React,{useState,useEffect} from 'react'
import ViewFile from "./ViewFile"

const SECRET_API=import.meta.env.VITE_TMDB_SECRET_API


const ImageFile = () => {
    const [movieData,setMovieData]=useState()
    const [movieURL,setMovieURL]=useState('https://image.tmdb.org/t/p/')
    const [url,setURL]=useState()
    

   async function getFilmDetails(){
   let response=await fetch(`
   https://api.themoviedb.org/3/movie/upcoming?api_key=${SECRET_API}&language=en-US&page=1&region=IN`)
   let movieDataList=await response.json()
   let movieArray=movieDataList?.results
   
   
  let movie= movieArray.slice(0,8).map((item)=>{
     const slicedDescription=item.overview?.length > 0 ? item.overview?.split(" ").slice(0,24).join(" ") :" There is no Description about this film at current time"
     const slicedTitle=item.title.length >=24 ? item.title.split(" ").slice(0,3).join(" ") : item.title
     const slicedImage=item.backdrop_path ? item.backdrop_path : item.poster_path
   return {
      title:slicedTitle,
      description:slicedDescription,
      images:slicedImage,
      }
   })
   setMovieData(movie)
  }

  function sendImageURL(movieUrl){
   setURL(movieUrl)
  }

   useEffect(()=>{
      getFilmDetails()
   },[])

  

  return (
    <>
   <div className='w-[60%] h-full bg-stone-500'>
    <div className='mx-auto py-12 bg-yellow-500 w-full h-full items-center flex justify-center flex-col gap-y-6'>
        {
          movieData?.map((movie,index)=>{
            return (
            <div className='w-[80%] h-44 rounded-lg border-1 bg-black' key={index}>
            <div className='flex border-blue-300 rounded-lg border-1 w-full h-full mx-auto bg-green-700 shadow-lg duration-500 ease-out delay-100 justify-end cursor-pointer relative' onClick={()=>sendImageURL(movie.images)}>
             <div className='w-[50%] h-full border-black rounded-md rounded-tr-none rounded-br-none bg-pink-600'>
              {movieData ? <img src={`${movieURL+'original'+movie?.images}`} alt='No-Image' className='w-full h-full object-cover rounded-md rounded-tr-none rounded-br-none duration-500 ease-out'/> : 
              (
              <div className="animate-spin rounded-full h-16 w-16 border-t-1 border-b-1 border-purple-700">
              </div>
              )
              } 
              </div>
              <div className='w-2/4 h-full flex rounded-lg  bg-yellow-200 rounded-tl-none rounded-bl-none flex-col px-2 py-1'>
               <h2 className='text-2xl font-bold h-1/3 w-full'>{movie?.title}</h2>
               <h6 className='text-base font-serif font-semibold h-3/5 w-full'>{`${movie?.description}${`....`}`}</h6>
              </div>
            </div>
         
        </div>
            )
          })
        }
        
      </div>
    </div>
    <div className="w-[40%] h-screen bg-purple-400">
      <ViewFile  URL={movieURL} url={url}/> 
    </div>
    </>
  )
}

export default ImageFile