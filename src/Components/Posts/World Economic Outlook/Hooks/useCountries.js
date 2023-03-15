import { useState, useEffect } from 'react';

function useCountries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchCountries() {
            const response = await fetch('https://website-v2-backend.onrender.com/weo/countries');
            const data = await response.json();
            setCountries(data);
        }

        fetchCountries();
    }, []);

    return countries;
}

export default useCountries;