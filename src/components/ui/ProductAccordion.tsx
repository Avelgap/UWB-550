'use client';

import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left font-medium hover:bg-gray-50"
      >
        <span>{title}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-gray-700 space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductAccordion() {
  return (
    <div className="bg-white">
      <AccordionItem title="Product details" defaultOpen={true}>
        <p className="mb-3">
          Featuring StudioSmooth. Buttery soft and breathable, 
          with a barely-there feel.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-sm">Elasticized waistband</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-sm">Breathable</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-sm">Go-dry wicks moisture</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-sm">Back pockets</span>
          </div>
        </div>

        <p className="text-xs text-gray-600">
          Product #463878 Low label info
        </p>

        <div className="mt-4 p-4 bg-gray-50 rounded">
          <div className="flex items-start space-x-3">
            <div className="w-16 h-20 bg-gray-300 rounded"></div>
            <div className="flex-1">
              <h4 className="font-medium mb-1">Large, angled pockets</h4>
              <p className="text-sm text-gray-600 mb-2">
                that fit your phone.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-red-400 rounded"></div>
                <span className="text-sm">Contoured waistband with great hold and no pinching</span>
              </div>
            </div>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem title="Materials & care">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="font-medium">75% polyester</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-medium">25% elastane</span>
          </div>
          <div className="text-sm text-gray-600">Imported</div>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5">🌡️</div>
              <span className="text-sm">Machine wash cold</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5">🚫</div>
              <span className="text-sm">Do not bleach</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5">🌡️</div>
              <span className="text-sm">Tumble dry low</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5">🚫</div>
              <span className="text-sm">Do not iron</span>
            </div>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem title="Fit & sizing">
        <div className="space-y-3">
          <div>
            <span className="font-medium">Hits mid-calf</span>
          </div>
          <div>
            <span className="font-medium">Fitted through hip</span>
          </div>
          <div>
            <span className="font-medium">28" inseam</span>
          </div>
          <div>
            <span className="font-medium">Fitted through thigh</span>
          </div>
          <div>
            <span className="font-medium">Fitted through button</span>
          </div>
        </div>
      </AccordionItem>

      {/* Review Summary */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex text-yellow-400">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} className="text-lg">{star}</span>
            ))}
          </div>
          <span className="font-bold">AI Review Summary</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-medium mb-1">High-Waisted</div>
            <div className="text-gray-600">Powersoft 7/8 P...</div>
          </div>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}