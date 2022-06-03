import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from './pmSchemeView'

class pmEvaluation extends Component{

constructor(props){
    super(props)

    this.state={
      groupid:'',
      topic:'',
      groupleaderid:'',
      groupleadername:'',
      membertwoid:'',
      membertwoname:'',
      memberthreeid:'',
      memberthreename:'',
      memberfourid:'',
      memberfourname:'',
    }
}

componentDidMount(){
  
  const user = localStorage.getItem("username");
    fetch(`http://localhost:4000/panelMarking/group/${user}`)
    .then((res) => res.json())
    .then((json) => {
        this.setState({
            groups: json,
            DataisLoaded: true
        });
    })
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
      const {DataisLoaded, groups} = this.state;

      if(!DataisLoaded) return <div>
      <h1>Please wait.................</h1></div>;

        return (
        <div> 
            <br></br>
            <h2 style={{marginLeft:500}}>Presentation Evaluation</h2>
        <div className="container" style={{width: 800}}>
        <br></br>
            <h5>Marking Scheme</h5>
            <Table></Table>
        </div>
        <br></br>
        <h5>Group Details</h5>
        {
          groups.map((grp) => (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{grp.topic} - {grp.groupid}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <form>
                <table class="table table-bordered" >
                    <tbody>
                        <tr>
                            <th>IT Number</th>
                            <th>Name</th>
                            <th>Marks</th>
                        </tr>
                        <tr>
                            <td>{grp.groupleaderid}</td>
                            <td>{grp.groupleadername}</td>
                            <td><input required></input></td>
                        </tr>
                        <tr>
                            <td>{grp.membertwoid}</td>
                            <td>{grp.membertwoname}</td>
                            <td><input required></input></td>
                        </tr>
                        <tr>
                            <td>{grp.memberthreeid}</td>
                            <td>{grp.memberthreename}</td>
                            <td><input required></input></td>
                        </tr>
                        <tr>
                            <td>{grp.memberfourid}</td>
                            <td>{grp.memberfourname}</td>
                            <td><input required></input></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" class="btn btn-primary">Enter</button>
            </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
        <br></br><br></br><br></br>
        </div>
            
        )
    }
}

export default pmEvaluation;