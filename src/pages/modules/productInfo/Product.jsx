

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PreviewIcon from "../../../assets/preview1.svg";
import SearchIcon from "../../../assets/search.png";
import Header2 from '../../../components/ServiceEngineer/header/Header2';

import image1 from "/Image1.png";
import image2 from "/Image2.png";
import image3 from "/Image3.png";
import { image } from "framer-motion/client";

const products = [
  {
    id: 1,
    name: "Whole house filter with two replacement filters",
    description: "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    price: "₹899.00",
    rating: "4.8",
    image: image1,
    category: "Filters",
  },
  {
    id: 2,
    name: "3000 Gallon Replacement Water Filter",
    description: "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    price: "₹849.00",
    rating: "4.8",
    image: image2,
    category: "Filters",
  },
  {
    id: 3,
    name: "VYAIR 10” x 2.5” Water Filter Cartridge with 6 Month Warranty",
    description: "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    price: "₹799.00",
    rating: "4.8",
    image: image3,
    category: "Filters",
  },
  {
    id: 4,
    name: "Kent RO Model X",
    description: "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    price: "₹899.00",
    rating: "4.8",
    image: image1,
    category: "Ro Models",
  },
  {
    id: 5,
    name: "Replacement RO Tap",
    description: "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    price: "₹849.00",
    rating: "4.8",
    image: image2,
    category: "Spare Parts",
  },
  {
    id: 6,
    name: "VYAIR 10” Water Filter Cartridge",
    description: "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    price: "₹799.00",
    rating: "4.8",
    image: image3,
    category: "Filters",
  },
  {
    id: 7,
    name: "Another RO Model",
    description: "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    price: "₹1899.00",
    rating: "4.7",
    image: image1,
    category: "Ro Models",
  },
];

const tabs = [
  { id: 'all', name: 'All Products' },
  { id: 'ro', name: 'Ro Models' },
  { id: 'filters', name: 'Filters' },
  { id: 'parts', name: 'Spare Parts' },
];


const Product = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6); // Changed to 6 for a 3x2 grid
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const navigate = useNavigate();

  const handleRowsPerPage = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  };

  const filteredRows = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      activeTab === 'All Products' ? true : product.category === activeTab
    );

  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) setPage(newPage);
  };

  return (
    <div className="bg-white p-3 sm:p-8 font-sans min-h-screen">
      <div className="max-w-full mx-auto">
        {/* Header */}
          <Header2 />
     

        {/* Tabs */}
        <div className="flex w-fit bg-[#F5F5F5] items-center space-x-1 p-2 rounded-[20px] sm:space-x-2 mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.name)}
              className={`
                px-4 py-2 text-lg font-sm flex items-center space-x-1.5 transition-colors
                ${activeTab === tab.name
                  ? 'bg-white text-black rounded-[10px]'
                  : 'bg-transparent text-[#606060]'
                }
              `}
            >
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search Product by name or Model..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedRows.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md transition-transform h-full flex flex-col"
            >
              {/* image box */}
              <div className="bg-white rounded-md p-4 flex items-center justify-center w-full h-40 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[120px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between w-full">
                <div>
                  <h2
                    className="text-lg font-semibold text-gray-900 mb-2"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {product.name}
                  </h2>

                  <p
                    className="text-sm text-gray-600 mb-4"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {product.description}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between w-full mb-3">
                    <div className="text-lg font-bold text-gray-900">{product.price}</div>
                    <div className="text-sm bg-[#DFFFBF] text-black px-2 py-1 rounded-md font-semibold">{product.rating} ★</div>
                  </div>

                  <div className="space-y-1 items-center justify-between">
                    <div className="text-sm text-[#2F9A73] font-semibold">Best offer</div>
                    <button
                      className="bg-[#7EC1B1] text-white px-3 py-1.5 rounded-md transition"
                      onClick={() => navigate('/product/product-details', { state: { product } })}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRows.length === 0 && (
          <div className="text-center text-gray-500 my-10">
            <h2 className="text-2xl font-semibold">No Products Found</h2>
            <p>Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredRows.length > 0 && (
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4 flex-wrap font-semibold text-gray-700 text-sm">
            <span>
              Showing {Math.min((page - 1) * rowsPerPage + 1, filteredRows.length)} to {Math.min(page * rowsPerPage, filteredRows.length)} of {filteredRows.length} entries
            </span>
            <div className="flex flex-wrap gap-2 text-teal-600 justify-center">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 border border-teal-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`p-2 border rounded-lg border-teal-500 ${page === idx + 1 ? "bg-teal-500 text-white" : ""
                    } w-10 h-10 flex items-center justify-center`}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="px-4 py-2 border border-teal-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;