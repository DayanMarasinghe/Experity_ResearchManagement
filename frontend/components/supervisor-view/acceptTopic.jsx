import React, { Component } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class AcceptTopic extends Component{

    render(){
        const options = [
            { label: 'Accept', value: 'Accept' },
            { label: 'Reject', value: 'Reject' },
        ]; 
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
                    <form>
                        <p className="group-txt">Topic Requests</p>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    <b>Topic: </b> Health monitor system
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>GRP_123</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <b>Description : </b>
                                    <p>The content of Accordions is mounted by default even if the accordion is not expanded.This default behavior has server-side rendering and SEO in mind.If you render expensive component trees inside your accordion details or simply render many accordions it might be a good idea to change this default behavior by enabling the </p>
                                    <div class="form-group form-inline">
                                        <label for="accept"><b>I will &nbsp;</b></label>
                                        <select type='text' class="form-control" id="accept" name='accept'>
                                            <option value="" disabled selected>Accept or Reject</option>
                                            {options.map((option) => (
                                                <option value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                        <label for="accept"><b>&nbsp; this project</b></label>
                                        <small id="passwordHelpInline" class="text-muted">
                                            &nbsp; (Make sure that you have discussed with the team members before accepting or rejecting the topic)
                                        </small>
                                    </div>
                                    <div className="btn-container">
                                        <Button type="primary">
                                            Submit
                                        </Button>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </form>
                </div>
            </div>
        );
    }

}

export default AcceptTopic;