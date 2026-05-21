'use client';

import { useState } from 'react';

const colors = [
  { name: 'Luminous Blue', class: 'bg-blue-400', price: '$49.99', originalPrice: '$49.99' },
  { name: 'Neutrals', class: 'bg-blue-600', price: '$49.99', originalPrice: '$49.99' },
  { name: 'Patterns', class: 'bg-gray-200', price: '$49.99', originalPrice: '$49.99' },
  { name: 'Solids', class: 'bg-red-400', price: '$39.99', originalPrice: '$49.99' },
  { name: 'Black', class: 'bg-black', price: '$39.99', originalPrice: '$49.99' },
  { name: 'Navy', class: 'bg-gray-800', price: '$39.99', originalPrice: '$49.99' },
  { name: 'Pattern', class: 'bg-teal-400', price: '$39.99', originalPrice: '$49.99' },
  { name: 'Coral', class: 'bg-orange-300', price: '$39.99', originalPrice: '$49.99' }
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '2XL', '3XL', '4XL'];

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedFit, setSelectedFit] = useState('Regular');
  const [selectedLength, setSelectedLength] = useState('7/8');

  const currentColor = colors[selectedColor];

  return (
    <div className="bg-white p-4 space-y-6">
      {/* Product Title & Rating */}
      <div>
        <h1 className="text-xl font-bold mb-2">High-Waisted Powersoft 7/8 Leggings</h1>
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex text-yellow-400">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} className="text-sm">{star}</span>
            ))}
          </div>
          <span className="text-sm text-gray-600">(1,376)</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-red-600">{currentColor.price}</span>
        <span className="text-lg text-gray-500 line-through">{currentColor.originalPrice}</span>
        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
          60% Off
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-6 border-b border-gray-200">
        {['All', 'Neutrals', 'Patterns', 'Solids'].map((tab) => (
          <button
            key={tab}
            className={`pb-2 text-sm font-medium border-b-2 ${
              tab === 'All' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Color Selection */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium">Color: {colors[selectedColor].name}</h3>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {colors.map((color, index) => (
            <div key={index} className="text-center">
              <button
                onClick={() => setSelectedColor(index)}
                className={`w-12 h-12 rounded-full ${color.class} border-2 mb-1 ${
                  selectedColor === index ? 'border-blue-600' : 'border-gray-300'
                }`}
              />
              <div className="text-xs text-gray-600">{color.price}</div>
              {color.originalPrice !== color.price && (
                <div className="text-xs text-gray-400 line-through">{color.originalPrice}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fit Selection */}
      <div>
        <h3 className="font-medium mb-2">Fit</h3>
        <div className="flex space-x-3">
          {['Regular', 'Tall', 'Petite'].map((fit) => (
            <button
              key={fit}
              onClick={() => setSelectedFit(fit)}
              className={`px-4 py-2 rounded-full border text-sm font-medium ${
                selectedFit === fit
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {fit}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-2">Best for heights 5'4-5'8</p>
      </div>

      {/* Size Selection */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Size</h3>
          <button className="text-blue-600 text-sm underline">Size Guide</button>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 rounded border text-sm font-medium ${
                selectedSize === size
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-600">
          Customers say this is true to size. Size up for a looser fit.
        </p>
      </div>

      {/* Length Selection */}
      <div>
        <h3 className="font-medium mb-2">Length</h3>
        <div className="flex space-x-3">
          {['7/8', 'Crop', 'Full'].map((length) => (
            <button
              key={length}
              onClick={() => setSelectedLength(length)}
              className={`px-4 py-2 rounded-full border text-sm font-medium ${
                selectedLength === length
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {length}
            </button>
          ))}
        </div>
      </div>

      {/* Pockets */}
      <div>
        <h3 className="font-medium mb-2">Pockets</h3>
        <div className="flex space-x-3">
          {['Pockets', 'No Pockets'].map((pocket, index) => (
            <button
              key={pocket}
              className={`px-4 py-2 rounded-full border text-sm font-medium ${
                index === 0
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {pocket}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}