import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Hero from "../src/images/img2.jpg";

const About = () => {
  return (
    <>
      <Common name="Welcome to About Page" imgsrc={Hero} visit="/contact" btname="Contact Now" />
    </>
  );
}

export default About;
