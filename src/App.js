/* eslint react/destructuring-assignment: 0 */
import React from 'react';
// import { Button } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MovieList from './MoviesList';
import MovieDetail from './MovieDetails';

// const Test = ({ match }) => (
//   <h1>{match.params.id}</h1>
// );

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          {/* <h1>Movie List</h1> */}
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MovieList} />
        {/* <Route exact path="/:pid" component={MovieList} /> */}
        <Route exact path="/:id" component={MovieDetail} />
      </Switch>
      {/* <Link to="/:pid">
        <Button type="primary">Next</Button>
      </Link> */}
    </div>
  </Router>
);

export default App;
