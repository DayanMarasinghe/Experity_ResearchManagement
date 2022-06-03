import React, { Component, useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './groupview.css';
import { Button } from "react-bootstrap";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link as RouterLink } from "react-router-dom";

function GroupView(){

    const [groups, setGroups] = useState([]);
    const Saman = 'Saman'

    useEffect(() => {
        fetch(`http://localhost:4000/groups/supervisor/${Saman}`)
            .then(resp => resp.json())
            .then(resp => {
                setGroups(resp)
            })
    }, [])

    //search bar should come
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
                <GroupsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Assigned Groups
                </Typography>
            </Breadcrumbs>
            <div className="grp-container">
                <p className="group-txt">Assigned Groups</p>
                {
                    groups.map((grouplist) => (
                        <Accordion key={grouplist._id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography><b>{grouplist.groupid}</b> &nbsp; &nbsp; {grouplist.topic} </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <ul>
                                        <p><b>Group Leader</b></p>
                                        <li>ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grouplist.groupleaderid}</li>
                                        <li>Name: &nbsp; {grouplist.groupleadername}</li>
                                        <br></br>
                                        <p><b>Member Two</b></p>
                                        <li>ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grouplist.membertwoid}</li>
                                        <li>Name: &nbsp;{grouplist.membertwoname}</li>
                                        <br></br>
                                        <p><b>Member Three</b></p>
                                        <li>ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grouplist.memberthreeid}</li>
                                        <li>Name: &nbsp; {grouplist.memberthreename}</li>
                                        <br></br>
                                        <p><b>Member Four</b></p>
                                        <li>ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grouplist.memberfourid}</li>
                                        <li>Name: &nbsp; {grouplist.memberfourname}</li>
                                    </ul>
                                    <div className="btn-container">
                                        <Button variant="primary" as={RouterLink}
                                            to="/addevaluation">
                                            Add Evaluation
                                        </Button>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
                </div>
            </div>
            
        );
}
export default GroupView;