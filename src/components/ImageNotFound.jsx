import React from 'react'
import starNotFound from "../assets/star-wars-not.jpg"

const ImageNotFound = ({title}) => {
  return (
    <div className="container_img_not rounded-lg mt-3 flex items-center justify-center">
      <div className="bg-slate-950 bg-opacity-75 w-[100%] text-center py-6">
        <span className="text-red-500 font-bold text-2xl uppercase">Image { title } Not Found</span>
      </div>
    </div>
  )
}

export default ImageNotFound
