import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Harry Potter", release_date: "2022" },
        { id: 2, title: "The Mist", release_date: "2021" },
        { id: 3, title: "Taken", release_date: "2024" },
        { id: 4, title: "The Avengers", release_date: "2025" },
        { id: 5, title: "Arrow", release_date: "2020" },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery('');
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}
