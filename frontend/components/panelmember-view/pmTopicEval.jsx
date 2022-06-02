import axios from "axios";
import React, { Component } from "react";

class pmTopic extends Component{

render(){
    return(
        <div className="container">
            <br></br>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th>Research Topic</th>
                        <th>Comment</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input required></input></td>
                        <td><button type="submit" class="btn btn-primary">Enter</button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input required></input></td>
                        <td><button type="submit" class="btn btn-primary">Enter</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

}

export default pmTopic;