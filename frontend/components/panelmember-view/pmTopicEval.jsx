import axios from "axios";
import React, { Component } from "react";

class pmTopic extends Component{

    constructor(props){
        super(props)
    
        this.state={
          groupid:'',
          topic:'',
          panelmembercomment:'',
          selectedgroup:'',
        }
    }

    componentDidMount(){
  
        const user = localStorage.getItem("panelmember");
          fetch(`http://localhost:4000/panelMarking/requests/${user}`)
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  groups: json,
                  DataisLoaded: true
              });
          })
      }

      handleChange =(e) =>{
        //alert(this.state.groupleaderid)
            this.setState({
                [e.target.name]: e.target.value,
            })
        }

    //     handleSubmit = (groupid) => {

    //         let obj = {groupid:this.state.selectedgroup.groupid,panelmembercomment:this.state.panelmembercomment}
    //         // console.log('state',this.state.selectedgroup)
    
    // //   e.preventDefault()
    //   axios.patch(`http://localhost:4000/panelMarking/pmcomment/${groupid}`, obj, {})
    //       .then(response => {
    //           console.log(response);
    //           alert('Evaluation added successfully!');
    //           this.setState({selectedgroup:"",panelmembercomment:""})
    //       })
    //       .catch(error => {
    //           console.error(error);
    //           alert('An error occured')
    //       })
    // }

        accordionHandle= (grp) => {
            // alert("hit")
            // console.log("group details", grp)
        
        }

        refreshPage() {
            window.location.reload(false);
          }

render(){
    const {DataisLoaded, groups} = this.state;

    if(!DataisLoaded) return <div>
    <h1>Please wait.................</h1></div>;

    return(
        <div className="container">
            <br></br>
            <h5>Research Topics Assigned for you</h5>
            <br></br>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th>Group ID</th>
                        <th>Research Topic</th>
                        <th>Description</th>
                        <th>Comment</th>
                        <th>Action</th>
                    </tr>
                    {
                        groups.map((grp) => (
                    <tr onClick={()=>{this.accordionHandle(grp)
                    }}>
                        <td>{grp.groupid}</td>
                        <td>{grp.topic}</td>
                        <td>{grp.description}</td>
                        <td><input name="panelmembercomment"></input></td>
                        <td><button type="submit" class="btn btn-primary" onClick={this.refreshPage}>Enter</button></td>

                    </tr>
                    ))}
                </tbody>
            </table>

            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}

}

export default pmTopic;