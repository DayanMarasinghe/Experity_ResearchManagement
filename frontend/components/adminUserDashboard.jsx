import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../adstyles/adminstyle.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useHistory } from "react-router-dom";

class AdminUser extends Component{

    constructor(props)
    {
        super(props)
    
        this.state={
            name:'',
            role:'',
            specialisation:'',
            itnumber:''
            
        }
        
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount(){

        //const id = localStorage.getItem("userid");

        fetch(`http://localhost:4000/adminUsers/allUser`)
        .then((res) => res.json())
        .then((json) => {
            
        
            const obj = json

            console.log("State seted",json)

            let students = []
            let supervisor = []
            let panelMember = []
            
            students = obj.filter(usertype => usertype.role == "Student")
            supervisor = obj.filter(usertype => usertype.role == "Supervisor")
            panelMember = obj.filter(usertype => usertype.role == "Panel Member")

            

            this.setState({
                users:students, 
                students: students,
                supervisor:supervisor,
                panelMember:panelMember,
                role:"Student",
                DataisLoaded: true
            });

            

            console.log("Studens",students)


            //this.filterRoles()
        })

    }
    

    filterRoles(){

        //const id = localStorage.getItem("userid");

       console.log(users + "Studnet roles")
    }

    handleRemove =(id) =>{

        const answer = window.confirm("Are you sure to remove this user?");
        
        if (answer) {
            axios.delete(`http://localhost:4000/adminUsers/deluser/${id}`,{
            })
                .then(response =>{

            console.log(response)
            alert("Successfully Deleted");
            window.location.href = "/adminUSdashboard"
        })
          } else {
            // Do nothing!
            console.log("Thing was not saved to the database.");
          }
        
    }


    handleUpdate =(id) =>{


        if(id.role == "Student"){

            this.setState({
                forms : id,
                name:id.name,
                role:id.role,
                itnumber : id.itnumber
                
                
            });

        }else if(id.role == "Supervisor" || id.role == "Panel Member" ){
            this.setState({
                forms : id,
                name:id.name,
                role:id.role,
                specialisation: id.specialisation
                
                
            });
        }
      

   
        /*axios.post(`http://localhost:4000/adminUsers/userUpdate/${id}`, this.state, {})
            .then(response => {
                console.log(response)
                alert('Logged in')
                window.location.href ='/movieadmindashboard'
            })
            .catch(error => {
                console.error(error);
                alert('Incorrect credentials')
            })*/
    }

    userUpdate =(id) =>{

        let objc = ""

        if(id.role == "Student"){
            id.name = this.state.name
            id.role = this.state.role

            objc = {
                name : id.name,
                role : id.role,
                itnumber : id.itnumber
            }
        
        }else if(id.role == "Supervisor" || id.role == "Panel Member" ){

            id.name = this.state.name
            id.role = this.state.role
            id.specialisation = this.state.specialisation

            objc = {
                name : id.name,
                role : id.role,
                specialisation: id.specialisation
            }
        }
      

      

        if(objc){

            axios.put(`http://localhost:4000/adminUsers/userUpdate/${id._id}`, this.state, {})
            .then(response => {
                console.log(response)
                alert('Successfully Updated')
                window.location.href ='/'
            })
            .catch(error => {
                console.error(error);
                alert('Incorrect credentials')
            })
        
        }else{
            alert("Please Change All details")
        }
  
      
    //   this.setState({
    //     forms : null
        
    // });

       
    }
    handlechangeUsertable =() =>{

        const stu = this.state.students
        
         this.setState({
           users : stu,
           role:"Student"
                
         });
    }
    handlechangeSupertable =() =>{
        const supervice = this.state.supervisor
        
        
         this.setState({
           users : supervice,
           role:"Supervisor"
                
         });
    }
    handlechangePaneltable =() =>{
        const panel = this.state.panelMember
        
         this.setState({
           users : panel,
           role:"Panel Member"
                
         });
    }

     refreshPage() {
        window.location.reload(false);
      }
      

    render(){
        const {DataisLoaded, users,students,role} = this.state;

        const options = [
            { label: 'Supervisor', value: 'Supervisor' },
            { label: 'Student', value: 'Student' },
            { label: 'Panel Member', value: 'Panel Member' },
        ]; 

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
                            <PersonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Users
                        </Typography>
                    
                    
                </Breadcrumbs> 
                <div class="set-right">
                        <button class="btn btn-outline-secondary " onClick={()=>{this.handlechangeUsertable()}}>Student</button>
                        <button class="btn btn-outline-secondary set-indi-margin" onClick={()=>{this.handlechangeSupertable()}}>Supervisor</button>
                        <button class="btn btn-outline-secondary set-indi-margin" onClick={()=>{this.handlechangePaneltable()}}>Panel Member</button>
                    </div>
                
                <div>

                <div class="form-margin" >
                    
                    {
                    
                    (this.state.forms && this.state.forms.role == "Student") &&
                    
                    <form class="form-group">
                        <h1>{this.state.forms.name}</h1>
                        
                        <div class="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" name ="name" value={this.state.name} onChange={this.handleChange} placeholder="Example input"></input>
                        </div>
                        
                        <div class="set-right-fm">
                            <button type="submit" class="btn btn-primary" onClick={()=> {this.userUpdate(this.state.forms)}}>Save</button>      
                        </div>

                       
                    </form>
                }
                {
                
                (this.state.forms && this.state.forms.role == "Supervisor") &&
                
                <form>
                        <h1>{this.state.forms.name}</h1>
                        
                        <div class="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" name ="name" value={this.state.name} onChange={this.handleChange} placeholder="Example input"></input>
                        </div>
                                                

                        <div class="form-group">
                            <label for="formGroupExampleInput2">Specialisation</label>
                            <input type="text" class="form-control" name = "specialisation" value={this.state.specialisation} onChange={this.handleChange} id="formGroupExampleInput2" placeholder="Another input"></input>
                        </div>
                        

                        <div class="set-right-fm">
                            <button type="submit" class="btn btn-primary" onClick={()=> {this.userUpdate(this.state.forms)}}>Save</button>
                        </div>
                        
                    </form>
                }
                
                {
                
                (this.state.forms && this.state.forms.role == "Panel Member") &&
                
                <form>
                        <h1>{this.state.forms.name}</h1>


                        <div class="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" name ="name" value={this.state.name} onChange={this.handleChange} placeholder="Example input"></input>
                        </div>
                        
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Specialisation</label>
                            <input type="text" class="form-control" name = "specialisation" value={this.state.specialisation} onChange={this.handleChange} id="formGroupExampleInput2" placeholder="Another input"></input>
                        </div>
                        
                        <div class="set-right-fm">
                            <button type="submit" class="btn btn-primary" onClick={()=> {this.userUpdate(this.state.forms)}}>Save</button>
                        </div>

                        
                    </form>
                }

                </div>




                <div class="table-margin">
                    <table class="table">
                    {  role == "Student" &&(
                        <thead>
                        <tr>
                        <th scope="col">IT Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        
                        </tr>
                    </thead>

                    )
                        
                    }
                    {  (role == "Supervisor" || role == "Panel Member" )  &&(
                        <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Spec</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        
                        </tr>
                    </thead>

                    )
                        
                    }    
                    
                    { role == "Student" &&(
                        users.map((user) => (
                
                            <tbody>
                                <tr>
                                <th scope="row">{user.itnumber}</th>
                                <td>{user.name}</td>
                                <td>{user.role}</td>                      
                                <td><button class="btn btn-warning" onClick={()=>{this.handleUpdate(user)}}>Update</button></td>
                                <td><button class="btn btn-danger" onClick={()=>{this.handleRemove(user._id)}}>Remove</button></td>
                                </tr>
                                
                            </tbody>

                        
                            ))
                    )

                    }


                    { (role == "Supervisor" || role == "Panel Member" )  &&(
                        users.map((user) => (
                
                            <tbody>
                                <tr>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.specialisation}</td>                               
                                <td><button class="btn btn-warning" onClick={()=>{this.handleUpdate(user)}}>Update</button></td>
                                <td><button class="btn btn-danger" onClick={()=>{this.handleRemove(user._id)}}>Remove</button></td>
                                </tr>
                                
                            </tbody>

                        
                            ))
                    )

                    }
                    </table>
                </div>

                </div>
                
                

                
               


            </div>


        );
    }
}


export default AdminUser;