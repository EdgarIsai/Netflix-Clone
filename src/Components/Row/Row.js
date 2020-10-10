import React, { useState, useEffect } from "react";
import axiosa from "../../axios";

const Row = ({ title, fetchUrl, classStyle, isLargeRow }) => {
	const base_url = "https://image.tmdb.org/t/p/original/";
	const [movies, setMovies] = useState([]);

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
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
};

export default Row;
