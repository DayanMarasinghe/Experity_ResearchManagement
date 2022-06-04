import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.jpg';

class userLogin extends Component{

    constructor(props){
        super(props)
    
        this.state={
            email:'',
            password:''
        }
    }
    
    handleChange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit =(e) =>{
        e.preventDefault()

        axios.post('http://localhost:4000/users/login',this.state,{

        })
        .then(response =>{
            console.log(response.data)
            alert("Logged in successfully")
            if(response.data.role === "Supervisor"){
                window.location.href = '/supervisordashboard'
            }else if(response.data.role === "Panel Member"){
                window.location.href = 'pmdashboard'
            }else if(response.data.role === "Student"){
                window.location.href = 'studentdashboard'
            }else{
                window.location.href = '#'
            }

            localStorage.setItem("panelmember", response.data.name)

        }).catch(error=>{
            console.error(error)
            alert("Invalid credentials")
        })
    }

    render(){
        const{email,password} = this.state

        return(
            <div>
            <div className="container">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide" />
                        <Carousel.Caption>
                            <h5>What is a research?</h5>
                            <p>The systematic investigation into and study of materials and sources in order to establish facts and reach new conclusions.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide" />
                        <Carousel.Caption>
                            <h5>Purpose of a research</h5>
                            <p>The primary purposes of basic research are documentation, discovery, interpretation, and the research and development of methods and systems for the advancement of human knowledge.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide" />
                        <Carousel.Caption>
                            <h5>Why a research?</h5>
                            <p>Research in simplest terms is searching for knowledge and searching for truth.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                <div className="container" style={{ width: 500 }}>
                    <br></br>
                    <h2>Login to continue</h2>
                    <br></br>
                    <form onSubmit={this.handleSubmit}>
                        <div class="mb-3">
                            <label for="email" class="form-label">E-Mail</label>
                            <input type="email" class="form-control" name="email" value={email} onChange={this.handleChange} required />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" value={password} onChange={this.handleChange} required />
                        </div>
                        <button id="login" type="submit" class="btn btn-primary">Login</button>
                    </form>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default userLogin;