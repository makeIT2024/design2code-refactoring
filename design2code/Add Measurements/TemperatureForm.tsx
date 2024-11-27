import React from 'react';

const TemperatureForm: React.FC = () => {
  return (
    <form className="flex overflow-hidden flex-col justify-center items-end px-20 py-10 mt-14 max-w-full whitespace-nowrap rounded-3xl bg-stone-50 w-[792px] max-md:px-5 max-md:mt-10">
      <div className="flex flex-col max-w-full w-[371px]">
        <div className="flex gap-5">
          <label htmlFor="temperature" className="grow my-auto text-lg font-semibold leading-tight text-black">
            Temperature:
          </label>
          <div className="flex flex-col text-base leading-none text-[color:var(--sds-color-text-default-default)]">
            <input
              type="text"
              id="temperature"
              className="overflow-hidden flex-1 shrink self-stretch px-4 py-3 w-full bg-white rounded-lg min-w-[240px]"
              placeholder="Value"
            />
          </div>
        </div>
        <button
          type="submit"