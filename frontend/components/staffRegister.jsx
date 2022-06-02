import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as React from 'react';

class staffRegister extends Component{

constructor(props){
    super(props)

    this.state={
        name:'',
        email:'',
        password:'',
        role:'',
        specialisation:''
    }
}

handleChange =(e) =>{

    this.setState({
        [e.target.name]: e.target.value,
    })
    if(e.target.value === "Supervisor"){
        document.getElementById('specialisation').disabled=false
    }else if(e.target.value === "Panel Member"){
        document.getElementById('specialisation').disabled=true
    }
}

handleSubmit =(e) =>{
    e.preventDefault()
    axios.post('http://localhost:4000/users/staff',this.state,{

    })
    .then(response =>{
        if(response.data.role === "Supervisor"){
            window.location.href = '/supervisordashboard'
        }else if(response.data.role === "Panel Member"){
            window.location.href = 'pmdashboard'
        }
        console.log(response)
    }).catch(error=>{
        console.error(error)
        alert("User Already Exists")
    })
}



clearAll = () => { 
    document.getElementById("regForm").reset();
  }

    render(){
        const options = [
            { label: 'Supervisor', value: 'Supervisor' },
            { label: 'Panel Member', value: 'Panel Member' },
        ]; 

        const{name,email,password,specialisation,role} = this.state

        return (
        <div className="container" style={{width: 500}}>
            <br></br>
            <h2>Register as Staff Member</h2>
            <form id="regForm" onSubmit={this.handleSubmit}>
                <br></br>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type='text' class="form-control" name='name' value={name} onChange={this.handleChange} required></input>
                </div>
                <br></br>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type='email' class="form-control" name='email' value={email} onChange={this.handleChange} required aria-describedby="emailHelp"></input>
                </div>
                <br></br>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type='password' class="form-control" name='password' value={password} onChange={this.handleChange} required></input>
                </div>
                <br></br>
                <div class="form-group">
                    <label for="role">Role</label>
                    <select type='text' class="form-control" id="role" name='role' value={role} onChange={this.handleChange}>
                        <option value="" disabled selected>--Select your role--</option>
                        {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <br></br>
                <div class="form-group">
                    <label for="specialisation">Specialisation</label>
                    <input type='text' class="form-control" name='specialisation' id="specialisation" value={specialisation} onChange={this.handleChange} disabled={true}></input>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary" style={{width: 250}}>Submit</button>
                <button type="clear" class="btn btn-danger" style={{width: 200}} onClick={()=>this.clearAll()}>Clear All</button>
            </form>
            <br></br>
            <br></br>
        </div>    

            
        )
    }
}

export default staffRegister;