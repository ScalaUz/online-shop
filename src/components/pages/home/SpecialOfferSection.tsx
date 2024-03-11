import React from "react";

// Example of a Product component with TypeScript typings
interface ProductProps {
  imageSrc: string;
  category: string;
  title: string;
  rating: number;
  price: number;
  discountedPrice: number;
}

const Product: React.FC<ProductProps> = ({
  imageSrc,
  category,
  title,
  rating,
  price,
  discountedPrice,
}) => {
  return (
    <div className="relative p-2 transition-all duration-500 bg-white border border-gray-100 rounded cursor-pointer hover:shadow-lg">
      <img src={imageSrc} className="w-full" alt={title} />
      <div className="px-2 py-3 space-y-1">
        <div className="text-sm text-gray-500">{category}</div>
        <h4 className="text-xl font-extrabold text-gray-900">{title}</h4>
        <ul className="flex items-center space-x-[1px]">
          {Array.from({ length: rating }, (_, index) => (
            <li key={index}>
              {/* Replace with your actual star icon component */}
              <span>{"\u2605"}</span>
            </li>
          ))}
          {Array.from({ length: 5 - rating }, (_, index) => (
            <li key={`empty-${index}`}>
              {/* Replace with your actual empty star icon component */}
              <span>{"\u2606"}</span>
            </li>
          ))}
          <li className="pl-2 text-sm text-gray-500">{`${rating}.0 Review(s)`}</li>
        </ul>
        <div className="flex items-end space-x-3">
          <div className="text-lg font-bold text-[#0167F3]">{`$${price.toFixed(
            2
          )}`}</div>
          <div className="text-sm font-medium text-gray-500 line-through">{`$${discountedPrice.toFixed(
            2
          )}`}</div>
        </div>
      </div>
    </div>
  );
};

interface SpecialOfferProps {
  // Add any additional props if needed
}

const SpecialOffer: React.FC<SpecialOfferProps> = () => {
  return (
    <section className="py-12 bg-sky-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-10">
          {/* Title and description */}
        </div>
        <div className="grid grid-cols-6 gap-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <Product
              key={index}
              imageSrc={`/images/product-${index + 1}.jpg`}
              category="Watches"
              title="Xiaomi Mi Band 5"
              rating={4.0}
              price={199.0}
              discountedPrice={199.0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
