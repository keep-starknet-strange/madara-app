import { Iheader } from '@/types'
import React from 'react'

function Header({title, blocknumber}:Iheader) {
  return (
    <section>
        <div className='flex justify-between border-b border-[#2C2E31] items-center p-8'>
            <h1 className='font-semibold font-extrabold leading-8 text-medium '>{title}</h1>
            <p className='text-[1.125rem] leading-[1.3rem]'><span className='text-[#9CA3AF]'>Latest block</span> <span>{blocknumber}</span></p>
        </div>
    </section>
  )
}

export default Header