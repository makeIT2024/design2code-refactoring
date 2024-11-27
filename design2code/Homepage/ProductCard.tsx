import React from 'react';
import { Product } from './types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="overflow-hidden px-8 pt-6 pb-3.5 mt-4 w-full rounded-3xl bg-stone-50 max-w-[989px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                <img loading="lazy" src={product.imageSrc} alt={`${product.name} product image`} className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[1.07] w-[107px] max-md:mt-10" />
              </div>
              <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col w-full font-semibold leading-tight max-md:mt-10">
                  <h2 className="self-start text-3xl text-black">{product.name}</h2>
                  <div className="flex gap-5">
                    <div className="flex flex-col flex-1">
                      <div className="text-xl text-sky-800">Min. temperature</div>
                      <div className="self-center text-4xl text-black">{product.minTemp}</div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="text-xl text-teal-400">Max. temperature</div>
                      <div className="self-center text-4xl text-black">{product.maxTemp}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full text-base font-semibold leading-tight text-black max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d137ee85f318dc71e1a52a7ead6dfa8227b2e6b5ae9c1ccc714e7969ac08ec4f?apiKey=b69fc8919c0b423ba9b9a5ca01d09686&&apiKey=b69fc8919c0b423ba9b9a5ca01d09686" alt="" className="object-contain self-end rounded-3xl aspect-[2.25] w-[90px]" />
            <button className="flex overflow-hidden gap-1.5 px-3.5 py-2.5 mt-2.5 bg-white rounded-3xl">
              <span className="grow">Add measurement</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/249fc60f3e00d199ed29932ffaf29602fe8b2f112bea22076f26adcb38e2ff70?apiKey=b69fc8919c0b423ba9b9a5ca01d09686&&apiKey=b69fc8919c0b423ba9b9a5ca01d09686" alt="" className="object-contain shrink-0 aspect-[1.04] w-[23px]" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;