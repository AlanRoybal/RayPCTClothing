import React from 'react'
import insignia from '../assets/insignia.png'

const Links = () => {
  return (
    <div>
        <hr className='mx-8'/>
        <div className="h-1rem relative flex justify-between px-8 font-inter pb-3 pt-8 text-gray-500 text-xs">
            <img src={insignia} alt="phichitheta insignia img" className="object-scale-down h-40 w-40" />
            <div className='space-y-4'>
                <p className='w-60 p-2 hover:bg-black hover:text-white transition-colors cursor-pointer'>ABOUT</p>
                <p className='w-60 p-2 hover:bg-black hover:text-white transition-colors cursor-pointer'>CONTACT</p>
                <p className='w-60 p-2 hover:bg-black hover:text-white transition-colors cursor-pointer'>FAQS</p>
            </div>
            <div className='space-y-4'>
                <p className='w-60 p-2 hover:bg-black hover:text-white transition-colors cursor-pointer'>SHIPPING</p>
                <p className='w-60 p-2 hover:bg-black hover:text-white transition-colors cursor-pointer'>RETURNS/EXCHANGES</p>
                <p className='w-60 p-2 hover:bg-black hover:text-white transition-colors cursor-pointer'>RETURNS PORTAL</p>
                <p className='w-60 p-2 hover:bg-black hover:text-white transition-colors cursor-pointer'>TERMS AND CONDITIONS</p>
                <p className='w-60 p-2 hover:bg-black hover:text-white transition-colors cursor-pointer'>PRIVACY POLICY</p>
            </div>
        </div>
    </div>
  )
}

export default Links