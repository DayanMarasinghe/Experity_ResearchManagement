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

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

class GroupChat extends Component {
  state = { selectedOption: null };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  handlerChanged = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  constructor(props) {
    super(props);
    this.state = {
      setStudents: [],
      groupid: "",
    };
  }

  setGroupId = () => {
    alert("changed");
  };

  componentDidMount() {
    axios
      .get(`http://localhost:4000/topicregister/getstud`)
      .then((res) => {
        console.log(res.data, "response from front");
        this.setState({ setStudents: res.data });

        //   { value: "chocolate", label: "Chocolate" },

        let students = [];
        students = res.data;

        let option = [];
        students.forEach((stu) => {
          console.log(stu);
          let obj = {
            value: stu._id,
            label: stu.itnumber,
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
    alert("button clicked");
    if (this.state.selectedOption && this.state.groupid) {
      if (this.state.selectedOption.length != 4) {
        alert("groups must be consist of 4 members only");
      } else {
        console.log("final options", this.state.selectedOption);
        console.log("setGroupId", this.state.groupid);
        // {
        //     "groupid":"group6",
        //     "members" : [
        //         "6296facab996c21294bea6df",
        //         "6296fb02b996c21294bea6e5"

        //     ]
        // }

        let selectedStudents = this.state.selectedOption;
        let memberids = [];

        selectedStudents.forEach((std) => {
          console.log(std);
          memberids.push(std.value);
        });

        let obj = {
          groupid: this.state.groupid,
          members: memberids,
        };

        fetch("http://localhost:4000/topicregister/creategroup", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(obj),
        }).then(() => {
          console.log(obj);
          alert("successfully added");
        });
      }
    } else {
      alert("you need to select students and add a group name");
    }
  };

  render() {
    return (
      <div className="container">
        <Button style={{ margin: 30 }} href="/requestsupervisor">
          Request Supervisors
        </Button>
        <Form style={{marginBottom : 200}}>
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
              Select Members
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

          <FormGroup check row>
            <Col
              sm={{
                offset: 2,
                size: 10,
              }}
            >
              <Button
                onClick={this.saveGroup}
                style={{ marginBottom: 50, paddingLeft: 30, paddingRight: 30 }}
              >
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default GroupChat;
