import React, { Component, useState, useEffect, Fragment } from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReadonlyRequest from "./readonlyRequests";
import EditableRequest from "./editableRequest";
import axios from 'axios';

function AcceptTopic(){

    //state for viewing requests
    const [requests, setRequests] = useState([]);

    //id of the editing row
    const [editRequestId, setEditRequestId] = useState(null);

    const requestedSupervisor = 'Saman';

    //state for keeping the currently edited movie
    const [editRequestFormData, setEditRequestFormData] = useState({
        groupid: '',
        topic: '',
        description: '',
        stateSupervisor: '',
    });

    //fetch the current reuests for a supervisor
    useEffect(() => {
        fetch(`http://localhost:4000/requests/supervisor/${requestedSupervisor}`)
            .then(resp => resp.json())
            .then(resp => {
                setRequests(resp);
            })
    }, [])

    //editing of the row
    const handleEditRequestForm = (event) => {
        event.preventDefault();

        //get data from the form
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        //set the new data
        const newFormData = {...editRequestFormData};

        //update form with the new data
        newFormData[fieldName] = fieldValue;

        setEditRequestFormData(newFormData);
    }

    //showing the edit row
    const handleEditClick = (event, requestsList) => {
        event.preventDefault();
        setEditRequestId(requestsList._id);

        const formValues = {
            groupid: requestsList.groupid,
            topic: requestsList.topic,
            description: requestsList.description,
            stateSupervisor: requestsList.stateSupervisor,
        }

        setEditRequestFormData(formValues);

    }

    const handleEditCancel = () => {
        setEditRequestId(null);
    }

    //sending the updated movie
    const handleEditRequestSubmit= (event) =>{
        event.preventDefault();

        const editedRequest = {
            id: editRequestId,
            groupid: editRequestFormData.groupid,
            topic: editRequestFormData.topic,
            description: editRequestFormData.description,
            stateSupervisor: editRequestFormData.stateSupervisor,
        }

        const requestPatch = {
            stateSupervisor: editRequestFormData.stateSupervisor
        }

        const newRequsets = [...requests];

        //axios call to patch the request
        axios.patch(`http://localhost:4000/requests/${editRequestId}`, requestPatch)
            .then(response => {
                console.log(response);
                alert('You ' + requestPatch.stateSupervisor + ' the request')

                const index = requests.findIndex((requestsList) => requestsList._id === editRequestId);
                newRequsets[index] = editedRequest;

                setRequests(newRequsets);
                setEditRequestId(null);
            })
            .catch((error) => {
                console.log("Error ", error);
                alert('An unexpected error occured')
            })
        
    }

    return(
        <div>
            <Breadcrumbs className="breadcrumb" aria-label="breadcrumb">
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/supervisordashboard"
                >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Dashboard
                </Link>
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                >
                    <TipsAndUpdatesIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Topic Requests
                </Typography>
            </Breadcrumbs>
            <div className="grp-container">
                <p className="group-txt">Topic Requests</p>
                <form onSubmit={handleEditRequestSubmit}>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Group ID</th>
                                <th scope="col">Topic</th>
                                <th scope="col">Description</th>
                                <th scope="col">Acceptance</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                requests.map((requestsList) => (
                                    <Fragment>{
                                        editRequestId === requestsList._id ? (
                                            <EditableRequest
                                                editRequestFormData={editRequestFormData}
                                                handleEditRequestForm={handleEditRequestForm}
                                                handleEditCancel={handleEditCancel}
                                            />
                                        ):(
                                            <ReadonlyRequest
                                                requestsList={requestsList}
                                                handleEditClick={handleEditClick}
                                            />
                                        )
                                    }  
                                    </Fragment>
                                ))
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );

}

export default AcceptTopic;