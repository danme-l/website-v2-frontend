import { useState, useEffect } from 'react';

function useOilSupply() {
    const [oilSupply, setOilSupply] = useState([]);

    useEffect(() => {
        async function fetchOilSupply() {
            const response = await fetch('http://localhost:5000/oil/oil_production');
            const data = await response.json();
            setOilSupply(data);
        }

        fetchOilSupply();
    }, []);

    return oilSupply;
}

export default useOilSupply;