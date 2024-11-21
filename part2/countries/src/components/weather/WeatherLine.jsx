const WeatherLine = ({ label, variable, unit }) => {
  return (
    <div>
      {label} {variable} {unit}
    </div>
  );
};

export default WeatherLine;
