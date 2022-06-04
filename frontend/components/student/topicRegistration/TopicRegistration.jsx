import React, { useState } from "react";
import "./topicRegistration.css";


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

const TopicRegistration = () => {
  const [groupid, setGroupId] = useState("");
  const [topic, setTopic] = useState("");
  const [researchgroup, setResearchGroup] = useState("");
  const [researchArea, setResearchArea] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [cosupervisor, setCosupervisor] = useState("");
  const [leader, setLeader] = useState("");
  const [itnumber, setItnumber] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const registerTopic = {
      groupid,
      topic,
      researchgroup,
      researchArea,
      supervisor,
      cosupervisor,
      leader,
      itnumber,
      email,
    };

    fetch("http://localhost:4000/topicregister/registertopic", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(registerTopic),
    }).then(() => {
      setSuccess(true);
      alert("successfully added")
      console.log(registerTopic);
    });
  };

  return (
    <div>
      <Screen />
    </div>
  );

  function Screen() {
    if (success) {
      return (
        <div>
           <div class="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
        <div
          className="container"
          style={{ marginTop: 60, paddingLeft: 70, paddingRight: 80 }}
        >
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label for="" sm={2}>
                Group ID
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleEmail"
                  value={groupid}
                  onChange={(e) => setGroupId(e.target.value)}
                  name="id"
                  placeholder="Enter the Group ID"
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Research Topic
              </Label>
              <Col sm={10}>
                <Input
                  id="examplePassword"
                  name="password"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Enter the topic name"
                  type="text"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleSelect" sm={2}>
                Research Group
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  value={researchgroup}
                  onChange={(e) => setResearchGroup(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="Machine Learning and Soft Computing">
                    Machine Learning and Soft Computing
                  </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleSelect" sm={2}>
                Research Area
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  value={researchArea}
                  onChange={(e) => setResearchArea(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="Artificial Intelligence">
                    Artificial Intelligence
                  </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleSelect" sm={2}>
                Supervisor's Name
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  value={supervisor}
                  onChange={(e) => setSupervisor(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="Dr kamal Dissanayaka">
                    Dr kamal Dissanayaka
                  </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleSelect" sm={2}>
                Co-Supervisor's Name
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  value={cosupervisor}
                  onChange={(e) => setCosupervisor(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="Dr Nimal Aththnayaka">
                    Dr Nimal Aththnayaka
                  </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Group Leader's Name
              </Label>
              <Col sm={10}>
                <Input
                  id="examplePassword"
                  name="password"
                  value={leader}
                  onChange={(e) => setLeader(e.target.value)}
                  placeholder="Enter  Group Leader's Name  "
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Group Leaders Registration Number
              </Label>
              <Col sm={10}>
                <Input
                  id="examplePassword"
                  name="password"
                  value={itnumber}
                  onChange={(e) => setItnumber(e.target.value)}
                  placeholder="Enter the Registration Number"
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Group Leaders Email Address
              </Label>
              <Col sm={10}>
                <Input
                  id="examplePassword"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter the  Email Address "
                  type="email"
                />
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
                  style={{
                    marginBottom: 50,
                    paddingLeft: 30,
                    paddingRight: 30,
                  }}
                >
                  Submit
                </Button>
                <Button
                  type="reset"
                  style={{
                    marginBottom: 50,
                    marginLeft: 40,
                    backgroundColor: "red",
                  }}
                >
                  Clear
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>

        </div>
       
        
      );
    } else {
      return (
        <div
          className="container"
          style={{ marginTop: 60, paddingLeft: 70, paddingRight: 80 }}
        >
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label for="" sm={2}>
                Group ID
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleEmail"
                  value={groupid}
                  onChange={(e) => setGroupId(e.target.value)}
                  name="id"
                  placeholder="Enter the Group ID"
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Research Topic
              </Label>
              <Col sm={10}>
                <Input
                  id="examplePassword"
                  name="password"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Enter the topic name"
                  type="text"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleSelect" sm={2}>
                Research Group
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  value={researchgroup}
                  onChange={(e) => setResearchGroup(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="Machine Learning and Soft Computing">
                    Machine Learning and Soft Computing
                  </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleSelect" sm={2}>
                Research Area
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  value={researchArea}
                  onChange={(e) => setResearchArea(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="Artificial Intelligence">
                    Artificial Intelligence
                  </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleSelect" sm={2}>
                Supervisor's Name
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  value={supervisor}
                  onChange={(e) => setSupervisor(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="Dr kamal Dissanayaka">
                    Dr kamal Dissanayaka
                  </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleSelect" sm={2}>
                Co-Supervisor's Name
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  value={cosupervisor}
                  onChange={(e) => setCosupervisor(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="Dr Nimal Aththnayaka">
                    Dr Nimal Aththnayaka
                  </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Group Leader's Name
              </Label>
              <Col sm={10}>
                <Input
                  id="examplePassword"
                  name="password"
                  value={leader}
                  onChange={(e) => setLeader(e.target.value)}
                  placeholder="Enter  Group Leader's Name  "
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Group Leaders Registration Number
              </Label>
              <Col sm={10}>
                <Input
                  id="examplePassword"
                  name="password"
                  value={itnumber}
                  onChange={(e) => setItnumber(e.target.value)}
                  placeholder="Enter the Registration Number"
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Group Leaders Email Address
              </Label>
              <Col sm={10}>
                <Input
                  id="examplePassword"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter the  Email Address "
                  type="email"
                />
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
                  style={{
                    marginBottom: 50,
                    paddingLeft: 30,
                    paddingRight: 30,
                  }}
                >
                  Submit
                </Button>
                <Button
                  type="reset"
                  style={{
                    marginBottom: 50,
                    marginLeft: 40,
                    backgroundColor: "red",
                  }}
                >
                  Clear
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      );
    }
  }
};

export default TopicRegistration;
