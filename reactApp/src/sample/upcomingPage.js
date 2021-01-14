import React from "react";
import { useContext} from 'react';
import { MoviesContext } from './moviesContext';
import "./page.css"


const Upcoming = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Upcoming Movies</h2>
        <div className="row">
        <div className="col-3">
            {context.upcoming.map(
                upcoming => { 
                    return <>
                    <table>
                        <tr>
                            <th>Id:</th>
                            <th>Title:</th>
                        </tr>
                        <tr>
                            <td>{upcoming.id}</td>
                            <td>{upcoming.title}</td>
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

export default Upcoming;