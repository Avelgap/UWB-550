'use client';

import { useState } from 'react';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white text-xs py-1 px-4 text-center">
        Open & use a Navy|st Rewards Credit Card & get an EXTRA 30% OFF your first purchase. Apply Now
      </div>
      
      {/* Brand Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex justify-between items-center px-4 py-2 text-xs font-medium">
          <span className="text-blue-600">GAP</span>
          <span className="font-bold">OLD NAVY</span>
          <span className="text-green-600">BANANA REPUBLIC</span>
          <span className="text-gray-600">ATHLETA</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Menu Button */}
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
            </div>
          </button>

          {/* Search Icon */}
          <button className="p-2 hover:bg-gray-100 rounded">
            <div className="w-5 h-5 border-2 border-gray-600 rounded-full relative">
              <div className="absolute -bottom-1 -right-1 w-2 h-0.5 bg-gray-600 rotate-45"></div>
            </div>
          </button>

          {/* Logo */}
          <div className="flex-1 text-center">
            <h1 className="text-xl font-bold text-blue-600">OLD NAVY</h1>
          </div>

          {/* Cart Icon */}
          <button className="p-2 hover:bg-gray-100 rounded relative">
            <div className="w-5 h-5 border-2 border-gray-600 rounded-sm">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-1 border-t-2 border-l-2 border-r-2 border-gray-600 rounded-t-sm"></div>
            </div>
          </button>
        </div>

        {/* Breadcrumb */}
        <div className="px-4 pb-3 text-sm text-gray-600">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>StudioSmooth</span>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowMenu(false)}>
          <div className="bg-white w-4/5 h-full p-6" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setShowMenu(false)}
              className="float-right text-xl font-bold"
            >
              ×
            </button>
            <div className="mt-8 space-y-4">
              <div className="font-bold">WOMEN</div>
              <div className="font-bold">MEN</div>
              <div className="font-bold">GIRLS</div>
              <div className="font-bold">BOYS</div>
              <div className="font-bold">BABY</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}