import React from 'react';
import './App.css';
import Row from './Components/Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>Tada</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      {/* <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES MOVIES" fetchUrl={requests.fetchDocumentaries}/> */}
    </div>
  );
}

export default App;
