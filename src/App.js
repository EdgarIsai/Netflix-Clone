import React from "react";
import "./App.css";
import Row from "./Components/Row/Row";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import requests from "./requests";
import primaryClasses from "./Components/Row/Row.module.css";
import secondaryClasses from "./Components/Row/RowSecondary.module.css";

function App() {
	return (
		<div className="App">
			{/* Nav */}
			<Navbar />
			{/* Banner */}
			<Banner />
			{/* Rows */}
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				classStyle={primaryClasses}
				isLargeRow
			/>
			<Row
				title="TRENDING NOW"
				fetchUrl={requests.fetchTrending}
				classStyle={secondaryClasses}
			/>
			<Row
				title="TOP RATED"
				fetchUrl={requests.fetchTopRated}
				classStyle={secondaryClasses}
			/>
			<Row
				title="ACTION MOVIES"
				fetchUrl={requests.fetchActionMovies}
				classStyle={secondaryClasses}
			/>
			<Row
				title="COMEDY MOVIES"
				fetchUrl={requests.fetchComedyMovies}
				classStyle={secondaryClasses}
			/>
			<Row
				title="ROMANCE MOVIES"
				fetchUrl={requests.fetchRomanceMovies}
				classStyle={secondaryClasses}
			/>
			<Row
				title="DOCUMENTARIES MOVIES"
				fetchUrl={requests.fetchDocumentaries}
				classStyle={secondaryClasses}
			/>
		</div>
	);
}

export default App;
