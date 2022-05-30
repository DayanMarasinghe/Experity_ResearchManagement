import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class userRegister extends Component{

    render(){
        return(
        <div>
            <br></br>
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                <Card.Title>Register as a Student</Card.Title>
                    <a href="./studentreg" class="stretched-link"></a>
                </Card.Body>
            </Card>
            </div>
            <br></br>
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                <Card.Title>Register as a Staff Member</Card.Title>
                    <a href="./staffreg" class="stretched-link"></a>
                </Card.Body>
            </Card>
            </div>
        </div>
        );
    }
}

export default userRegister;