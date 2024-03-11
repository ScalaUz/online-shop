import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";

interface Product {
  id: number;
  discountPercentage: number;
  imageUrl: string;
  category: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  discountedPrice: number;
}

const Compare: React.FC = () => {
  const products: Product[] = [
    // Add your product data here
    // Example:
    {
      id: 1,
      discountPercentage: 25,
      imageUrl: "/images/product-1.jpg",
      category: "Watches",
      name: "Xiaomi Mi Band 5",
      rating: 4.0,
      reviews: 4,
      price: 199.0,
      discountedPrice: 149.25, // 25% off
    },
    // Add more products as needed
  ];

  return (
    <div className="py-12 bg-sky-50">
      <div className="container mx-auto">
        {/* ... Your existing HTML code ... */}
        <div className="grid grid-cols-5 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative p-2 transition-all duration-500 bg-white border border-gray-100 rounded cursor-pointer hover:shadow-lg"
            >
              {product.discountPercentage > 0 && (
                <div className="absolute left-4 top-4 bg-[#F73232] text-white rounded-r-sm text-xs font-bold px-3 py-2">
                  -{product.discountPercentage}%
                </div>
              )}
              <div className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer right-4 top-4 hover:bg-sky-50">
                <FaHeart className="w-6 h-6 text-red-500" />
              </div>
              <img
                src={product.imageUrl}
                className="w-full"
                alt={`Product-${product.id}`}
              />
              <div className="px-2 py-3 space-y-1">
                <div className="text-sm text-gray-500">{product.category}</div>
                <h4 className="text-xl font-extrabold text-gray-900">
                  {product.name}
                </h4>
                <ul className="flex items-center space-x-[1px]">
                  {Array.from(
                    { length: Math.round(product.rating) },
                    (_, index) => (
                      <li key={index}>
                        <FaStar className="w-4 h-4 text-yellow-300" />
                      </li>
                    )
                  )}
                  <li className="pl-2 text-sm text-gray-500">
                    {product.reviews} Review(s)
                  </li>
                </ul>
                <div className="flex items-end space-x-3">
                  <div className="text-lg font-bold text-[#0167F3]">
                    ${product.discountedPrice.toFixed(2)}
                  </div>
                  {product.discountPercentage > 0 && (
                    <div className="text-sm font-medium text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compare;
