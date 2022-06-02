import React, { Component } from "react";
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

class GroupView extends Component{
    render(){
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
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography><b>GRP_123</b> &nbsp; &nbsp; Health monitor system </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <ul>
                                    <li>Group Leader ID: &nbsp; IT19989999</li>
                                    <li>Group Leader Name: &nbsp; Name 01</li>
                                    <li>Member One ID: &nbsp; IT19989999</li>
                                    <li>Member One Name: &nbsp; Name 02</li>
                                    <li>Member Two ID: &nbsp; IT19989999</li>
                                    <li>Member Two Name: &nbsp; Name 03</li>
                                    <li>Member Three ID: &nbsp; IT19989999</li>
                                    <li>Member Three Name: &nbsp; Name 04</li>
                                </ul>
                                <div className="btn-container">
                                    <Button type="primary">
                                        Add evaluation
                                    </Button>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            
        );
    }
}
export default GroupView;