import React from 'react';

interface Product {
  imageSrc: string;
  title: string;
  price: number;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => (
  <div className="flex items-center space-x-2">
    <img src={product.imageSrc} className="w-14" alt="#" />
    <div className="space-y-1">
      <div className="text-base font-medium text-gray-900">{product.title}</div>
      <div className="text-sm text-gray-500">{`$${product.price}`}</div>
    </div>
  </div>
);

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => (
  <div>
    <h3 className="relative mb-8 pb-4 text-base font-semibold border-b before:w-24 before:bg-[#0167F3] before:left-0 before:absolute before:-bottom-[1px] before:h-[1px]">
      {title}
    </h3>
    <div className="space-y-3">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  </div>
);

const TopProductSection: React.FC = () => {
  const bestSellerProducts: Product[] = [
    { imageSrc: 'https://demo.graygrids.com/themes/shopgrids/assets/images/home-product-list/08.jpg', title: 'Samsung Galaxy S9+ 64 GB', price: 887.99 },
    // Add more products as needed
  ];

  const newArrivalsProducts: Product[] = [
    { imageSrc: 'https://demo.graygrids.com/themes/shopgrids/assets/images/home-product-list/08.jpg', title: 'Samsung Galaxy S9+ 64 GB', price: 887.99 },
    // Add more products as needed
  ];

  const topRatedProducts: Product[] = [
    { imageSrc: 'https://demo.graygrids.com/themes/shopgrids/assets/images/home-product-list/08.jpg', title: 'Samsung Galaxy S9+ 64 GB', price: 887.99 },
    // Add more products as needed
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-5">
          <ProductSection title="Best Seller" products={bestSellerProducts} />
          <ProductSection title="New Arrivals" products={newArrivalsProducts} />
          <ProductSection title="Top Rated" products={topRatedProducts} />
        </div>
      </div>
    </section>
  );
};

export default TopProductSection;
