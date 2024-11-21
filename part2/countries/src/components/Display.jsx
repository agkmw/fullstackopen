import Countries from "./country/Countries";
import Country from "./country/Country";

const Display = ({ countries }) => {
  if (!countries) return null;

  if (countries.length > 10) return <p>Too many matches, specify another</p>;
  else if (countries.length > 1) return <Countries countries={countries} />;
  else if (countries.length === 1) return <Country country={countries[0]} />;
};

export default Display;
