import { useState, useEffect } from "react";
import Display from "./components/Display";
import Search from "./components/Search";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [matchedCountries, setMatchedCountries] = useState(null);
  const [value, setValue] = useState("");

  const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

  useEffect(() => {
    axios.get(`${baseUrl}/all`).then((response) => {
      setCountries(response.data);
    });
  }, []);

  if (!countries) return null;

  const handleChange = (event) => {
    const updatedValue = event.target.value;
    setValue(updatedValue);
    setMatchedCountries(
      countries.filter((c) =>
        c.name.common.toLowerCase().includes(updatedValue.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Search value={value} onChange={handleChange} />
      <Display countries={matchedCountries} />
    </div>
  );
};

export default App;
