import React from 'react';
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from 'react-icons/io';
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from 'react-icons/bs';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { ImSpinner8 } from 'react-icons/im';

const WeatherCard = ({ data, loading }) => {
  // set the icon according to the weather
  let icon;

  switch (data.weather[0].main) {
    case 'Clouds':
      icon = <IoMdCloudy />;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill />;
      break;
    case 'Rain':
      icon = <IoMdRainy className="text-[#31cafb]" />;
      break;
    case 'Drizzle':
      icon = <BsCloudDrizzleFill className="text-[#31cafb]" />;
      break;
    case 'Snow':
      icon = <IoMdSnow className="text-[#31cafb]" />;
      break;
    case 'Thunderstorm':
      icon = <IoMdThunderstorm />;
      break;
    default:
    case 'Clear':
      icon = <IoMdSunny className="text-[#ffde33]" />;
      break;
  }

  // date object
  const date = new Date();

  return (
    <div className="w-full max-w-[450px] bg-black/20 min-h-[584px] text-white backdrop-blur-[32px] py-12 px-6 rounded-[20px]">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ImSpinner8 className="text-white text-5xl animate-spin" />
        </div>
      ) : (
        <div>
          {/* card top */}
          <div className="flex items-center gap-x-5">
            {/* icon */}
            <div className="text-[87px]">{icon}</div>
            <div>
              {/* country name */}
              <div className="text-2xl font-semibold">
                {data.name}, {data.sys.country}
              </div>
              {/* date */}
              <div>
                {date.getUTCDate()}/{date.getUTCMonth() + 1}/
                {date.getUTCFullYear()}
              </div>
            </div>
          </div>
          {/* card body */}
          <div className="my-20">
            <div className="flex justify-center items-center">
              {/* temp */}
              <div className="text-6xl leading-none font-normal">
                {parseInt(data.main.temp)}
              </div>
              {/* celcius icon*/}
              <div className="text-2xl">
                <TbTemperatureCelsius />
              </div>
            </div>
            {/* weather description */}
            <div className="capitalize text-center">
              {data.weather[0].description}
            </div>
          </div>
          {/* card bottom */}
          <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                {/* icon */}
                <div className="text-xl">
                  <BsEye />
                </div>
                <div>
                  Visibility{' '}
                  <span className="ml-2">{data.visibility / 1000} km</span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                {/* icon */}
                <div className="text-xl">
                  <BsThermometer />
                </div>
                <div className="flex items-center ml-2">
                  Feels like{' '}
                  <span className="ml-2">
                    {parseInt(data.main.feels_like)}
                  </span>
                  <TbTemperatureCelsius />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                {/* icon */}
                <div className="text-xl">
                  <BsWater />
                </div>
                <div>
                  Humidity
                  <span className="ml-2">{data.main.humidity}</span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                {/* icon */}
                <div className="text-xl">
                  <BsWind />
                </div>
                <div className="ml-2">
                  Wind <span>{data.wind.speed} m/s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
