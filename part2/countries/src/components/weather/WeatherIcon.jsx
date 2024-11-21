import dayIcons from "./icons/dayIcons";
import nightIcons from "./icons/nightIcons";

const WEATHER_CODE_VARIATIONS = {
  48: 45,
  53: 51,
  55: 51,
  57: 56,
  63: 61,
  65: 61,
  67: 66,
  73: 71,
  75: 71,
  81: 80,
  82: 80,
  86: 85,
  99: 96,
};

const getIconName = (weatherCode, isDay) => {
  const code = WEATHER_CODE_VARIATIONS[weatherCode] ?? weatherCode;
  return isDay ? dayIcons[code] : nightIcons[code];
};

const WeatherIcon = ({ weatherCode = null, isDay = null, name = null }) => {
  const iconName = name ? name : getIconName(weatherCode, isDay);

  return (
    <div>
      <img
        src={`src/components/weather/icons/${iconName}.svg`}
        width="150px"
        alt={`${iconName}`}
      />
    </div>
  );
};

export default WeatherIcon;
