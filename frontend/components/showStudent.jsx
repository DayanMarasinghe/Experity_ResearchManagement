import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class studentUpdate extends Component{

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



    render(){
       

        return (
        
            <h1>Hi </h1>
            
        )
    }
}

export default studentUpdate;