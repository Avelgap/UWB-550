'use client';

import { useState } from 'react';

export default function ProductImage() {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="relative bg-gray-50">
      {/* Main Product Image */}
      <div className="aspect-[3/4] bg-gradient-to-b from-pink-100 to-gray-100 relative overflow-hidden">
        {/* Placeholder for actual product image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-80 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
            Product Image
          </div>
        </div>
        
        {/* Heart/Favorite Button */}
        <button 
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50"
        >
          <div className={`w-6 h-6 ${isFavorited ? 'text-red-500' : 'text-gray-400'}`}>
            <svg viewBox="0 0 24 24" fill={isFavorited ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </button>

        {/* Best Seller Badge */}
        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
          Best Seller
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="flex justify-center space-x-2 py-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === 0 ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Size Guide Indicator */}
      <div className="text-center pb-4">
        <span className="text-sm text-gray-600">5'7 Model wearing size S</span>
      </div>
    </div>
  );
}