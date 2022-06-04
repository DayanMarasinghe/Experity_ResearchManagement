import axios from "axios";
import React, { Component } from "react";
import Select from "react-select";

class ViewDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/documentupload/getdocs`)
      .then((res) => {
        console.log(res.data, "response from front");
        this.setState({ document: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const document = this.state.document;
    console.log("render", document);
    return (
      <div>
        {document.map((docs) => (
            <div>
                <a href={docs.document}>
            <img src="..." className="img-fluid" alt="Responsive image"/>
            </a>
            </div>
            
        ))}
        
      </div>
    );
  }
}

export default ViewDocument;
