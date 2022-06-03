import axios from "axios";
import React, { Component } from "react";

class pmTopic extends Component{

    constructor(props){
        super(props)
    
        this.state={
          groupid:'',
          topic:'',
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
                        <th>Comment</th>
                        <th>Action</th>
                    </tr>
                    {
                        groups.map((grp) => (
                    <tr>
                        <td>{grp.groupid}</td>
                        <td>{grp.topic}</td>
                        <td><input required></input></td>
                        <td><button type="submit" class="btn btn-primary">Enter</button></td>
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