import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import staff from '../assets/images/staff.png';
import student from '../assets/images/student.png';
import './supervisor-view/supervisorDashboard.css';

class userRegister extends Component{

    render(){
        return(
        <div>
            <br></br>
            <div className="container" style={{width: 1000}}>
            <div className="card-container">
            <div class="row">
            <div className="col col-md-3">
            <Card style={{ width: '18rem' , marginLeft:80}}>
                <Card.Img variant="top" src={staff} />
                <Card.Body>
                <Card.Title>Register as a Staff Member</Card.Title>
                    <a href="./staffreg" class="stretched-link"></a>
                </Card.Body>
            </Card>
            </div>
            <div className="col col-md-3">
            <Card style={{ width: '18rem', marginLeft:300}}>
                <Card.Img variant="top" src={student} />
                <Card.Body>
                <Card.Title>Register as a Student</Card.Title>
                    <a href="./studentreg" class="stretched-link"></a>
                </Card.Body>
            </Card>
            </div>
            </div>
            </div>
            </div>
            <br></br><br></br><br></br>
        </div>
        );
    }
}

export default userRegister;