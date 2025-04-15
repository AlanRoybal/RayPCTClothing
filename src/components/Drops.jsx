import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import { useNavigate } from 'react-router-dom'

const Drops = ({ jsonDataUrl }) => {
    const navigate = useNavigate()

    const goToPage2 = () => {
        navigate('/page2')
    }
    
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(jsonDataUrl);
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status}`);
                }
                const data = await response.json();
                setItems(data);
            } catch (err) {
                console.error("Error fetching items:", err);
                setError(err.message);
            }
        };

        fetchItems();
    }, [jsonDataUrl]);

    return (
        <div className='font-inter pt-10 px-3'>
            <div className='text-center pb-8'>
                <p className='text-xs pb-6'>LATEST DROP</p>
                <p className='text-sm'>THE WEST WILD</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center mb-8 gap-8 px-16">
                {items.map((item, index) => (
                    <ItemCard key={item.id || index} item={item} />
                ))}
            </div>
            
            <div className='text-center pb-8'>
                <button onClick={goToPage2} className='text-xs border-solid border-2 border-black py-2 px-8 hover:bg-black hover:text-white transition-colors'>
                    VIEW ALL
                </button>
            </div>
        </div>
    );
};

export default Drops;