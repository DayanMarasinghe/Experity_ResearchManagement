import React, { Component } from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import view from '../../assets/images/Brainstorming.png';
import eval from '../../assets/images/Videocall.png';


class pmDashboard extends Component {
    render() {
        const username = localStorage.getItem("panelmember");
        return (
            <div>
                <p className="welcome-txt">Welcome {username}</p>
                <div className="card-container">
                    <MDBRow className='row-cols-1 row-cols-md-5 g-4' center>
                        <MDBCol>
                            <MDBCard className="card">
                                <MDBCardImage src={view} position="top"></MDBCardImage>
                                <MDBCardBody className="card-body">
                                        <p>View Topics</p>
                                        <a href="/pmtopiceval" class="stretched-link"></a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className="card">
                                <MDBCardImage src={eval} position="top"></MDBCardImage>
                                <MDBCardBody className="card-body">
                                        <p>Evaluate Presentations</p>
                                        <a href="/pmevalgrpid" class="stretched-link"></a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
                <br></br><br></br><br></br><br></br>
            </div>
        );
    }
}

export default pmDashboard;