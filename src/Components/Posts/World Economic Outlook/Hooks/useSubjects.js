import { useState, useEffect } from 'react';

function useSubjects() {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        async function fetchSubjects() {
            const response = await fetch('http://localhost:5000/weo/subjects');
            const data = await response.json();
            setSubjects(data)
        }

        fetchSubjects();
    }, []);

    return subjects;
}

export default useSubjects;