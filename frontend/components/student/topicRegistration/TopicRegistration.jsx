import React from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";

function TopicRegistration() {
  return (
    <div className="container" style={{marginTop : 60, paddingLeft : 70, paddingRight : 80}}>
      <Form>
        <FormGroup row>
          <Label for="" sm={2}>
            Group ID
          </Label>
          <Col sm={10}>
            <Input
              id="exampleEmail"
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
            <Input id="exampleSelect" name="select" type="select">
            <option value="" disabled selected>Select your option</option>
              <option>Machine Learning and Soft Computing</option>
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
            <Input id="exampleSelect" name="select" type="select">
            <option value="" disabled selected>Select your option</option>
              <option>Artificial Intelligence</option>
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
            <Input id="exampleSelect" name="select" type="select">
            <option value="" disabled selected>Select your option</option>
              <option>Dr kamal Dissanayaka</option>
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
            <Input id="exampleSelect" name="select" type="select" >
            <option value="" disabled selected>Select your option</option>
              <option>Dr Nimal Aththnayaka</option>
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
              name="password"
              placeholder="Enter the  Email Address "
              type="text"
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
            <Button variant= "primary">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export default TopicRegistration;
