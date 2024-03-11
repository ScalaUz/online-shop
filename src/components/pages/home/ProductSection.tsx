import { FaStar } from "react-icons/fa"; // Assuming you have the corresponding React icons library

const TrendingProducts = () => {
  return (
    <section className="py-12 bg-sky-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h3 className="relative mb-6 pb-4 text-3xl font-extrabold text-gray-900 before:w-14 before:bg-[#0167F3] before:left-1/2 before:-translate-x-1/2 before:absolute before:bottom-0 before:h-[2px] before:rounded-sm">
            Trending Product
          </h3>
          <p className="w-5/12 text-sm text-center text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-5">
          {/* Repeat the product cards with dynamic data */}
          {/* Replace the static content with dynamic data when using in a real application */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="relative p-2 transition-all duration-500 bg-white border border-gray-100 rounded cursor-pointer hover:shadow-lg"
            >
              {/* Example dynamic content */}
              {index % 2 === 0 && (
                <div className="absolute left-4 top-4 bg-[#F73232] text-white rounded-r-sm text-xs font-bold px-3 py-2">
                  -25%
                </div>
              )}
              {index % 3 === 0 && (
                <div className="absolute right-4 top-4 bg-[#0167F2] text-white rounded-r-sm text-xs font-bold px-3 py-2">
                  NEW
                </div>
              )}
              <img
                src={`/images/product-${index + 1}.jpg`}
                className="w-full"
                alt={`Product ${index + 1}`}
              />
              <div className="px-2 py-3 space-y-1">
                <div className="text-sm text-gray-500">Watches</div>
                <h4 className="text-xl font-extrabold text-gray-900">
                  Xiaomi Mi Band 5
                </h4>
                <ul className="flex items-center space-x-[1px]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <li key={starIndex}>
                      <FaStar className="w-4 h-4 text-yellow-300" />
                    </li>
                  ))}
                  <li className="pl-2 text-sm text-gray-500">4.0 Review(s)</li>
                </ul>
                <div className="flex items-end space-x-3">
                  <div className="text-lg font-bold text-[#0167F3]">
                    $199.00
                  </div>
                  <div className="text-sm font-medium text-gray-500 line-through">
                    $199.00
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
