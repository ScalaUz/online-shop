import React from 'react';

interface Product {
  imageSrc: string;
  productName: string;
  memory: string;
  color: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  discount: number;
}

const CartItem: React.FC<{ product: Product }> = ({ product }) => (
  <tr>
    <td className="flex items-center p-3 space-x-4 whitespace-nowrap">
      <div>
        <img className="w-20 h-20" src={product.imageSrc} alt="#" />
      </div>
      <div>
        <div className="text-base font-semibold text-gray-800">{product.productName}</div>
        <div className="text-base font-medium text-gray-500">Memory: <span className="text-gray-700">{product.memory}</span></div>
        <div className="text-base font-medium text-gray-500">Color: <span className="text-gray-700">{product.color}</span></div>
      </div>
    </td>
    <td className="p-3 whitespace-nowrap">
      <div className="grid items-center w-1/2 grid-cols-3 gap-1 px-1.5 py-1 mx-auto rounded-full shadow">
        <button className="flex justify-center text-gray-700 rounded-l hover:text-[#0167F3]">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
        <div className="text-lg font-normal text-center">
          {product.quantity}
        </div>
        <button className="flex justify-center text-gray-700 rounded-r hover:text-[#0167F3]">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
    </td>
    <td className="p-3 text-center whitespace-nowrap">
      <div className="text-base font-medium text-gray-500">Unit price: <span className="text-gray-800">${product.unitPrice.toFixed(2)}</span></div>
      <div className="text-base font-medium text-gray-500">Total price: <span className="text-gray-800">${product.totalPrice.toFixed(2)}</span></div>
    </td>
    <td className="p-3 text-center whitespace-nowrap">
      ${product.discount.toFixed(2)}
    </td>
    <td className="py-4 pl-3 pr-4 text-sm font-medium text-right sm:pr-6">
      <div className="inline-block text-left" data-x-data="{ menu: false }">
        <button type="button" className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none" id="menu-button" aria-expanded="true">
          <span className="sr-only"></span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
    </td>
  </tr>
);

const ShoppingCart: React.FC = () => {
  const products: Product[] = [
    {
      imageSrc: 'https://demo.graygrids.com/themes/shopgrids/assets/images/cart/02.jpg',
      productName: 'Apple iPhone X 256 GB Space Gray',
      memory: '256 GB',
      color: 'Space Gray',
      quantity: 1,
      unitPrice: 11000.0,
      totalPrice: 11000.0,
      discount: 100.0,
    },
    {
      imageSrc: 'https://demo.graygrids.com/themes/shopgrids/assets/images/cart/03.jpg',
      productName: 'Apple iPhone X 256 GB Space Gray',
      memory: '256 GB',
      color: 'Space Gray',
      quantity: 1,
      unitPrice: 11000.0,
      totalPrice: 11000.0,
      discount: 100.0,
    },
    // Add more products as needed
  ];

  return (
    <div className="py-12 bg-sky-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-gray-700">My card</div>
          <ul className="flex items-center space-x-3">
            <li className="flex items-center space-x-1 text-gray-500">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
              <span className="text-sm">Home</span>
            </li>
            <li className="flex items-center space-x-1 text-gray-500">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
              <span className="text-sm">My cart</span>
            </li>
          </ul>
        </div>
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="overflow-hidden rounded-sm ring-1 ring-black ring-opacity-5">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white">
                <tr>
                  <th scope="col" className="p-3 text-lg font-semibold text-left text-gray-900">Product name</th>
                  <th scope="col" className="p-3 text-lg font-semibold text-center text-gray-900">Quantity</th>
                  <th scope="col" className="p-3 text-lg font-semibold text-center text-gray-900">Price</th>
                  <th scope="col" className="p-3 text-lg font-semibold text-center text-gray-900">Discount</th>
                  <th scope="col" className="relative p-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product, index) => (
                  <CartItem key={index} product={product} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
