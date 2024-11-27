import React from 'react';
import ProductCard from './ProductCard';
import { Product } from './types';

const products: Product[] = [
  {
    name: "Milka Classic",
    minTemp: -5.0,
    maxTemp: 18.0,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f8665efba88a9c06ac40811fd74ad56812b02e10fcc6e0c1c8bb26b3dc291a4?apiKey=b69fc8919c0b423ba9b9a5ca01d09686&&apiKey=b69fc8919c0b423ba9b9a5ca01d09686"
  },
  {
    name: "Chicken Breast",
    minTemp: -25.0,
    maxTemp: -8.0,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f8665efba88a9c06ac40811fd74ad56812b02e10fcc6e0c1c8bb26b3dc291a4?apiKey=b69fc8919c0b423ba9b9a5ca01d09686&&apiKey=b69fc8919c0b423ba9b9a5ca01d09686"
  },
  {
    name: "Carrots",
    minTemp: 12.0,
    maxTemp: 25.0,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f8665efba88a9c06ac40811fd74ad56812b02e10fcc6e0c1c8bb26b3dc291a4?apiKey=b69fc8919c0b423ba9b9a5ca01d09686&&apiKey=b69fc8919c0b423ba9b9a5ca01d09686"
  }
];

const MeasurementsApp: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-9 pb-56 bg-white max-md:px-5 max-md:pb-24">
      <header className="flex flex-wrap gap-5 justify-between w-full max-w-[1231px] max-md:max-w-full">
        <h1 className="my-auto text-4xl font-medium tracking-tight leading-none text-sky-800">
          Measurements App
        </h1>
        <button className="flex gap-2.5 justify-center items-center py-2.5 pr-2 pl-2 text-base font-semibold leading-tight text-center text-white">
          <span className="overflow-hidden self-stretch px-10 py-3.5 my-auto bg-sky-800 rounded-lg w-[188px] max-md:px-5">
            Add a product
          </span>
        </button>
      </header>
      <section className="mt-24 text-5xl tracking-tighter text-center text-black leading-[58px] w-[1020px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Easily measure and manage <br />
        <span className="italic">product data</span>{" "}
      </section>
      <section className="mt-36 text-4xl tracking-tighter leading-tight text-center text-black max-md:mt-10">
        All added products
      </section>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </main>
  );
}

export default MeasurementsApp;