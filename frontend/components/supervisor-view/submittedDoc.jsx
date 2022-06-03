import React, { Component, useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './submittedDoc.css';
import { Button } from "react-bootstrap";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Link as RouterLink } from "react-router-dom";
import GoogleDocsViewer from 'react-google-docs-viewer';


function SubmittedDocs(){

    const [docs, setDocs] = useState([]);
    const Saman = 'Saman'

    useEffect(() => {
        fetch(`http://localhost:4000/submitted/supervisor/${Saman}`)
            .then(resp => resp.json())
            .then(resp => {
                setDocs(resp)
            })
    }, [])

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
                    <ArticleOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Student Submissions
                </Typography>
            </Breadcrumbs>
            <div className="grp-container">
                <p className="group-txt">Student Submissions</p>
                {
                    docs.map((docsList) => (
                        <Accordion key={docsList._id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography><b>{docsList.groupid}</b> &nbsp; &nbsp; {docsList.assignment} </Typography>
                            </AccordionSummary>
                            <AccordionDetails className="accordion">
                                    <div>
                                        <iframe
                                            style={{ width: '100%', height: '100%', overflow:'scroll'}}
                                            src={docsList.documentLink} 
                                        >
                                        </iframe>
                                    </div>
                                    <div className="btn-container">
                                        <Button variant="primary" as={RouterLink}
                                            to="/addevaluation">
                                            Add Evaluation
                                        </Button>
                                    </div>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </div>
        </div>
    );
}

export default SubmittedDocs;