import React from 'react';

interface MeasurementData {
  timestamp: string;
  value: string;
  result: string;
  resultColor: string;
}

const measurementData: MeasurementData[] = [
  { timestamp: "4. 8. 2024 21:17:22", value: "12.0", result: "OK", resultColor: "text-green-800" },
  { timestamp: "12. 8. 2024 11:04:11", value: "10.0", result: "OK", resultColor: "text-green-800" },
  { timestamp: "13. 8. 2024 10:34:59", value: "20.0", result: "NOT OK", resultColor: "text-orange-900" }
];

const MeasurementTable: React.FC = () => {
  return (
    <section className="mt-20 max-w-full w-[869px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[49%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-xl font-semibold leading-tight text-sky-800 max-md:mt-10">
            <h3 className="text-3xl text-black max-md:mr-1 max-md:ml-2">Timestamp:</h3>
            {measurementData.map((data, index) => (
              <p key={index} className="self-center mt-10 text-center max-md:mt-10 max-md:mr-1.5 max-md:ml-1.5">
                {data.timestamp}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center text-xl font-semibold leading-tight text-sky-800 whitespace-nowrap max-md:mt-10">
            <h3 className="self-stretch text-3xl text-black">Value:</h3>
            {measurementData.map((data, index) => (
              <p key={index} className="mt-10 text-center max-md:mt-10">
                {data.value}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center text-2xl font-bold leading-tight max-md:mt-10">
            <h3 className="self-stretch text-3xl font-semibold text-black">Result:</h3>
            {measurementData.map((data, index) => (
              <p key={index} className={`mt-10 text-center ${data.resultColor}`}>
                {data.result}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasurementTable;