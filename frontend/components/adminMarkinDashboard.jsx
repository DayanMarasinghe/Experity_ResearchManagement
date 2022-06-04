import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom"; 

class MarkingScheme extends Component{

    constructor(props)
    {
        super(props)
    
        this.state={
            // _id:'',
            Attributes:'',
            Marks:''
            
        }
    }

    componentDidMount(){


        fetch(`http://localhost:4000/adminUsers/getpresentation`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                presentations: json,
                preresult: json.map(bill => bill.marks).reduce((acc, bill) => bill + acc, 0),
                DataisLoaded: true
            });

        })

        fetch(`http://localhost:4000/adminUsers/getviva`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                vivas: json,
                vivaresult:json.map(bill => bill.marks).reduce((acc, bill) => bill + acc,0),
                DataisLoaded: true
            });


            
        })

        fetch(`http://localhost:4000/adminUsers/getdocument`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                documents: json,
                docresult: json.map(bill => bill.marks).reduce((acc, bill) => bill + acc,0),
                DataisLoaded: true

            });

            
        })
    }
    
    
    handleChange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
       
    }

    handledocumentSubmit =(e) =>{
        e.preventDefault()
        

            axios.post(`http://localhost:4000/adminUsers/document`,this.state,{
    
            })
            .then(response =>{
                console.log(response)
                window.location.href = "/adminmarkingshboard"
                

        })
        // Do nothing!
            console.log("Thing was not saved to the database.");
        
    }
    handlepresentationSubmit =(e) =>{
        e.preventDefault()
        

            axios.post(`http://localhost:4000/adminUsers/presenatation`,this.state,{
    
            })
            .then(response =>{
                console.log(response)
                window.location.href = "/adminmarkingshboard"
                

        })
        // Do nothing!
            console.log("Thing was not saved to the database.");
        
    }
    handlevivaSubmit =(e) =>{
        e.preventDefault()
        

            axios.post(`http://localhost:4000/adminUsers/viva`,this.state,{
    
            })
            .then(response =>{
                console.log(response)
                window.location.href = "/adminmarkingshboard"
                

        })
        // Do nothing!
            console.log("Thing was not saved to the database.");
        
    }

     
      showAlert() {
        window.location.href = "/payment"
      }

    render(){
        const {DataisLoaded, documents,vivas,presentations,docresult,preresult,vivaresult} = this.state;

        

        if(!DataisLoaded) return <div>
        <h1>Please wait.................</h1></div>;

        return(
            <div className="App" style={{marginBottom:40}}>

                <div class="container-fluid p-5 bg-primary text-white text-center">
                    <div>
                        <h1>Marking Scheme</h1>
                        <p>Create your own marking scheme</p> 
                    </div>
                    <div>
                        <h1>Total Mark</h1>
                        <h3>{docresult + preresult + vivaresult}</h3> 
                    </div>
                
                </div>

                <div class="container mt-5">

                    <div class="row">
                        
                        <div class="col-sm-4">

                        <div class="container-fluid p-2 bg-primary text-white text-center">
                        
                            <h3 style={{color: "white",textAlign: "center"}}>Document</h3>
                
                        </div>

                            

                            <table class="table">
                            
                                <thead>
                                    <tr>
                                        <th scope="col">Dimension</th>
                                        <th scope="col">Mark</th>
                                    
                                    </tr>
                                </thead>
                                
                                { 
                                    (documents || []).map((document) => (
                            
                                        <tbody>
                                            <tr>
                                                <th scope="row">{document.Attributes}</th>
                                                <td>{document.marks}</td>                           
                                            </tr>
                                        </tbody>
                                        
                                        
                                
                                        )) 
                                                            
                                }
                                <tbody>
                                        <tr>
                                            <th></th>
                                            <td><p style={{color:"red",fontWeight:"bold",fontSize:28}}>{docresult}</p></td>
                                        </tr>
                                    
                                </tbody>
                                
                                
                            </table>
                            <form class="setPadding form-container" onSubmit={this.handledocumentSubmit}>
                                <div class="form-group">
                                        <label for="formGroupExampleInput2">Dimension</label>
                                        <input type="text" class="form-control" name = "Attributes" onChange={this.handleChange} id="formGroupExampleInput2" placeholder=""></input>
                                </div>
                                <div class="form-group">
                                        <label for="formGroupExampleInput2">Mark</label>
                                        <input type="text" class="form-control" name = "marks"  onChange={this.handleChange} id="formGroupExampleInput2" placeholder=""></input>
                                </div>
                                <button type="submit" style={{float: "right", width:"30%",marginTop:20}} class="btn btn-primary" id="pay-120">Save</button>
                            </form>
                        </div>

                        <div class="col-sm-4">

                        <div class="container-fluid p-2 bg-primary text-white text-center">
                        
                            <h3 style={{color: "white",textAlign: "center"}}>Viva</h3>
            
                        </div>
                        
                            <table class="table">
                                
                                <thead>
                                    <tr>
                                        <th scope="col">Dimension</th>
                                        <th scope="col">Mark</th>
                                    
                                    </tr>
                                </thead>
                                
                                { 
                                    (vivas || []).map((viva) => (
                    
                                    <tbody>
                                    <tr>
                                        <th scope="row">{viva.Attributes}</th>
                                        <td>{viva.marks}</td>                           
                                    </tr>
                                    
                                    </tbody>

                            
                                ))
                        
                                }
                                <tbody>
                                        <tr>
                                            <th></th>
                                            <td>{vivaresult}</td>
                                        </tr>
                                    
                                </tbody>
                            </table>                        

                            <form class="setPadding form-container" onSubmit={this.handlevivaSubmit}>
                                <div class="form-group">
                                        <label for="formGroupExampleInput2">Dimension</label>
                                        <input type="text" class="form-control" name = "Attributes" onChange={this.handleChange} id="formGroupExampleInput2" placeholder=""></input>
                                </div>
                                <div class="form-group">
                                        <label for="formGroupExampleInput2">Mark</label>
                                        <input type="text" class="form-control" name = "marks"  onChange={this.handleChange} id="formGroupExampleInput2" placeholder=""></input>
                                </div>
                                <button type="submit" style={{float: "right", width:"30%",marginTop:20}} class="btn btn-primary" id="pay-120">Save</button>
                            </form>
                        </div>

                        <div class="col-sm-4">

                        <div class="container-fluid p-2 bg-primary text-white text-center">
                        
                            <h3 style={{color: "white",textAlign: "center"}}>Presenatation</h3>
            
                        </div>
                        
                            <table class="table">
                                    
                                <thead>
                                    <tr>
                                        <th scope="col">Dimension</th>
                                        <th scope="col">Mark</th>
                                        
                                    </tr>
                                </thead>
                                    
                                { 
                                    (presentations || []).map((presentation) => (
                    
                                    <tbody>
                                        <tr>
                                            <th scope="row">{presentation.Attributes}</th>
                                            <td>{presentation.marks}</td>
                                        </tr>
                                    
                                    </tbody>                     
                                    ))               
                                }
                                <tbody>
                                        <tr>
                                            <th></th>
                                            <td>{preresult}</td>
                                        </tr>
                                    
                                </tbody>
                            </table>
                            

                            <form class="setPadding form-container" onSubmit={this.handlepresentationSubmit}>
                                <div class="form-group">
                                        <label for="formGroupExampleInput2">Dimension</label>
                                        <input type="text" class="form-control" name = "Attributes" onChange={this.handleChange} id="formGroupExampleInput2" placeholder=""></input>
                                </div>
                                <div class="form-group">
                                        <label for="formGroupExampleInput2">Mark</label>
                                        <input type="text" class="form-control" name = "marks"  onChange={this.handleChange} id="formGroupExampleInput2" placeholder=""></input>
                                </div>
                                
                                    <button type="submit" style={{float: "right", width:"30%",marginTop:20}} class="btn btn-primary justify-content-end" id="pay-120">Save</button>
                                
                                
                            </form>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}


export default MarkingScheme;