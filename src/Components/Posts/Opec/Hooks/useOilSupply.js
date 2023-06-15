import { useState, useEffect } from 'react';

function useOilSupply() {
    const [oilSupply, setOilSupply] = useState([]);

    useEffect(() => {
        async function fetchOilSupply() {
            const response = await fetch('https://website-v2-backend.onrender.com/oil/oil_production');
            const data = await response.json();
            setOilSupply(data);
        }

        fetchOilSupply();
    }, []);

    console.log(oilSupply)
    return oilSupply;
}

export default useOilSupply;