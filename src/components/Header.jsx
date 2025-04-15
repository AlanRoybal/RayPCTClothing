import React from 'react'
import { PiBagSimple } from "react-icons/pi";
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const goToPage1 = () => {
    navigate('/')
  }
  return (
    <div className="h-7rem relative flex items-center justify-between px-8 font-inter pb-3 pt-12">
        <div className="flex items-center justify-between text-xs"><p className='p-2 hover:bg-black hover:text-white transition-colors cursor-pointer'>LATEST</p><p className='p-2 hover:bg-black hover:text-white transition-colors cursor-pointer'>SHOP</p><p className='p-2 hover:bg-black hover:text-white transition-colors cursor-pointer'>ABOUT</p></div>
        <div onClick={goToPage1} className="cursor-pointer absolute p-4 left-1/2 transform -translate-x-1/2 text-3xl hover:bg-black hover:text-white transition-colors">PHI CHI THETA</div>
        <div className='p-2 hover:bg-black hover:text-white transition-colors cursor-pointer'><PiBagSimple /></div>
    </div>
  )
}

export default Header