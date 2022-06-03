import React from 'react';

const EditableRequest = ({editRequestFormData, handleEditRequestForm, handleEditCancel}) =>{
    
    return(
        <tr>
            <td>{editRequestFormData.groupid}</td>
            <td>{editRequestFormData.topic}</td>
            <td>{editRequestFormData.description}</td>
            <td>
                <div class="form-group form-inline">
                    <label for="stateSupervisor"><b>I will &nbsp;</b></label>
                    <input
                        type="text"
                        name="stateSupervisor"
                        required="required"
                        value={editRequestFormData.stateSupervisor}
                        onChange={handleEditRequestForm}
                    ></input>
                    <label for="accept"><b>&nbsp; this project</b></label>
                    <small id="passwordHelpInline" class="text-muted">
                        &nbsp; (Make sure that you have discussed with the team members before accepting or rejecting the topic)
                    </small>
                </div>
            </td>
            <td style={{display:'flex'}}>
                <button class="btn btn-primary" type="submit">Confirm</button>
                <div style={{paddingInline:'3px'}}></div>
                <button class="btn btn-danger" type="button" onClick={handleEditCancel}>Cancel</button>
            </td>
        </tr>
    );
}

export default EditableRequest;