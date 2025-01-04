import React from 'react'

export default function not_found() {
  return (
    <div className='h-[70vh] w-[98vw] flex flex-row flex-wrap overflow-hidden justify-center '>
        <div className='w-[50%] flex justify-center items-center'>
            <img src="404_face.png" alt="" className='w-[60%] mr-[-15vw]'/>
        </div>
        <div className='flex flex-col w-[50%] justify-center '>
            <p className='text-xl text-gray-400'>Page Not Found</p>
            <p className='text-gray-600'>Sorry, but we can't find the page you are looking for...</p>
        </div>
    </div>
  )
}
