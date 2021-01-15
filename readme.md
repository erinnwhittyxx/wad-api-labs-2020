# Assignment 2 - Web API.

Name: Erinn Whitty

## Features.

 + Merged Assingment 1 React App
 + Upcoming Movies Page - displays upcoming movies from upcomingModel in the movies API
 + Now Playing Movies Page - displays now playing movies from nowplayingModel in the movies API
 + Popular Movies Page - displays popular movies from popularModel in the movies API

## Installation Requirements

Installed the following software/packages:

 + Postman (Desktop)
 + Node
 + MongoDB (installation instruction on website)
 + NPM
 + Development dependencies (npm install --save-dev babel-cli babel-preset-env nodemon eslint babel-eslint)


## API Configuration

For the API configuration I created an '.env' file containing the following:

NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret

I also created a .gitignore file


## API Design

The following is an overview of of my web API design:

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies | Gets a list of movies | N/A | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/upcoming | Gets upcoming movies | N/A | N/A | N/A 
| /api/movies/popular | Gets popular movies | *Attempt* Add new popular movie | N/A | N/A 
| /api/movies/nowplaying | Gets now playing movies | N/A | N/A | N/A


## Security and Authentication

I originally had authentication working; user login/signup, until I merged my assignment 1 with my assignment2.

## Integrating with React App

I integrated my assignment 1 React app with my API. The main change was inserting the code below into my tmbd-api.js in my moviesApp:

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~

## Extra features

 + Attempted POST for popular movies.   
