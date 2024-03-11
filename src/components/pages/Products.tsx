import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

interface Product {
  id: number;
  discount: string;
  isNew: boolean;
  imageSrc: string;
  category: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
}

const ProductListComponent: React.FC = () => {
  // Sample product data, replace it with your actual data
  const products: Product[] = [
    {
      id: 1,
      discount: "-25%",
      isNew: true,
      imageSrc: "/images/product-1.jpg",
      category: "Watches",
      name: "Xiaomi Mi Band 5",
      rating: 4.0,
      reviews: 4,
      price: 199.0,
      originalPrice: 199.0,
    },
    // Add more products as needed
  ];

  return (
    <div className="py-12 bg-sky-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-7 gap-5">
          {/* ... Filter section (same as before) ... */}
          <div className="col-span-5">
            <div className="grid grid-cols-4 gap-5">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative p-2 transition-all duration-500 bg-white border border-gray-100 rounded shadow-sm cursor-pointer hover:shadow-lg"
                >
                  {product.discount && (
                    <div className="absolute left-4 top-4 bg-[#F73232] text-white rounded-r-sm text-xs font-bold px-3 py-2">
                      {product.discount}
                    </div>
                  )}
                  {product.isNew && (
                    <div className="absolute right-4 top-4 bg-[#0167F2] text-white rounded-r-sm text-xs font-bold px-3 py-2">
                      NEW
                    </div>
                  )}
                  <img src={product.imageSrc} className="w-full" alt="#" />
                  <div className="px-2 py-3 space-y-1">
                    <div className="text-sm text-gray-500">
                      {product.category}
                    </div>
                    <h4 className="text-xl font-extrabold text-gray-900">
                      {product.name}
                    </h4>
                    <ul className="flex items-center space-x-[1px]">
                      {Array.from({ length: Math.floor(product.rating) }).map(
                        (_, index) => (
                          <li key={index}>
                            <FaStar className="w-4 h-4 text-yellow-300" />
                          </li>
                        )
                      )}
                      {Array.from({
                        length: 5 - Math.floor(product.rating),
                      }).map((_, index) => (
                        <li key={index}>
                          <FaRegStar className="w-4 h-4 text-yellow-300" />
                        </li>
                      ))}
                      <li className="pl-2 text-sm text-gray-500">
                        {product.reviews} Review(s)
                      </li>
                    </ul>
                    <div className="flex items-end space-x-3">
                      <div className="text-lg font-bold text-[#0167F3]">
                        ${product.price.toFixed(2)}
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm font-medium text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListComponent;
