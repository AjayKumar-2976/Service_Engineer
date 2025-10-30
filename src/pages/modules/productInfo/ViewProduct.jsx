import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header2 from "../../../components/ServiceEngineer/header/Header2";

import sampleImage from "../../../assets/sample img.jpg";


const ViewProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  console.log("ViewProduct component rendered");
  console.log("Location:", location);
  console.log("Product data:", product);

  // Always show something, even if no product
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="px-6 pt-4 bg-white">
        <Header2 />
      </div>

      {/* Main Content */}
      <div>
        {!product ? (
          // No product data case
          <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-3">No product data found</h2>
            <p className="text-gray-600 mb-4">Please go back and select a product to view.</p>
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Go Back
            </button>
          </div>
        ) : (
          // Product data exists
          <div className="bg-white p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Product Image Section */}
              <div className="lg:w-1/3">
                <div className="border border-gray-200 shadow-md rounded-lg p-6 bg-white">
                  <img
                    src={product.image || "/Image1.png"}
                    alt={product.product || "Product"}
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
                    }}
                  />
                </div>
              </div>

              {/* Product Details Section */}
              <div className="lg:w-2/3">
                <h3 className="text-xl font-medium text-gray-900 mb-3 leading-relaxed">
                  {product.product || "Prefilter RO Service Kit Pre-filter Housing Bowl + 2 Pcs. Spun Filter + SS Inlet Ball Valveeflon 1/4\" + 3 Meter RO Pipe + 2 Ro Tap + 1/4\" Connector For Water Purifier, Solid Filter Cartridge"}
                </h3>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#7EC1B1] text-xl font-medium">
                    {product.price || "₹899.00"}
                  </span>
                  <span className="text-[#263138] text-base flex items-center">
                    • Warranty:
                    <span className="text-[#3A953A] ml-1">
                      {product.warranty || "NA"}
                    </span>
                  </span>

                </div>

                <div className="mb-4">
                  <h4 className="text-base font-semibold text-gray-900 mb-3">
                    Description
                  </h4>

                  <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Lorem ipsum dolor sit amet consectetur. Netus bibendum duis lorem ullamcorper id. Amet mattis eu fringilla nibh interdum. Tempus turpis enim blandit eget viverra nulla. Vulputate nisi dignissim ipsum ornare non ullamcorper vitae leo dictum a sollicitudin quisque. Varius sed maecenas donec lobortis eu ornare arcu fermentum. Aliquam maecenas non neque accumsan tristique turpis. Commodo facilisis nunc in scelerisque aenean dolor felis in odio. Non massa lacus auctor sit cursus mus egestas. Purus sem sapien adipiscing nibh felis enim.</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Pharetra sit in risus felis dictum enim suspendisse sodales. Lobortis aliquam morbi tortor aliquet pretium eu. Porta dapibus tristique sit fringilla ut eleifend. Condimentum feugiat et massa odio sit. Odio imperdiet dignissim posuere est quis ornare dui amet. Facilisis gravida morbi sed porttitor a amet tempor.</span>
                    </li>
                    <li className="flex">
                      <span className="mr-2">•</span>
                      <span>Eget sed ultrices mauris aliquam sed senectus quam sed imperdiet. Arcu enim est facilisis consectetur. Facilisis.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProduct;