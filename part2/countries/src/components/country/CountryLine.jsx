import { useState } from "react";
import Country from "./Country";

const CountryLine = ({ country }) => {
  const [show, setShow] = useState(false);

  const handleShow = (event) => {
    setShow(!show);
  };

  return (
    <p>
      {country.name.common}{" "}
      <button onClick={handleShow}>{show ? "hide" : "show"}</button>
      {show ? <Country country={country} /> : null}
    </p>
  );
};

export default CountryLine;
