'use client';

import { useState } from 'react';

export default function AddToBag() {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToBag = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-white p-4 space-y-4 border-t border-gray-200">
      {/* Payment Options */}
      <div className="text-sm text-gray-600">
        4 interest-free payments of $xx.xx with PayPal or Afterpay
      </div>

      {/* Shipping Options */}
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded">
          <div className="w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
          <div className="flex-1">
            <div className="font-medium">Free Shipping</div>
            <div className="text-sm text-gray-600">4-6 days • Gap/Banana Republic/Athleta Members Sign in</div>
          </div>
          <div className="text-sm font-medium text-green-600">In Stock</div>
        </div>

        <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded">
          <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
          <div className="flex-1">
            <div className="font-medium">In-Store Pickup</div>
            <div className="text-sm text-gray-600">Walnut Creek Crossing Store</div>
          </div>
          <div className="text-sm font-medium text-green-600">In Stock</div>
        </div>
      </div>

      {/* Add to Bag Button */}
      <button
        onClick={handleAddToBag}
        className={`w-full py-4 rounded-full font-medium text-center transition-colors ${
          isAdded
            ? 'bg-green-600 text-white'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isAdded ? '✓ Added to Bag!' : 'ADD TO BAG'}
      </button>

      {/* Shipping & Returns */}
      <div className="text-center">
        <button className="text-blue-600 underline text-sm">
          Shipping and Returns
        </button>
      </div>
    </div>
  );
}