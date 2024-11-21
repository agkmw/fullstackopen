import CountryLine from "./CountryLine";

const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((c) => (
        <CountryLine key={c.name.common} country={c} />
      ))}
    </div>
  );
};

export default Countries;
