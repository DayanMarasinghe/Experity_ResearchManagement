import React, { useState, useEffect } from "react";

function Vivacomponent(){

    const [marking, setMarking] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/markings/viva')
            .then(resp => resp.json())
            .then(resp => {
                setMarking(resp)
            })
    }, [])

    return(
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Marking Area</th>
                        <th scope="col">Marks Allocated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        marking.map((markingList) => (
                            <tr key={markingList._id}>
                                <td>{markingList.Attributes}</td>
                                <td>{markingList.marks}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Vivacomponent;