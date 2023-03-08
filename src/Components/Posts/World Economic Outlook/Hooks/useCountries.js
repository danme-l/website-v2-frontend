import { useState, useEffect } from 'react';

function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch('http://localhost:5000/weo/countries');
      const data = await response.json();
      setCountries(data);
    }

    fetchCountries();
  }, []);

  return countries;
}

export default useCountries;