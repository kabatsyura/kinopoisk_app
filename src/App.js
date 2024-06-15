import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    // eslint-disable-next-line no-unused-vars
    const {
      data: { 
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=year');
    
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
    <section class="container">
      {isLoading 
        ? <div class="loader">
          <span class="loader__text">Загрузка</span>
        </div> : movies.map(movie => {
          console.log(movie);
          return (
            <div class="movies">
            <Movie 
              key={movie.key}
              id={movie.id} 
              title={movie.title} 
              summary={movie.summary} 
              rating={movie.rating} 
              year={movie.year} 
              poster={movie.medium_cover_image}/>
            </div>
          );
        })}
    </section>
    );
  }
};

export default App;
