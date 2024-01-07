import NunitoSans from '@/shared/typography/NunitoSans'
import React from 'react'

const JoinOurTeam = () => {
  return (
    <section className='py-24 flex flex-col justify-center center-section items-center gap-5'>
            <h2 className='text-2xl md:text-5xl text-primary font-bold'>Current Openings</h2>
            <div className='text-lg text-center'>
                <NunitoSans>
                IndiaSpeaks is looking for talented individuals to join our team.
                </NunitoSans>
            </div>
            <a href = "https://calendly.com/gomanirajan/30min" target='_blank' rel = "noreferrer" className='text-primary underline'>
                Join our team
            </a>
        </section>
  )
}

export default JoinOurTeam