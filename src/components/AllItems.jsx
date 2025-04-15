import React from 'react';

const AllItems = ({ item }) => {
  const { image, title, price, inStock } = item;
  
  return (
    <div className='hover:bg-black hover:text-white transition-colors pb-2 cursor-pointer'>
        <div className="bg-[#f4f4f4] justify-center items-center flex">
        <   img src={image} alt={title} className="object-cover" />
        </div>
        <div className="text-center pt-4 font-inter text-xs">
            <h3 className="pb-1">{title}</h3>
            <div className='flex justify-center pb-2'>
                <hr className='h-[2px] w-4 bg-black'/>
            </div>
            {inStock ? (
                <p>${price.toFixed(2)} USD</p>
            ) : (
                <p>OUT OF STOCK</p>
            )}
        </div>
    </ div>
  );
};

export default AllItems;