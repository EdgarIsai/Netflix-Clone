import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import axiosa from "../../axios";

const Row = ({ title, fetchUrl, classStyle, isLargeRow }) => {
	const base_url = "https://image.tmdb.org/t/p/original/";
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	useEffect(() => {
		// * getting the movies info, fetchUrl is a dependency due to async usage
		async function fetchData() {
			const request = await axiosa.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);
	// console.table(movies);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	const trailerClickHandler = movie => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.name || "")
				.then(url => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch(err => console.log(err));
		}
	};

	const trailer = (() => {
		if (trailerUrl === "") {
			return null;
		}
		return <Youtube videoId={trailerUrl} opts={opts} />;
	})();

	return (
		<div className={classStyle.row}>
			{/* title */}
			<h2>{title}</h2>
			{/* container -> posters */}
			<div className={classStyle.row_posters}>
				{/* several row posters here */}
				{movies.map(movie => (
					<img
						key={movie.id}
						className={classStyle.row_poster}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						onClick={trailerClickHandler.bind(this, movie)}
						alt={movie.name}
					/>
				))}
			</div>
			{trailer}
		</div>
	);
};

export default Row;
