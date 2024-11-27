import React from 'react';
import Header from './Header';
import AddTemperatureMeasurement from './AddTemperatureMeasurement';
import ProductCard from './ProductCard';
import TemperatureForm from './TemperatureForm';

const MeasurementsApp: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-9 pb-28 bg-white max-md:px-5 max-md:pb-24">
      <Header />
      <AddTemperatureMeasurement />
      <ProductCard />
      <TemperatureForm />
    </main>
  );
};

export default MeasurementsApp;