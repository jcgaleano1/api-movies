import axios from 'axios';
import Swal from 'sweetalert2';

export const addMovieFavorite =(payload) => (dispatch) => {
  Swal.fire({
    title: 'Added',
    text: 'Movie added succesfully to favorites',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
  dispatch( { type: 'ADD_MOVIE_FAVORITE', payload });
}

export const getMovies = (titulo) => async (dispatch) => {
    try {
      const {data} = await axios.get(`http://www.omdbapi.com/?apikey=8237b2d4&s=${titulo}`);
        dispatch({ type: 'GET_MOVIES', payload: data });
    } catch (error) {
      console.log(error);
    }
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=8237b2d4&i=" + id)
      .then(response => response.json())
      .then(respuesta =>
        dispatch({ type: 'GET_MOVIE_DETAIL', payload: respuesta })
      );
  };
}


export function removeMovieFavorite(payload) {
  return { type: 'REMOVE_MOVIE_FAVORITE', payload }
}
