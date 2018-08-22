/* eslint react/destructuring-assignment: 0 */
/* eslint react/prop-types:0 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

// checks first level and a props change.
class MoviesDetails extends PureComponent {
    state = {
      movie: [],
    }

    async componentDidMount() {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=f6e07a62a81edcb5e9fceb3111b4534a&language=en-US`);
        // const res = await fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=f6e07a62a81edcb5e9fceb3111b4534a&language=en`);
        const movie = await res.json();
        // console.log(movies);
        this.setState({
          movie,
        });
      } catch (e) {
        console.log(e);
      }
    }

    render() {
      const { movie } = this.state;

      return (
        <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
          <MovieInfo>
            <Overdrive id={movie.id}>
              <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.original_title} />
            </Overdrive>
            <div>
              <h1>{movie.title}</h1>
              <h3>{movie.release_date}</h3>
              <p>{movie.overview}</p>
            </div>
          </MovieInfo>
        </MovieWrapper>
      );
    }
}

export default MoviesDetails;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
