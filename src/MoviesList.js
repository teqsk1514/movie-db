/* eslint react/destructuring-assignment: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MoviesList extends Component {
    state = {
      movies: [],
    }

    async componentDidMount() {
      try {
        const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=f6e07a62a81edcb5e9fceb3111b4534a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
        // const res = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=f6e07a62a81edcb5e9fceb3111b4534a&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false');
        const movies = await res.json();
        // console.log(movies);
        this.setState({
          movies: movies.results,
        });
      } catch (e) {
        // console.log(e);
      }
    }

    render() {
      return (
        <MovieGrid>
          {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </MovieGrid>
      );
    }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
