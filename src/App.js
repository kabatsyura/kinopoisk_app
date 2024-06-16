import React from 'react';
import axios from 'axios';
import Movies from './Movies';
import "./css/App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: { 
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    
    this.setState({ 
      movies: movies,
      isLoading: false
    });

    console.log(this.state.movies);
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Загрузка...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movies
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                poster={movie.medium_cover_image}
                rating={movie.rating}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
};

export default App;