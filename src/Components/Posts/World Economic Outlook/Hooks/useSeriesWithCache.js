import { useState, useEffect, useMemo } from "react";
import axios from 'axios';

function useSeriesWithCache(countryId, subjectId) {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        async function fetchSeries() {
            const response = await axios.get(`http://localhost:5000/weo/series?countryId=${countryId}&subjectId=${subjectId}`);
            setSeries(response.data.sort((y1, y2) => y1.year - y2.year));
        }

        fetchSeries();
    }, [countryId, subjectId]);

    const cachedSeries = useMemo(() => {
        return series;
    }, [series])

    return cachedSeries;
}

export default useSeriesWithCache;