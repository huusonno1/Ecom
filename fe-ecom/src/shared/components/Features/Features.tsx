// src/components/Features.tsx
import React from "react";

const Features: React.FC = () => {
  return (
    <div className="bg-[#FAF4F4] py-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <h3 className="mb-2 text-3xl font-semibold">Free Delivery</h3>
            <p className="text-xl text-gray-500">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-3xl font-semibold">90 Days Return</h3>
            <p className="text-xl text-gray-500">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-3xl font-semibold">Secure Payment</h3>
            <p className="text-xl text-gray-500">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
