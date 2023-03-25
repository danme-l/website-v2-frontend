import { useState, useEffect } from 'react';

function useMoneySupply() {
    const [moneySupply, setMoneySupply] = useState([]);

    useEffect(() => {
        async function fetchMoneySupply() {
            const response = await fetch('https://website-v2-backend.onrender.com/money_supply');
            const data = await response.json();
            console.log(data);
            setMoneySupply(data);
        }

        fetchMoneySupply();
    }, []);

    return moneySupply;
}

export default useMoneySupply;