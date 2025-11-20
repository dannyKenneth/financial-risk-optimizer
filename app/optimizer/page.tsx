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
          <div className="flex gap-2 m-4 text-white">Inputs (will be made prettier later)</div> 

          <div className="flex gap-2 text-white">complexity_level int, 1-10</div>
          <div className="text-white">Represents the estimated submission complexity.</div>

          <div className="flex gap-2 text-white">clarity_score int, 1-10</div>
          <div className="text-white">Measures structure, readability, and task clarity.</div>

          <div className="flex gap-2 text-white">rubric_priority enum: low, medium, high</div>
          <div className="text-white">Weight assigned to rubric alignment.</div>

          <div className="flex gap-2 text-white">confidence_threshold float, 0.5-0.95</div>
          <div className="text-white">Minimum confidence required for score acceptance.</div>

          <div className="flex gap-2 text-white">strictness_level int, 1-5</div>
          <div className="text-white">Controls output aggressiveness (higher = harsher grading).</div>

          <div className="flex gap-2 text-white">fairness_sensitivity float, 0-1</div>
          <div className="text-white">Tunes how aggressively the optimizer checks for inter-submission consistency.</div>

          <div className="flex gap-2 text-white">fallback_enabled bool</div>
          <div className="text-white">Whether the system may switch to alternate scoring paths or models.</div>

          <div className="flex gap-2 text-white">time_priority (int, 1–10)</div>
          <div className="text-white"> Higher values prioritize speed over thorough evaluation.</div>
        </div> 
        <div className="flex gap-2 m-48">/* Template Boxes Go Here */</div>         
      </section>
    </div>
  )
}

export default Page
