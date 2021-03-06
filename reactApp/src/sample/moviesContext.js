import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies, getUpcoming, getPopular, addFavorite, getFavorites } from "../api/movie-api";


export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load-upcoming":
      return { 
        upcoming: action.payload.movies, movies: [...state.movies]};
    case "load-popular":
      return { 
        popular: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming]};
    case "load":
      return { movies: action.payload.result, upcoming: [...state.upcoming], popular: [...state.popular]};
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        popular: [...state.popular]
      };
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], popular: [], favorites: []});
  const [authenticated, setAuthenticated] = useState(false);

  const addToFavorites = (favorites) => {
    const result = addFavorite(favorites);
    console.log(result)
  };

  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  useEffect(() => {
    getUpcoming().then(movies => {
      console.log(movies);
      dispatch({ type: "load-upcoming", payload: {movies}});
    });
  },[]);

  useEffect(() => {
    getPopular().then(movies => {
      console.log(movies);
      dispatch({ type: "load-popular", payload: {movies}});
    });
  },[]);

  useEffect(() => {
    getFavorites().then(favorites => {
      console.log(favorites);
      dispatch({ type: "load-favorites", payload: {favorites}});
    });
  },[]);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        popular: state.popular,
        favourites: state.favourites,
        addToFavorites: addToFavorites,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider