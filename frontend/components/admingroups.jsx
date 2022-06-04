import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom"; 
import Select from 'react-select';
import '../adstyles/adminstyle.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';




class MarkingScheme extends Component{

    constructor(props)
    {
        super(props)
    
        this.state={
            // _id:'',
            groupid:'',
            topic:'',
            groupleadername:'',
            supervisor:'',
            cosupervisor:'',
            panelmember:'',
            name:'',
            panel:[],
            groups:[],
            selectedOption:[],
            changeItem:[],
            selectedgroup:'',
            options:[]

            
        }
    }

    componentDidMount(){


        fetch(`http://localhost:4000/adminUsers/adgroups`)
        .then((res) => res.json())
        .then((json) => {
            console.log("groupss" , json)
            this.setState({
                groups: json,
                DataisLoaded: true
            });

        })
        fetch(`http://localhost:4000/adminUsers/adpanel`)
        .then((res) => res.json())
        .then((json) => {
            console.log("Hellooo" , json)
            this.setState({
                panel: json,
                DataisLoaded: true
            });
            let obj = []

            json.forEach(element => {
                let el = { value: element.name, label: element.name}
                obj.push(el)
            });

            this.setState({
                options:obj
                
            })
        })

        
    }
    
    
    
    handleChange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value,
            
        })
       
    }
    handledChange = (selectedOption) => {this.setState({ selectedOption }, () =>console.log(`Option selected:`, this.state.selectedOption));};
    

    handleSubmit =(grp) =>{
        
        this.setState({
            selectedgroup: grp
        })
        console.log("adding the state", grp)
 

        
    }

    handleSave =() =>{
       
        // this.setState({
        //     selectedgroup: grp
        // })
        console.log("adding the state", this.state.selectedOption)
        console.log("group id", this.state.selectedgroup._id)

        let selectgrp = this.state.selectedgroup._id
        let name = this.state.selectedOption.value

              axios.patch(`http://localhost:4000/adminUsers/addpanel/${selectgrp}/${name}`,{
    
              })
              .then(response =>{
                  console.log(response)
                  alert("Successuly added")
                

          })
         // Do nothing!
              console.log("Thing was not saved to the database.");

        
    }
    
   

    render(){
        const {DataisLoaded, groups,panel,selectedOption} = this.state;

        

        if(!DataisLoaded && panel.length > 0) return <div>
        <h1>Please wait.................</h1></div>;

        return(
            <div className="App" style={{marginBottom:40}}>

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
                            Allocate Panel Members
                        </Typography>
                    
                    
            </Breadcrumbs>


             <div class="form-margin" >

                { this.state.selectedgroup &&(

                    <form>                                                  
                    <div>
                        <h1>{this.state.selectedgroup.groupid}</h1>
                        
                        <div class="form-group">
                            <label for="gpid">Present Panel Member : {this.state.selectedgroup.panelmember ? this.state.selectedgroup.panelmember:"Not assigned"}</label>               
                        </div>

                        <div class="form-group">
                            <label for="gpid">New Panel Member :</label> 
                            <Select value={selectedOption}onChange={this.handledChange}options={this.state.options}/>              
                        </div>

                        <div class="set-right">
                            <button type ="submit" class="btn btn-primary" onClick={this.handleSave}>Save</button>       
                        </div>
                        
                        
                    </div>




                    </form>

                )}
                 
             </div> 

             <div class="table-margin gap-top">

                <table class="table">
                            
                    <thead>
                        <tr>
                            <th scope="col">Group ID</th>
                            <th scope="col">Topic</th>
                            <th scope="col">Group Leader</th>
                            <th scope="col">Supervisor</th>
                            <th scope="col">Co-Supervisor</th>
                            <th scope="col">PanelMember</th>
                            <th scope="col"></th>
                        
                        </tr>
                    </thead>
                    
                    { 
                        (groups || []).map((group) => (
                
                            <tbody>
                                <tr>
                                    <th scope="row">{group.groupid}</th>
                                    <td>{group.topic}</td>
                                    <td>{group.groupleadername}</td>
                                    <td>{group.supervisor}</td>
                                    <td>{group.cosupervisor}</td>
                                    <td>{group.panelmember ? group.panelmember:"Not assigned"}</td>
                                    <td><button class="btn btn-warning" onClick={()=>{
                                        
                                        this.handleSubmit(group)}}>Update</button></td>
                                    
                                                                
                                </tr>
                            </tbody>
                            
                            
                    
                            )) 
                                                
                    }
                            
                            
                </table>


             </div>
                

                

                            
                            



            </div>
        );
    }
}


export default MarkingScheme;