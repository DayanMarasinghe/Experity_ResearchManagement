import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom"; 
import Base64Downloader from 'common-base64-downloader-react';
import '../adstyles/adminstyle.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Redirect } from "react-router";

class MarkingScheme extends Component{

    constructor(props)
    {
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

    componentDidMount(){


        fetch(`http://localhost:4000/adminUsers/getsubmission`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                submissions: json,
                DataisLoaded: true
                
            });
            
        })
        
    }
    
    
    handleChange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value,
            
        })
       
    }
   


    handleSubmit =(id) =>{
        e.preventDefault()
        

            axios.patch(`http://localhost:4000/adminUsers/addpanel/${id}`,{
    
            })
            .then(response =>{
                console.log(response)
                window.location.href = "/adminmarkingshboard"
                

        })
        // Do nothing!
            console.log("Thing was not saved to the database.");
        
    }
    


      refreshPage() {
        window.location.reload(false);
      }

      nextPage() {
        window.location.href = "/submission"
      }


      removesubmission =(id) =>{

        const answer = window.confirm("Are you sure to remove this user?");
        
        if (answer) {
            axios.delete(`http://localhost:4000/adminUsers/delsubmission/${id._id}`,{
        })
        .then(response =>{

            console.log(response)
            
            alert('Submission deleted successfully!');
            window.location.reload(true);
           
        })
          } else {
            // Do nothing!
            console.log("Thing was not saved to the database.");
          }
       
        
    }
  

    render(){
        const {DataisLoaded, submissions} = this.state;

        

        if(!DataisLoaded) return <div>
        <h1>Please wait.................</h1></div>;

        return(
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
                            View Submissions
                        </Typography>
                    
                    
                </Breadcrumbs> 
                <div class="set-right">
                    <button class="btn btn-outline-secondary " onClick={()=>{this.nextPage()}}>Create</button>
                </div>
                    
                
                
                
                <div class="view-sub">

                    <div>
                        { 
                            (submissions || []).map((submission) => (
                    
                                <div style={{marginBottom:30,padding:20,background:"white"}} >
                                    <div >
                                        <h3 style={{color:"#0d6efd"}}>{submission.submissionname}</h3>
                                        <p >Description : {submission.description}</p>
                                        <p class="redtext">Deadline : {submission.deadline}</p>
                                        
                                            <p style={{color:"blue"}}>Download  </p>
                                            <Base64Downloader class="base64"  base64={submission.template} downloadName="pdfDownload">
                                                Template
                                            </Base64Downloader>

                                        
                                            <Base64Downloader base64={submission.document} downloadName="pdfDownload">
                                            Document
                                            </Base64Downloader>
                                            <Base64Downloader base64={submission.markingscheme} downloadName="pdfDownload">
                                            Marking Scheme
                                            </Base64Downloader>
                                        
                                            <div class="set-right">
                                                <button class="btn btn-outline-danger set-indi-margin" onClick={()=>{this.removesubmission(submission)}}>Delete</button>
                                            </div>

                                        
                                    </div>
                                </div>
                                
                                
                                
                        
                                )) 
                                                    
                        }
                        </div>

                </div>
                
                                




            </div>
        );
    }
}


export default MarkingScheme;