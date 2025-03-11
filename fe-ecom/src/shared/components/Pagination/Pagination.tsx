import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="flex justify-center my-8">
      <nav className="flex items-center space-x-1">
        <a
          href="#"
          className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded"
        >
          1
        </a>
        <a
          href="#"
          className="px-3 py-1 text-gray-700 text-sm font-medium rounded hover:bg-gray-100"
        >
          2
        </a>
        <a
          href="#"
          className="px-3 py-1 text-gray-700 text-sm font-medium rounded hover:bg-gray-100"
        >
          3
        </a>
        <a
          href="#"
          className="px-3 py-1 text-gray-700 text-sm font-medium rounded hover:bg-gray-100"
        >
          4
        </a>
        <a
          href="#"
          className="px-3 py-1 text-gray-700 text-sm font-medium rounded hover:bg-gray-100"
        >
          Next
        </a>
      </nav>
    </div>
  );
};

export default Pagination;