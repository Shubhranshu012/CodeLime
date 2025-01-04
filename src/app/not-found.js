import Image from 'next/image'
import React from 'react'

export default function not_found() {
  return (
    <div className='h-[70vh] w-[98vw] flex flex-row flex-wrap overflow-hidden justify-center '>
      <div className='w-[50%] flex justify-center items-center'>
        <div className='w-[60%]'>
          <Image src="/404_face.png" alt="" className='mr-[-15vw]' width={300} height={400} layout="responsive" />
        </div>
      </div>
      <div className='flex flex-col w-[50%] justify-center '>
        <p className='text-xl text-gray-400'>Page Not Found</p>
        <p className='text-gray-600'>Sorry, but we can&apos;t find the page you are looking for...</p>
      </div>
    </div>
  )
}
