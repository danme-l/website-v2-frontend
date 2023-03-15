import { useState, useEffect } from 'react';

function useSubjects() {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        async function fetchSubjects() {
            const response = await fetch('https://website-v2-backend.onrender.com/weo/subjects');
            const data = await response.json();
            setSubjects(data)
        }

        fetchSubjects();
    }, []);

    return subjects;
}

export default useSubjects;