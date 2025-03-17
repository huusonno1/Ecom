import React from "react";

const Pagination: React.FC = () => {
  return (
    <div className="my-8 flex justify-center">
      <nav className="flex items-center space-x-1">
        <a
          href="#"
          className="rounded bg-yellow-500 px-5 py-3 text-lg font-semibold text-white"
        >
          1
        </a>
        <a
          href="#"
          className="rounded bg-yellow-100 px-5 py-3 text-lg font-semibold text-gray-700 hover:bg-gray-100"
        >
          2
        </a>
        <a
          href="#"
          className="rounded bg-yellow-100 px-5 py-3 text-lg font-semibold text-gray-700 hover:bg-gray-100"
        >
          3
        </a>
        <a
          href="#"
          className="rounded bg-yellow-100 px-5 py-3 text-lg font-semibold text-gray-700 hover:bg-gray-100"
        >
          4
        </a>
        <a
          href="#"
          className="rounded bg-yellow-100 px-5 py-3 text-lg font-semibold text-gray-700 hover:bg-gray-100"
        >
          Next
        </a>
      </nav>
    </div>
  );
};

export default Pagination;
