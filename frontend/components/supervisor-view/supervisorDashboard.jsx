import React, { Component } from "react";
import './supervisorDashboard.css';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import { Button, Spinner } from 'react-bootstrap';
import group from '../../assets/images/group-img.png';
import marking from '../../assets/images/marking-img.png';
import chat from '../../assets/images/chat-img.png';
import topic from '../../assets/images/topic-img.png';
import { Link } from "react-router-dom";
import evaluation from '../../assets/images/evaluation.png';
import welcome from '../../assets/images/welcomeimg.png';
import docs from '../../assets/images/docs.png';

class SupervisorDashboard extends Component {
    
    render() {
        return (
            <div>
                <p className="welcome-txt">Welcome Back</p>
                {/*<div className="welcome-img">
                    <img src={welcome} style={{height : '250px', width:'0px'}}/>
                </div>*/}
                <div className="card-container">
                    <MDBRow className='row-cols-2 row-cols-md-6 g-4'>
                        <MDBCol>
                            <MDBCard className="card">
                                <MDBCardImage src={group} position="top"></MDBCardImage>
                                <MDBCardBody className="card-body">
                                    <Button variant="primary" as={Link}
                                        to="/group">
                                        View Groups
                                    </Button>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className="card">
                                <MDBCardImage src={marking} position="top"></MDBCardImage>
                                <MDBCardBody className="card-body">
                                    <Button variant="primary" as={Link}
                                        to="/addevaluation">
                                        Evaluations
                                    </Button> 
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className="card">
                                <MDBCardImage src={chat} position="top"></MDBCardImage>
                                <MDBCardBody className="card-body">
                                    <Button variant="primary">
                                       Chat with students
                                    </Button>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className="card">
                                <MDBCardImage src={topic} position="top"></MDBCardImage>
                                <MDBCardBody className="card-body">
                                    <Button variant="primary" as={Link}
                                        to="/accepttopic">
                                        View Topics and Accept
                                    </Button>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className="card">
                                <MDBCardImage src={evaluation} position="top"></MDBCardImage>
                                <MDBCardBody className="card-body">
                                    <Button variant="primary" as={Link}
                                        to="/markingSchemes">
                                        View Marking Schemes
                                    </Button>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className="card">
                                <MDBCardImage src={docs} position="top"></MDBCardImage>
                                <MDBCardBody className="card-body">
                                    <Button variant="primary" as={Link}
                                        to="/studentdocs">
                                        Student Submissions
                                    </Button>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
        );
    }
}

export default SupervisorDashboard;