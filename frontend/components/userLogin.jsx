import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

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
            }
            // localStorage.setItem("userid", response.data)

        }).catch(error=>{
            console.error(error)
            alert("Invalid credentials")
        })
    }

    render(){
        const{email,password} = this.state

        return(
            <div className="container" style={{width: 500}}>
                <br></br>
            <form onSubmit={this.handleSubmit}>
                <div class="mb-3">
                    <label for="email" class="form-label">E-Mail</label>
                    <input type="email" class="form-control" name="email" value={email} onChange={this.handleChange} required/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" value={password} onChange={this.handleChange} required/>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <br></br>
            </div>
        )
    }
}

export default userLogin;