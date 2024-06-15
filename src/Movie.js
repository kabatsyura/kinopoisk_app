import React from "react";
import ReactPropTypes from 'prop-types';

const Movie = ({ id, title, summary, rating, year, poster }) => {
  return (
    <div class="movie">
      <div class="movie__column">
        <img src={poster} alt={title} title={title} />
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
};

Movie.ReactPropTypes = {
  id: ReactPropTypes.number.isRequired,
  title: ReactPropTypes.string.isRequired,
  summary: ReactPropTypes.string.isRequired,
  rating: ReactPropTypes.number.isRequired,
  year: ReactPropTypes.number.isRequired,
  poster: ReactPropTypes.string.isRequired
};

export default Movie;
