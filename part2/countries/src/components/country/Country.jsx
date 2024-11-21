import { useState } from "react";
import Weather from "../weather/Weather";

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>

      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>

      <h2>languages</h2>
      <ul>
        {Object.keys(country.languages).map((key, i) => (
          <li key={i}>{country.languages[key]}</li>
        ))}
      </ul>

      <img src={country.flags.svg} alt={country.flags.alt} width="200px" />

      <Weather country={country} />
    </div>
  );
};

export default Country;
