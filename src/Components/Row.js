import React, { useState, useEffect } from "react";
import axiosa from "../axios";
import classes from "./Row.module.css";

const Row = ({ title, fetchUrl }) => {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // getting the movies info, fetchUrl is a dependency due to async usage
        async function fetchData() {
            const request = await axiosa.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    // console.table(movies);

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            {/* container -> posters */}
            <div className={classes.row_posters}>
                {/* several row posters here */}
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={classes.row_poster}
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Row;
