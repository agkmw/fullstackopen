import axios from "axios";
import { useEffect, useState } from "react";
import WeatherLine from "./WeatherLine";
import WeatherIcon from "./WeatherIcon";

const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null);

  const lat = country.latlng[0];
  const lon = country.latlng[1];

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,is_day,weather_code,wind_speed_10m`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
  });

  if (!weather) return null;

  return (
    <div>
      <h2>Weather in {country.name.common}</h2>
      <WeatherLine
        label="temperature"
        variable={weather["current"]["temperature_2m"]}
        unit={weather["current_units"]["temperature_2m"]}
      />
      <WeatherIcon
        weatherCode={weather["current"]["weather_code"]}
        isDay={weather["current"]["is_day"]}
      />

      <WeatherLine
        label="temperature"
        variable={weather["current"]["wind_speed_10m"]}
        unit={weather["current_units"]["wind_speed_10m"]}
      />
      <WeatherIcon name="wind" />
    </div>
  );
};

export default Weather;
