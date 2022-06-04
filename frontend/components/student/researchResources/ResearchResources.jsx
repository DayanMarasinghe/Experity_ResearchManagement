import React from "react";
import { Accordion } from "react-bootstrap";
import assess from "../images/assess.png";
import { MDBContainer, MDBIframe } from "mdbreact";
import ReactPlayer from 'react-player'

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
            <a href="https://mysliit-my.sharepoint.com/:x:/g/personal/cdap_sliit_lk/EVxmt2cWgIFNn86-b8oeFUUBBKwdEmUCxCOJ2wNNqZRrHg?e=cfWxG7">Get Research Clusters</a>
       
            
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Brainstorming Sessions</Accordion.Header>
          <Accordion.Body>
          {/* <MDBContainer className="text-center" >
              <MDBIframe src="https://lecturecapture.sliit.lk/neplayer.php?id=azdhN0hpSDA2U180NzQyMQ==&full=ZnVsbA==" />
            </MDBContainer> */}
            {/* <ReactPlayer url= 'https://www.youtube.com/watch?v=PDjS20kic54'></ReactPlayer> */}
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
