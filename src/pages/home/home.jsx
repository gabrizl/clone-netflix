/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import logo from "../../imgs/logo.png";
import Modal from "../modal/modal"; 

export function Home() {
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer YOUR_API_KEY_HERE",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  if (!movies) return null;

  return (
    <div className="home-container">
      <div className="home-header-holder">
        <header className="home-header">
          <div className="home-header-logo-and-options-holder">
            <img src={logo} className="home-header-logo" alt="Logo" />
            <a href="#">TV Shows</a>
            <a href="#">Movies</a>
            <a href="#">Recently Added</a>
            <a href="#">My List</a>
          </div>
          <a href="#">🔍</a>
        </header>
      </div>

      <div className="movie-holder">
        <img
          src={`https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`}
          className="movie-cover"
          alt="Movie Cover"
        />
        <div className="movie-details">
          <h1 className="movie-title">{movies[0].original_title}</h1>
          <p className="movie-description">{movies[0].overview}</p>
          <div className="movie-options">
            <button className="play-movie-button">Play</button>
            <button className="my-list-button">+ My List</button>
          </div>
        </div>
      </div>

      <div className="home-movie-grid-holder">
        <button className="navigation-arrow left" onClick={scrollLeft}>
          ‹
        </button>
        <div className="home-movie-grid" ref={scrollRef}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="small-cover"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
        <button className="navigation-arrow right" onClick={scrollRight}>
          ›
        </button>
      </div>

      <Modal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}
