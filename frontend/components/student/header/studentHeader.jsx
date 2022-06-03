import React from "react";
import { UncontrolledCarousel } from "reactstrap";
// import girl from "../images/girl.png";

function StudentHeader() {
  return (
    <div className="container" style={{width : "80%", marginTop: 40, marginBottom : 200}}>
      <UncontrolledCarousel
  items={[
    {
     
      key: 1,
      src: 'https://static.sliit.lk/wp-content/uploads/2020/01/06040631/SLIIT-BSc-Hons-in-Information-Technology-Specializing-in-Information-Technology.jpg'
    },
    {
     
      key: 2,
      src: 'https://static.sliit.lk/wp-content/uploads/2019/03/12113646/SLIIT-Graduates-with-flying-colours-1.jpg'
    },
    {
     
      key: 3,
      src: 'https://static.sliit.lk/wp-content/uploads/2022/03/21062316/sliit-main-intake-2022-web-slider-v1.jpg'
    }
  ]}
 />
    </div>
  );
}

export default StudentHeader;
