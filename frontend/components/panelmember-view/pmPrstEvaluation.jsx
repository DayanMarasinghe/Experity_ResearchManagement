import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class pmEvaluation extends Component{

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
}

// handleSubmit =(e) =>{
//     e.preventDefault()
//     axios.post('http://localhost:4000/users/staff',this.state,{

//     })
//     .then(response =>{
//         console.log(response)
//     }).catch(error=>{
//         console.error(error)
//         alert("User Already Exists")
//     })
// }

    render(){
        const{name,email,password,specialisation,role} = this.state

        return (
        <div>
            <br></br>
            <h2 style={{marginLeft:500}}>Presentation Evaluation</h2>
        <div className="container" style={{width: 800}}>
        <br></br>
            <h5>Marking Scheme</h5>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th scope="col">Criteria</th>
                        <th scope="col">Marks</th>
                    </tr>
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
        <br></br>
        <h5>Group Details</h5>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <form>
                <table class="table table-bordered" >
                    <tbody>
                        <tr>
                            <td>IT Number</td>
                            <td>Name</td>
                            <td>Marks</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><input required></input></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><input required></input></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><input required></input></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><input required></input></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" class="btn btn-primary">Enter</button>
            </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        <br></br><br></br><br></br>
        </div>
            
        )
    }
}

export default pmEvaluation;