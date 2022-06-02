import React from "react";
import { Accordion } from "react-bootstrap";
import assess from "../images/assess.png"

function ResearchResources() {
  return (
    <div className="container" style={{ marginTop: 50, marginBottom: 200 }}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>RP Milestones</Accordion.Header>
          <Accordion.Body>
            <img src={assess}></img>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Research Clusters</Accordion.Header>
          <Accordion.Body>
            <a href=""></a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Brainstorming Sessions</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>RP Milestones</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ResearchResources;
