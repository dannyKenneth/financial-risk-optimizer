import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className='max-w-screen h-20 mx-auto border-white opacity-25 border-b-[0.25px]'>
      </div>
      <section className="min-h-screen justify-center bg-background">
        <div className='flex flex-col items-center gap-4'>
          <h1 className=" pt-24 justify-center text-white font-bold text-[36px]">Welcome!</h1>
          <h3 className='text-white justify-center font-light'>Type out your information, and receive a risk</h3>
          <h3 className='text-white justify-center font-light'>score and optimization recomendations</h3>
          <div className="w-12 h-[0.25px] mt-4 bg-white"></div>
        </div> 
        <div className="flex gap-2 m-48">/* Template Boxes Go Here */</div>       
      </section>
    </div>
  )
}

export default Page
