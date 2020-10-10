import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";
import classes from "./Banner.module.css";

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }

    return (
        <header
            className={classes.banner}
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
                backgroundPosition: "center center",
            }}
        >
            <div className={classes.banner_content}>
                <h1 className={classes.banner_title}>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className={classes.banner_buttons}>
                    <button className={classes.banner_button}>▶ Play</button>
                    <button className={classes.banner_button}>My List</button>
                </div>
                <h2 className={classes.banner_description}>
                    {truncate(movie?.overview, 150)}
                </h2>
                {/* <<< Background Image*/}
                {/* title */}
                {/* div > play and MyList buttons */}
                {/* description */}
            </div>

            <div className={classes.banner_fadeBottom}></div>
        </header>
    );
};

export default Banner;
