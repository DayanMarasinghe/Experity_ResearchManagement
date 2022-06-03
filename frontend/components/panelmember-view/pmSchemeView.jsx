import React from 'react';
import React, {useEffect, useState} from "react";

export default function PMMarksTable() {

    const [movies , setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/panelMarking/markingScheme')
            .then(res => res.json())
            .then(res => {
                setMovies(res)
            })
    }, [])

    return(

        <table class="table table-bordered">
        <tbody>
            <tr>
                <th scope="col">Criteria</th>
                <th scope="col">Marks</th>
            </tr>
            {
                movies.map((scheme) => (
              <tr>
                <td>{scheme.Attributes}</td>
                <td>{scheme.marks}</td>
              </tr>
               ))
            }
        </tbody>
    </table>

    )


}