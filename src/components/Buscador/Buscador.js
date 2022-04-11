import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from '../../actions/index';
import { animateScroll as scroll} from 'react-scroll';


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });

  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
    scroll.scrollToBottom();
  }

  render() {

    return (
      <div className="contenedor-principal">
        <div className="contenedor1b">
          <h1 className="titulo">SEARCH YOUR BEST MOVIES</h1>
          <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <label className="label" >Movie: </label>
              <input
                className="input"
                type="text"
                id="title"
                autoComplete="off"
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button className="button" type="submit">Search</button>
          </form>
        </div>
        <div className="contenedor2b">

          {!this.props.movies ? <h1 className="message-b">There are no movies with this query</h1> : this.props.movies.map(movie => (
            <div key={movie.imdbID} className="card-b">
              <div className="contenedor-img">
                <img src={movie.Poster} alt="" className="img-b"></img>
              </div>
              <div className="contenedor-texto">
                <NavLink to={`/movie/${movie.imdbID}`} className="subtitulo-b">
                  {movie.Title}
                </NavLink>
                <button onClick={() => this.props.addMovieFavorite({ title: movie.Title, id: movie.imdbID, img: movie.Poster })} className="button-b">Favoritos</button>
              </div>

            </div>))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);

