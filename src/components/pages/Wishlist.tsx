import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";

interface Product {
  id: number;
  discount: string;
  imageSrc: string;
  category: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  discountedPrice: number;
}

const products: Product[] = [
  {
    id: 1,
    discount: "-25%",
    imageSrc: "/images/product-1.jpg",
    category: "Watches",
    name: "Xiaomi Mi Band 5",
    rating: 4,
    reviews: 4,
    price: 199.0,
    discountedPrice: 149.25,
  },
  // Add more products as needed
];

const WishlistComponent: React.FC = () => {
  return (
    <div className="py-12 bg-sky-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-gray-700">My wishlist</div>
          <ul className="flex items-center space-x-3">
            <li className="flex items-center space-x-1 text-gray-500">
              {/* Include your HouseIcon and CaretRightIcon components here */}
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-5 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative p-2 transition-all duration-500 bg-white border border-gray-100 rounded cursor-pointer hover:shadow-lg"
            >
              <div className="absolute left-4 top-4 bg-[#F73232] text-white rounded-r-sm text-xs font-bold px-3 py-2">
                {product.discount}
              </div>
              <div className="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full shadow -top-5 right-2 hover:bg-sky-50">
                <FaHeart className="text-red-500 w-7 h-7" />
              </div>
              <img src={product.imageSrc} className="w-full" alt="#" />
              <div className="relative px-2 py-3 space-y-1">
                <div className="text-sm text-gray-500">{product.category}</div>
                <h4 className="text-xl font-extrabold text-gray-900">
                  {product.name}
                </h4>
                <ul className="flex items-center space-x-[1px]">
                  {Array.from({ length: product.rating }).map((_, index) => (
                    <li key={index}>
                      <FaStar className="w-4 h-4 text-yellow-300" />
                    </li>
                  ))}
                  <li className="pl-2 text-sm text-gray-500">{`${product.reviews} Review(s)`}</li>
                </ul>
                <div className="flex items-end space-x-3">
                  <div className="text-lg font-bold text-[#0167F3]">
                    ${product.discountedPrice}
                  </div>
                  <div className="text-sm font-medium text-gray-500 line-through">
                    ${product.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistComponent;
