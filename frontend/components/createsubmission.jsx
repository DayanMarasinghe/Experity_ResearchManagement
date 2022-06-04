import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import '../adstyles/adminstyle.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';

// import * as React from 'react';

class submission extends Component{

constructor(props){
    super(props)

    this.state={
        submissionname:'',
        description:'',
        deadline:'',
        document:'',
        template:'',
        markingscheme:''
    }
}

handleChange =(e) =>{

    this.setState({
        [e.target.name]: e.target.value,
    })

}
handleFileRead = async (event) => {
    const file = event.target.files[0]
    const base64 = await this.convertBase64(file)
    this.setState({
        [event.target.name]: base64,
    })
    console.log(base64)
  }

  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

handleSubmit =(e) =>{
    
    e.preventDefault()
    axios.post('http://localhost:4000/adminUsers/submission', this.state, {})
        .then(response => {
            console.log(response);
            alert('Submission added successfully!');
            window.location.href = '/viewsubmission'
        })
        .catch(error => {
            console.error(error);
            alert('An error occured')
        })
}

nextPage() {
    window.location.href = "/viewsubmission"
  }




clearAll = () => { 
    document.getElementById("regForm").reset();
  }

    render(){
        

        const{submissionname,description,originalFileName,deadline,document,template,markingscheme} = this.state

        return (

            <div className="App">

                <Breadcrumbs className="breadcrumb" aria-label="breadcrumb">
                    
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/addash"
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Dashboard
                    </Link>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <PostAddIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Create Submission
                    </Typography>
                
                
            </Breadcrumbs> 
            <div class="set-right">
                <button class="btn btn-outline-secondary " onClick={()=>{this.nextPage()}}>View Submission</button>
            </div>
          
            <div class="form-margin marg-bottom" >

            <form id="regForm" onSubmit={this.handleSubmit}>
                <br></br>
                <div class="form-group">
                    <label for="name">Submision Type</label>
                    <input type='text' class="form-control" name='submissionname' value={submissionname} onChange={this.handleChange} required></input>
                </div>

                <div class="form-group">
                    <label for="email">Description</label>
                    <input type='text' class="form-control" name='description' value={description} onChange={this.handleChange} required ></input>
                </div>

                <div class="form-group">
                    <label for="deadline">Deadline</label>
                    <input type='date' class="form-control" name='deadline' value={deadline} onChange={this.handleChange} required></input>
                </div>

                <div class="gap-margin">

                    <div>
                        <label for="deadline">Upload document</label>
                    </div>
                    
                    <TextField
                    id="document"
                    type="file"
                    inputProps={{ accept: 'image/*, .xlsx, .xls, .csv, .pdf, .pptx, .pptm, .ppt' }}
                    required
                    
                    name="document"
                    onChange={e => this.handleFileRead(e)}
                    size="small"
                    variant="standard"
                />

                </div>

                <div class="gap-margin">

                    <div>
                        <label for="deadline">Upload Template</label>
                    </div>

                    <TextField
                    id="template"
                    type="file"
                    inputProps={{ accept: 'image/*, .xlsx, .xls, .csv, .pdf, .pptx, .pptm, .ppt' }}
                    required
                    
                    name="template"
                    onChange={e => this.handleFileRead(e)}
                    size="small"
                    variant="standard"
                />

                </div>
                
                <div class="gap-margin">

                    <div>
                        <label for="deadline">Upload Marking Scheme</label>
                    </div>

                    <TextField
                    id="markingscheme"
                    type="file"
                    inputProps={{ accept: 'image/*, .xlsx, .xls, .csv, .pdf, .pptx, .pptm, .ppt' }}
                    required
                    
                    name="markingscheme"
                    onChange={e => this.handleFileRead(e)}
                    size="small"
                    variant="standard"
                />
                </div>
              

                <div class="set-right gap-margin">
                    <button type="submit" class="btn btn-primary" style={{width: 200}}>Save</button>
                </div>
                
                
            </form>

           </div>
            
            <br></br>
            <br></br>
        </div>    

            
        )
    }
}

export default submission;