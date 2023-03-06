import ImageFile from "../src/components/ImageFile"
import ViewFile from "../src/components/ViewFile"


function App() {
  return (
    <>
     <div className="w-full h-screen justify-center items-center flex">
         <div className="w-[60%] h-screen bg-stone-500">
           <ImageFile />
         </div>
         <div className="w-[40%] h-screen bg-purple-400">
           <ViewFile /> 
         </div>
         
     </div>
    </>
  )
}

export default App
