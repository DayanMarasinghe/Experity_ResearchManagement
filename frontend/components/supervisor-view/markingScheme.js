import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from "react-bootstrap";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { Link as RouterLink } from "react-router-dom";
// import PMMarksTable from '../panelmember-view/pmSchemeView';
import Vivacomponent from "./vivacomponent";
import Documentcomponent from "./documentmarking";

function MarkingSchemeView(){
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
                    <AssignmentOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Marking Schemes
                </Typography>
            </Breadcrumbs>
            <div className="grp-container">
                <p className="group-txt">Marking Schemes</p>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography><b>Viva Marking Scheme</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Vivacomponent></Vivacomponent>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography><b>Document Marking Scheme</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <Documentcomponent></Documentcomponent>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

export default MarkingSchemeView;