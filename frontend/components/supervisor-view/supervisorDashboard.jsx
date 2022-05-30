import React, { Component } from "react";
import './supervisorDashboard.css';
import welcome from '../../assets/images/welcome-img.png'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import { Button, Spinner } from 'react-bootstrap';
import group from '../../assets/images/group-img.png';
import marking from '../../assets/images/marking-img.png';
import chat from '../../assets/images/chat-img.png';
import topic from '../../assets/images/topic-img.png';
import request from '../../assets/images/requests-img.png';

class SupervisorDashboard extends Component {
    render() {
        return (
            <div>
                <p className="welcome-txt">Welcome</p>
                <div className="welcome-img">
                    <img src={welcome} height={'50%'}/>
                </div>
                <div className="card-container">
                    <MDBRow className='row-cols-1 row-cols-md-5 g-4'>
                        <MDBCol>
                            <MDBCard className="card">
                                <MDBCardImage src={group} position="top"></MDBCardImage>
                                <MDBCardBody className="card-body">
                                    <Button variant="primary">
                                        View Groups
                                    </Button>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className="card">
                                <MDBCardImage src={marking} position="top"></MDBCardImage>
                                <MDBCardBody className="card-body">
                                    <Button variant="primary">
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
                                    <Button variant="primary">
                                        View Topics and Accept
                                    </Button>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className="card">
                                <MDBCardImage src={request} position="top"></MDBCardImage>
                                <MDBCardBody className="card-body">
                                    <Button variant="primary">
                                        View Requests
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