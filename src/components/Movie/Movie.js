import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        this.props.getMovieDetail(id);
    }

    render() {
        return (
            <div className="contenedor-m">
                <div className="contenedor1-m">
                    <div className="card-m">
                        <p className="titulo-m">{this.props.movie.Title}</p>
                        <div className="subcard-m">
                            <div className="text-container-m">
                                <p><span>YEAR:</span>  {this.props.movie.Year}</p>
                                <p><span>DIRECTOR:</span>  {this.props.movie.Director}</p>
                                <p><span>GENRE:</span>  {this.props.movie.Genre}</p>
                                <p><span>RUNTIME:</span>  {this.props.movie.Runtime}</p>
                            </div>
                            <div className="container-img-m">
                                <img src={this.props.movie.Poster} alt=""></img>
                            </div>
                        </div>
                        <p className="parrafo-m"><span>DESCRIPTION:</span> {this.props.movie.Plot}</p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: (id) => dispatch(getMovieDetail(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);


