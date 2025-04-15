import AllItems from "./AllItems";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ItemGallery = ({ jsonDataUrl }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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
    <div className="font-inter pt-4 px-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center mb-8 gap-8 px-16">
        {items.map((item, index) => {
          const goToPage3 = () => {
            navigate("/page3", {
              state: {
                images: item.images || [item.image],
                productName: item.title,
                price: item.price,
                inStock: item.inStock,
              },
            });
          };

          return (
            <button key={item.id || index} onClick={goToPage3}>
              <AllItems item={item} />
            </button>
          );
        })}
      </div>
      <div className="text-center pb-8">
        <button className="text-xs border-solid border-2 border-black py-2 px-8 hover:bg-black hover:text-white transition-colors cursor-pointer">
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default ItemGallery;
