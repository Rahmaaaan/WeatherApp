import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import Form from './components/Form';
import WeatherCard from './components/WeatherCard';
import './index.css';

// API key
const APIkey = process.env.REACT_APP_WEATHER_API_KEY;

const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('Bengaluru');
    // eslint-disable-next-line no-unused-vars
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const weatherSubmitHandler = location => {
    setLocation(location);
  };

  useEffect(() => {
    setLoading(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?&q=${location}&units=metric&appid=${APIkey}`;

    axios
      .get(url)
      .then(res => {
        setTimeout(() => {
          setData(res.data);
          setLoading(false);
        }, 1500);
      })
      .catch(err => {
        setLoading(false);
        setErrorMsg(err);
      });
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [errorMsg]);

  return (
    <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0">
      <Header />
      {errorMsg && (
        <div className="w-full max-w-[90vw] lg:max-w-[450px] bg-[#ff208c] text-white absolute top-2 lg:top-10 p-4 capitalize rounded-md">
          {`${errorMsg.response.data.message}`}
        </div>
      )}
      <Form onWeatherSubmit={weatherSubmitHandler} animate={setAnimate} />
      {loading ? <Spinner /> : (data ? <WeatherCard data={data} /> : null)}
      <Footer />
    </div>
  );
};

export default App;
