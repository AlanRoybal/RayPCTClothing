import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InfoCard = ({ title, price, inStock }) => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [expandedSection, setExpandedSection] = useState(null);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="max-w-md mx-auto p-4 font-inter">
      <button
        onClick={() => navigate("/page2")}
        className="absolute top-4 right-2 z-10 text-xs bg-white border border-black px-3 py-1 rounded hover:bg-black hover:text-white transition"
      >
        ← Back
      </button>
      <div className="mb-4">
        <h2 className="text-sm uppercase tracking-wider">{title}</h2>
        <p className="mt-1">${price.toFixed(2)} USD</p>
      </div>

      <div className="mb-6">
        <p className="text-xs uppercase mb-2">SIZE</p>
        <div className="flex gap-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className={`w-10 h-10 flex items-center justify-center border ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <p className="text-xs uppercase">
            {inStock ? "IN STOCK" : "OUT OF STOCK"}
          </p>
          {inStock && (
            <svg
              className="w-4 h-4 ml-1 text-green-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <p className="text-xs text-gray-500">SHIPS WITHIN 2-3 WORKING DAYS</p>
      </div>

      <button className="w-full bg-black text-white py-3 uppercase font-medium tracking-wider mb-6">
        Add to Cart
      </button>

      <div className="text-xs space-y-2 mb-6">
        <div className="flex items-center">
          <span className="mr-2">•</span>
          <p>Slightly Cropped & Boxy Fit</p>
        </div>
        <div className="flex items-center">
          <span className="mr-2">•</span>
          <p>275 GSM 100% Cotton</p>
        </div>
        <div className="flex items-center">
          <span className="mr-2">•</span>
          <p>Ethically Made in Portugal</p>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4">
        <button
          className="flex justify-between items-center w-full text-sm uppercase"
          onClick={() => toggleSection("taxes")}
        >
          <span>Import taxes, shipping & returns</span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expandedSection === "taxes" ? "max-h-40 mt-2" : "max-h-0"
          }`}
        >
          <p className="text-sm">
            Information about taxes, shipping and returns would appear here.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4">
        <button
          className="flex justify-between items-center w-full text-sm uppercase"
          onClick={() => toggleSection("size")}
        >
          <span>Size guide</span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expandedSection === "size" ? "max-h-40 mt-2" : "max-h-0"
          }`}
        >
          <p className="text-sm">Size guide information would appear here.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
