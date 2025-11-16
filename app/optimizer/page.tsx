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
          <h3 className='text-white justify-center font-light'>Start by adding an asset.</h3>
          <Button size="lg" className="mt-8 text-black-100 font-semibold bg-white">Add Asset</Button>
          <div className="w-12 h-[0.25px] mt-4 bg-white"></div>
          <h2 className="text-white opacity-30 text-[14px]">OR</h2>
          <h1 className="font-semibold text-white justify-center text-[20px]">Choose a Template</h1>
        </div> 
        <div className="flex gap-2 m-48">/* Template Boxes Go Here */</div>       
      </section>
    </div>
  )
}

export default Page
