import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        navigate(`/search?query=${query}&location=${location}`);
    };

    return (
        <div>
            <h1>Tìm kiếm việc làm</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tìm kiếm công việc"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <option value="">Chọn địa điểm</option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Hồ chí Minh">Hồ chí Minh</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                </select>
                <button type="submit">Tìm kiếm</button>
            </form>
        </div>
    );
};

export default Form;
