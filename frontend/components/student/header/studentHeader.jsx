import React from "react";
import { UncontrolledCarousel } from "reactstrap";
// import girl from "../images/girl.png";

function StudentHeader() {
  return (
    <div className="container" style={{width : "80%", marginTop: 40, marginBottom : 200}}>
      <UncontrolledCarousel
  items={[
    {
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
      src: 'https://static.sliit.lk/wp-content/uploads/2020/01/06040631/SLIIT-BSc-Hons-in-Information-Technology-Specializing-in-Information-Technology.jpg'
    },
    {
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
      src: 'https://static.sliit.lk/wp-content/uploads/2019/03/12113646/SLIIT-Graduates-with-flying-colours-1.jpg'
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src: 'https://static.sliit.lk/wp-content/uploads/2022/03/21062316/sliit-main-intake-2022-web-slider-v1.jpg'
    }
  ]}
 />
    </div>
  );
}

export default StudentHeader;
