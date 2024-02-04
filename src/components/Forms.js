import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

const Form = ({ onWeatherSubmit, animate }) => {
  const [weatherInput, setWeatherInput] = useState('');

  const weatherInputHandler = (e) => {
    setWeatherInput(e.target.value);
  };

  const handleSubmit = (e) => {
    onWeatherSubmit(weatherInput);
    const input = document.querySelector('input');
    input.value = '';
    if (input.value === '') {
      animate(true);
      setTimeout(() => {
        animate(false);
      }, 500);
    }
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        animate ? 'animate-shake' : 'animate-none'
      } h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-8`}
    >
      <div className="h-full relative flex items-center justify-between p-2">
        <input
          type="text"
          onChange={weatherInputHandler}
          placeholder="search by city or country"
          className="flex-1 bg-transparent outline-none placeholder:text-white placeholder:capitalize text-white text-[15px] p-6 h-full font-light"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#1ab8ed] hover:bg-[#15bbdd] w-20 h-12 rounded-full flex justify-center items-center transition"
        >
          <IoMdSearch className="text-2x1 text-white" />
        </button>
      </div>
    </form>
  );
};

export default Form;
