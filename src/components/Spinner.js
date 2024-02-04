// Spinner.js
import React from 'react';
import { ImSpinner8 } from 'react-icons/im';

const Spinner = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradientBg bg-no-repeat bg-cover bg-center">
      <ImSpinner8 className="text-white text-5xl animate-spin" />
    </div>
  );
};

export default Spinner;
