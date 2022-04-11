import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';


export class ConnectedList extends Component {
   
  render() {
    return (
      <div className="contenedor-f">
        <h2 className="titulo-f">Películas Favoritas</h2>
         <div className="grid">
          {this.props.movies.length === 0 ?  <p className="message-f">You haven't added favorite movies??? <br /> Add your favorite movies in the main list <br /><Link to='/' className="link-f">Back</Link></p>: this.props.movies.map((element) => (
            
            <div key={element.id} className="card-f">
              
              <h2 ><Link className="titulo1-f" to={`/movie/${element.id}`}>
                {element.title}
              </Link> </h2>
              <img src={element.img} alt="" />
              <button className="button-f" onClick={() => this.props.removeMovieFavorite({ title: element.title, id: element.imdbID })}>X</button>
            </div>))}

         </div>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
