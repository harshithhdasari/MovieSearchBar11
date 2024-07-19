import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt="Dog" />
      <div className="movie-card-content">
        <div className="movie-card-title">{movie.title}</div>
        <div className="movie-card-details">
          {movie.author_name ? movie.author_name.join(", ") : "Unknown Author"}
        </div>
        <div className="movie-card-details">{movie.first_publish_year}</div>
      </div>
    </div>
  );
};

export default MovieCard;
