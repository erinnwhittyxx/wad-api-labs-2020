import React from "react";
import { useContext} from 'react';
import { MoviesContext } from './moviesContext';
import "./page.css"

const Movies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Movies Data </h2>
        <div className="row">
        <div className="col-3">
            {context.movies.map(
                movie => { 
                    return <>
                    <table>
                        <tr>
                            <th>Id:</th>
                            <th>Title:</th>
                            <th>Release Date:</th>
                        </tr>
                        <tr>
                            <td>{movie.id}</td>
                            <td>{movie.title}</td>
                            <td>{movie.release_date}</td>
                        </tr>
                    </table>
                    <br/>
                    </> 
                }
                )
            }
        </div>
      </div>
    </>
}

export default Movies;