import axios from "axios";
import React, { Component } from "react";
import Select from "react-select";
import {
  Alert,
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";



class GroupChat extends Component {
  state = { selectedOption: null, };
  

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  // setCosupervisors : [],

  handleCosuperChange = (setCosupervisors) => {
    this.setState({ setCosupervisors }, () =>
      console.log(`Option selected:`, this.state.setCosupervisors)
    );
  };

   
  handlerChanged = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  constructor(props) {
    super(props);
    this.state = {
      setSupervisors: [],
      setCosupervisors : [],
      groupid: "",
      topic : "",
      success : false,
      error : false
      
    };
  }

  setGroupId = () => {
    alert("changed");
  };

  componentDidMount() {
    axios
      .get(`http://localhost:4000/topicregister/getsuper`)
      .then((res) => {
        console.log(res.data, "response from front");
        this.setState({ setSupervisors: res.data });

        let supervisor = [];
        supervisor = res.data;
        console.log("super list", res.data);

        let option = [];
        supervisor.forEach((sup) => {
          console.log(sup);
          let obj = {
            value: sup._id,
            label: sup.name,
          };

          option.push(obj);
        });

        this.setState({ options: option });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  saveGroup = () => {
    if (this.state.selectedOption && this.state.groupid) {
    

        let selectedsupervisors = this.state.selectedOption;
        let selectedCosupervisors = this.state.setCosupervisors
        let supervisorids = [];
        let cosupersid = [];

        selectedsupervisors.forEach((std) => {
          console.log(std);
          supervisorids.push(std.value);
        });

        selectedCosupervisors.forEach((std) => {
          console.log(std);
          cosupersid.push(std.value);
        });

        let obj = {
          groupid: this.state.groupid,
          reqsupervisors : supervisorids,
          reqcosupervisors: cosupersid,
          topic : this.state.topic
        };

        fetch("http://localhost:4000/supervisors/reqsupervisors", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(obj),
        }).then(() => {
          console.log(obj);
          this.setState({success : true})
        });
      
    } else {
      this.setState({error : true})
      
    }
  };

  render() {

    return (
      
      <div className="container">
         {
          this.state.success && <div class="alert alert-success" role="alert" style={{marginTop: 30}}>
          requests have been sent successfully!
        </div>
        } 

        {
          this.state.error && <div class="alert alert-danger" role="alert" style={{marginTop: 30}}>
          Please fill the fields with relevant details!
        </div>
        }
        <Form style={{ marginBottom: 200, marginTop: 100 }}>
          <FormGroup row>
            <Label for="" sm={2}>
              Group ID
            </Label>
            <Col sm={10}>
              <Input
                id="exampleEmail"
                name="groupid"
                value={this.state.groupid}
                onChange={this.handlerChanged}
                placeholder="Enter the Group ID"
                type="text"
                required
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="" sm={2}>
             Topic
            </Label>
            <Col sm={10}>
              <Input
                id="exampleEmail"
                name="topic"
                value={this.state.topic}
                onChange={this.handlerChanged}
                placeholder="Enter the topic"
                type="text"
                required
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="" sm={2}>
              Select Supervisors
            </Label>
            <Col sm={10}>
              {this.state.options && (
                <Select
                  value={this.state.selectedOption}
                  onChange={this.handleChange}
                  options={this.state.options}
                  isMulti={true}
                  isSearchable={true}
                />
              )}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="" sm={2}>
              Select Co-Supervisors
            </Label>
            <Col sm={10}>
              {this.state.options && (
                <Select
                  value= {this.state.setCosupervisors}
                  onChange={this.handleCosuperChange}
                  options={this.state.options}
                  isMulti={true}
                  isSearchable={true}
                />
              )}
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col
              sm={{
                offset: 2,
                size: 10,
              }}
            >
              <Button
                onClick={this.saveGroup}
                style={{ marginBottom: 50, paddingLeft: 30, paddingRight: 30, marginTop : 20 }}
              >
                Send Request
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default GroupChat;
