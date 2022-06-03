import React from "react";

const ReadonlyRequest = ({requestsList, handleEditClick}) => {
    
    return(
        <tr>
            <td>{requestsList.groupid}</td>
            <td>{requestsList.topic}</td>
            <td>{requestsList.description}</td>
            <td>{requestsList.stateSupervisor}</td>
            <td>
                <button
                    type="button"
                    class="btn btn-primary"
                    onClick={(event) => handleEditClick(event, requestsList)}
                >
                    Accept or Reject
                </button>
            </td>
        </tr>
    );

}

export default ReadonlyRequest;