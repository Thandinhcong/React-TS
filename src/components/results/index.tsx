import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search) as any;
    const query = searchParams.get("query");
    const locationQuery = searchParams.get("location") as any;

    const [filteredWorks, setFilteredWorks] = useState([] as any);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get("http://localhost:3000/works")

                const filtered = data.data.filter((work: any) =>
                    work.name.toLowerCase().includes(query.toLowerCase()) &&
                    work.location.toLowerCase().includes(locationQuery.toLowerCase())
                );

                if (filtered.length === 0) {
                    setNoResults(true);
                } else {
                    setNoResults(false);
                    setFilteredWorks(filtered);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [query, locationQuery]);

    return (
        <div>
            {noResults ? (
                <p>Không có kết quả tìm kiếm phù hợp.</p>
            ) : (
                <>
                    <h1>Kết quả tìm kiếm cho: {query}</h1>
                    <p>Địa điểm: {locationQuery}</p>
                    <ul>
                        {filteredWorks.map((work: any) => (
                            <li key={work.id}>
                                <h2>{work.name}</h2>
                                <p>{work.description}</p>
                                <p>Lever: {work.lever}</p>
                                <p>Địa điểm: {work.location}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default SearchResults;
