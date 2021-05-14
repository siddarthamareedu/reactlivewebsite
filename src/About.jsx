import React from "react";
import Common from "./Common";

// import web from "../src/images/img2.svg";

const About = () => {
  return (
    <>
      {/* imgsrc={web} */}
      <Common
        name="Welcome to About page"
        imgsrc="https://picsum.photos/200/300?grayscale"
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
