import React from "react";
import { NavLink } from "react-router-dom";
import Web from "../src/images/img1.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common name="Grow your business with" imgsrc={Web} visit="/service" btname="Get Started" />
    </>
  );
}

export default Home;
