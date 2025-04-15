import React from 'react'
import backdrop from '../assets/backdrop.png'
import logo from '../assets/logo.png'

const Backdrop = () => {
    return (
      <div className="relative w-full pt-4 px-4 pb-4 box-border font-inter">
        <div className="relative w-full h-[calc(100vh-7rem)] overflow-hidden">
          <img
            src={backdrop}
            alt="phichitheta theme img"
            className="w-full h-full object-cover object-top"
          />
          <img
            src={logo}
            alt="phichitheta logo img"
            className="absolute top-1/2 left-1/2 w-1/6 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="absolute bottom-8 right-4 text-white transform margin-right-0 px-16 py-8 text-xs underline">
            <p className='w-30 p-1 hover:bg-black hover:text-white transition-colors cursor-pointer'>SHOP ALL</p><p className='w-30 p-1 hover:bg-black hover:text-white transition-colors cursor-pointer'>LATEST DROP</p>
          </div>
        </div>
      </div>
    );
  };

export default Backdrop