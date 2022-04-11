const initialState = {
    movies: [], //peliculas favoritas
    moviesLoaded: [], // Las peliculas buscadas de la API
    movieDetail: {}//Detalle pelicula especifica
  };

  const elementDuplicate = (state, payload) => {
    return state.movies.some((movie) => movie.id === payload.id);
  }

  function rootReducer(state = initialState, action) {

    if (action.type === "ADD_MOVIE_FAVORITE") {
      if (elementDuplicate(state, action.payload)) {
        return state;
      }else{
        return {
          ...state,
          movies: [...state.movies, action.payload]
        }
      }
        
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }

    if (action.type === "GET_MOVIE_DETAIL"){
     return{
       ...state,
        movieDetail: action.payload
     }
    }
    if (action.type === "REMOVE_MOVIE_FAVORITE") {
    return{
      ...state,
        movies: state.movies.filter(item => item.title !== action.payload.title )
          }
        }
    return state;
  }
  
  export default rootReducer;