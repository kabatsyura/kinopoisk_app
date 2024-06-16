import React from "react";
import ReactPropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./Movie.css";

const Movies = ({ id, title, rating, year, poster }) => {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            id,
            year,
            title,
            poster,
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__about">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <h5 className="movie__rating">{rating} / 10</h5>
        </div>
      </Link>
    </div>
  );
};

Movies.ReactPropTypes = {
  id: ReactPropTypes.number.isRequired,
  title: ReactPropTypes.string.isRequired,
  rating: ReactPropTypes.number.isRequired,
  year: ReactPropTypes.number.isRequired,
  poster: ReactPropTypes.string.isRequired
};

export default Movies;
