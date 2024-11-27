Framework
React
Styling
Tailwind
Language
TypeScript

Fast

Quality
import React from 'react';

const ProductCard: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-wrap gap-5 px-8 pt-6 pb-3.5 mt-8 ml-9 w-full rounded-3xl bg-stone-50 max-w-[989px] max-md:px-5 max-md:max-w-full">
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f8665efba88a9c06ac40811fd74ad56812b02e10fcc6e0c1c8bb26b3dc291a4?apiKey=b69fc8919c0b423ba9b9a5ca01d09686&&apiKey=b69fc8919c0b423ba9b9a5ca01d09686"
              alt="Milka Classic product"
              className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[1.07] w-[107px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full font-semibold leading-tight max-md:mt-10">
              <h3 className="self-start text-3xl text-black">Milka Classic</h3>
              <div className="flex gap-5">
                <div className="flex flex-col flex-1">
                  <p className="text-xl text-sky-800">Min. temperature</p>