import React from "react";
import { useContext} from 'react';
import { MoviesContext } from './moviesContext';
import "./page.css"


const Popular = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Popular Movies</h2>
        <div className="row">
        <div className="col-3">
            {context.popular.map(
                popular => { 
                    return <>
                    <table>
                        <tr>
                            <th>Id:</th>
                            <th>Title:</th>
                            <th>Release Date:</th>
                        </tr>
                        <tr>
                            <td>{popular.id}</td>
                            <td>{popular.title}</td>
                            <td>{popular.release_date}</td>
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

export default Popular;