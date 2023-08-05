import React, { useState } from 'react';
import './weathercomponent.css';
import { Card, CardContent, Typography } from '@mui/material';

function WeatherComponent() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [cityName, setCityName] = useState<string>('');

  const fetchWeatherData = () => {
    const apiKey = '99e193ad96f812c33b1b3fd9c7f1db5e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&apiKey=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className= "center-container">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={cityName}
        onChange={e => setCityName(e.target.value)}
      />
      <button className='get-weatherbutton'
       onClick={fetchWeatherData}>Get Weather</button>

      {weatherData && (
        <Card className='weathercard'>
          <CardContent>
            <Typography variant='h6'>Weather Information</Typography>
            <Typography variant="body1">Today's weather is: {weatherData.weather[0].description}</Typography>
            <Typography variant="body1">The temperature in {cityName} is: {weatherData.main.temp} degree Celsius.</Typography>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default WeatherComponent;
