import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../images/submit.png";
import {
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import StudentHeader from "../header/studentHeader";

export default function StudentDashboard() {
  return (
    <div>
      <StudentHeader />
      <CardGroup>
        <Card style={{ marginRight: 40, marginLeft: 40, marginBottom: 100 }}>
          <CardImg alt="Card image cap" src="https://static.sliit.lk/wp-content/uploads/2019/11/27095049/SLIIT-Master-of-Philosophy-MPhil.jpg" top width="100%" />
          <CardBody>
           

            <a
              href="/creategroups"
              style={{ textDecoration: "none", color: "black" }}
            >
               <CardTitle style={{ fontSize: 17 }} tag="h5">
              STUDENT GROUPS
            </CardTitle>
            </a>
          </CardBody>
        </Card>

        <Card style={{ marginRight: 30 }}>
          <CardImg
            alt="Card image cap"
            src="https://static.sliit.lk/wp-content/uploads/2018/01/Foss-Community.jpg"
            top
            width="100%"
          />
          <CardBody>
            

            <a
              href="/topicregister"
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardTitle style={{ fontSize: 17 }} tag="h5">
              TOPIC REGISTRATION
            </CardTitle>
            </a>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/ftadmin/wp-content/uploads/2016/10/25205753/Untitled-4152.jpg"
            top
            width="100%"
          />
          <CardBody>
           

            <a
              href="/researchresources"
              style={{ textDecoration: "none", color: "black" }}
            >
               <CardTitle style={{ fontSize: 17 }} tag="h5">
              RESEARCH RESOURCES
            </CardTitle>
            </a>
          </CardBody>
        </Card>

        <Card style={{ marginRight: 30, marginLeft: 30 }}>
          <CardImg
            alt="Card image cap"
            src="https://static.sliit.lk/wp-content/uploads/2018/01/Faculty-of-computing-student-community-FCSC-2.jpg"
            top
            width="100%"
          />
          <CardBody>
           

            <a
              href="/documentsubmit"
              style={{ textDecoration: "none", color: "black" }}
            >
               <CardTitle style={{ fontSize: 17 }} tag="h5">
              DOCUMENT SUBMISSION
            </CardTitle>
            </a>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}
