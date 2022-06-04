import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";


export default function AdminDashboard() {
  return (
    <div class="gap-top">
    
      <CardGroup>
        <Card style={{ marginRight: 40, marginLeft: 40, marginBottom: 20 }}>
          <CardImg alt="Card image cap" src="https://www.dailynews.lk/sites/default/files/news/2021/06/24/z_p10-SLIIT.jpg" top width="100%"  height="350" />
          <CardBody>
           

            <a
              href="/adminUSdashboard"
              style={{ textDecoration: "none", color: "black" }}
            >
               <CardTitle style={{ fontSize: 17 }} tag="h5">
              USERS
            </CardTitle>
            </a>
          </CardBody>
        </Card>


        <Card style={{ marginRight: 30, marginBottom: 20 }}>
          <CardImg alt="Card image cap" src="https://static.sliit.lk/wp-content/uploads/2017/10/sliit-research-computing-faculty-1.jpg" top width="100%"  height="350" />
          <CardBody>
           

            <a
              href="/viewsubmission"
              style={{ textDecoration: "none", color: "black" }}
            >
               <CardTitle style={{ fontSize: 17 }} tag="h5">
               SUBMISSIONS
            </CardTitle>
            </a>
          </CardBody>
        </Card>

        
        <Card style={{ marginBottom: 20 }}>
          <CardImg
            alt="Card image cap"
            src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/ftadmin/wp-content/uploads/2016/10/25205753/Untitled-4152.jpg"
            top
            width="100%"
            height="350"
          />
          <CardBody>
           

            <a
              href="/adminGroup"
              style={{ textDecoration: "none", color: "black" }}
            >
               <CardTitle style={{ fontSize: 17 }} tag="h5">
              ALLOCATE PANEL
            </CardTitle>
            </a>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}
