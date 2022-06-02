import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class showUser extends Component{

constructor(props){
    super(props)

    this.state={
        name:'',
        email:'',
        password:'',
        role:'Student',
        itnumber:''
    }
}

handleChange =(e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit =(e) =>{
    e.preventDefault()
    axios.post('http://localhost:4000/users/student',this.state,{

    })
    .then(response =>{
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
        const{name,email,password,itnumber} = this.state

        return (
        <div className="container" style={{width: 500}}>
            <h2>Register as Student</h2>
            <form id="regForm" onSubmit={this.handleSubmit}>
                <br></br>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type='text' class="form-control" name='name' value={name} onChange={this.handleChange} required></input>
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type='email' class="form-control" name='email' value={email} onChange={this.handleChange} required aria-describedby="emailHelp"></input>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type='password' class="form-control" name='password' value={password} onChange={this.handleChange} required></input>
                </div>
                <div class="form-group">
                    <label for="itnumber">IT No</label>
                    <input type='text' class="form-control" name='itnumber' value={itnumber} onChange={this.handleChange} required></input>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary" style={{width: 250}}>Submit</button>
                <button class="btn btn-danger" style={{width: 200}} onClick={()=>this.clearAll()}>Clear All</button>
            </form>

            <br></br>
        </div>    

            
        )
    }
}

export default showUser;