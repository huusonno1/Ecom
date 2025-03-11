// src/components/Features.tsx
import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-medium text-lg mb-2">Free Delivery</h3>
            <p className="text-sm text-gray-500">For all orders over $50, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center">
            <h3 className="font-medium text-lg mb-2">90 Days Return</h3>
            <p className="text-sm text-gray-500">If goods have problems, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center">
            <h3 className="font-medium text-lg mb-2">Secure Payment</h3>
            <p className="text-sm text-gray-500">100% secure payment, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;