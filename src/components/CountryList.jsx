import { useCities } from "../contexts/CitiesContext";

import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";

import styles from "./CountryList.module.css";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first Country by clicking on a Country on the map" />
    );
  let countries = Array.from(
    new Set(
      cities.map((city) =>
        JSON.stringify({ emoji: city.emoji, country: city.country })
      )
    )
  ).map((str) => JSON.parse(str));

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
