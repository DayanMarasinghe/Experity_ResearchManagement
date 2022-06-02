import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
        alert(id);
        axios.delete(`http://localhost:4000/adminUsers/deluser/${id}`,{
        })
        .then(response =>{

            console.log(response)
        })
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
                alert('Logged in')
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
      showAlert() {
        window.location.href = "/payment"
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
                <h1>Your Cart</h1> 
                
                <button onClick={()=>{this.handlechangeUsertable()}}>Student</button>
                <button onClick={()=>{this.handlechangeSupertable()}}>Supervisor</button>
                <button onClick={()=>{this.handlechangePaneltable()}}>Panel Member</button>

                <table class="table">
                  {  role == "Student" &&(
                      <thead>
                      <tr>
                      <th scope="col">IT Number</th>
                      <th scope="col">Name</th>
                      <th scope="col">Role</th>
                      
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
                            <td><button class="btn btn-warning" onClick={()=>{this.handleRemove(user._id)}}>Remove</button></td>
                            <td><button class="btn btn-danger" onClick={()=>{this.handleUpdate(user)}}>Update</button></td>
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
                            <td><button class="btn btn-warning" onClick={()=>{this.handleRemove(user._id)}}>Remove</button></td>
                            <td><button class="btn btn-danger" onClick={()=>{this.handleUpdate(user)}}>Update</button></td>
                            </tr>
                            
                        </tbody>

                       
                        ))
                )

                }
                </table>


                {
                 
                    (this.state.forms && this.state.forms.role == "Student") &&
                   
                    <form>
                         <h1>{this.state.forms.name}</h1>
                         
                        <div class="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" name ="name" value={this.state.name} onChange={this.handleChange} placeholder="Example input"></input>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Role</label>
                            <input type="text" class="form-control" name = "role" value={this.state.role} onChange={this.handleChange} id="formGroupExampleInput2" placeholder="Another input"></input>
                        </div>
                        

                        <button type="submit" class="btn btn-primary" onClick={()=> {this.userUpdate(this.state.forms)}}>Update</button>
                    </form>
                }
                {
                 
                 (this.state.forms && this.state.forms.role == "Supervisor") &&
                 
                 <form>
                         <h1>{this.state.forms.name}</h1>
                         { role == "Student" &&(
                            <div class="form-group">
                            <label for="formGroupExampleInput">IT Number</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" name ="itnumber" value={this.state.itnumber} onChange={this.handleChange} placeholder="Example input"></input>
                            </div>
                         
                         )}
                         
                        <div class="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" name ="name" value={this.state.name} onChange={this.handleChange} placeholder="Example input"></input>
                        </div>
                        

                        <div class="form-group">
                            <label for="role">Role</label>
                            <select type='text' class="form-control" id="role" name='role' value={this.state.role} onChange={this.handleChange}>
                                <option value=''></option>
                                    {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="formGroupExampleInput2">Role</label>
                            <input type="text" class="form-control" name = "specialisation" value={this.state.specialisation} onChange={this.handleChange} id="formGroupExampleInput2" placeholder="Another input"></input>
                        </div>
                        

                        <button type="submit" class="btn btn-primary" onClick={()=> {this.userUpdate(this.state.forms)}}>Update</button>
                    </form>
                }
                
                {
                 
                 (this.state.forms && this.state.forms.role == "Panel Member") &&
                 
                 <form>
                         <h1>{this.state.forms.name}</h1>

                         { role == "Student" &&(
                            <div class="form-group">
                            <label for="formGroupExampleInput">IT Number</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" name ="itnumber" value={this.state.itnumber} onChange={this.handleChange} placeholder="Example input"></input>
                            </div>
                         
                         )}

                        <div class="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" name ="name" value={this.state.name} onChange={this.handleChange} placeholder="Example input"></input>
                        </div>
                        <div class="form-group">
                            <label for="role">Role</label>
                            <select type='text' class="form-control" id="role" name='role' value={this.state.role} onChange={this.handleChange}>
                                <option value=''></option>
                                    {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Specialisation</label>
                            <input type="text" class="form-control" name = "specialisation" value={this.state.specialisation} onChange={this.handleChange} id="formGroupExampleInput2" placeholder="Another input"></input>
                        </div>
                        

                        <button type="submit" class="btn btn-primary" onClick={()=> {this.userUpdate(this.state.forms)}}>Update</button>
                    </form>
                }


            </div>


        );
    }
}


export default AdminUser;