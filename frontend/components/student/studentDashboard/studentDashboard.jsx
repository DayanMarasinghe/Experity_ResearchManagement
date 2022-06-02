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
          <CardImg alt="Card image cap" src={logo} top width="100%" />
          <CardBody>
            <CardTitle style={{ fontSize: 17 }} tag="h5">
              STUDENT GROUPS
            </CardTitle>

            <a
              href="/userlogin"
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </a>
          </CardBody>
        </Card>

        <Card style={{ marginRight: 30 }}>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle style={{ fontSize: 17 }} tag="h5">
              TOPIC REGISTRATION
            </CardTitle>

            <a
              href="/topicregister"
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </a>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle style={{ fontSize: 17 }} tag="h5">
              RESEARCH RESOURCES
            </CardTitle>

            <a
              href="/researchresources"
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </a>
          </CardBody>
        </Card>

        <Card style={{ marginRight: 30, marginLeft: 30 }}>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle style={{ fontSize: 17 }} tag="h5">
              DOCUMENT SUBMISSION
            </CardTitle>

            <a
              href="/documentsubmit"
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </a>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}
