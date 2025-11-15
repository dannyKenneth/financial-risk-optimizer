import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main>
      <div className='max-w-screen h-20 mx-auto border-white opacity-25 border-b-[0.25px]'>
      </div>
        <div className="container max-w-screen text-white min-h-screen flex flex-col pl-80 pt-35">
          <h1 className="text-3xl font-bold">Risk Optimizer</h1>
          <h3 className='pt-3 font-normal opacity-50'>The One Stop Solution for Risk<br / >and Portfolio Management</h3>
          <div className="flex h-5 pt-8">
            <Button size="lg" className="mr-4 text-black-100 font-semibold"><Link href="/optimizer">Get Started</Link></Button>
            <Button variant="outline" size="lg" className='border-0.5 border-white'>Learn More</Button>
          </div>
        </div>
    </main>
  )
}

export default Page
