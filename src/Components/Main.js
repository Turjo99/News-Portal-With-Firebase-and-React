import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="">
        <div className="grid grid-cols-3 min-h-screen gap-4 ">
          <LeftSide className=""></LeftSide>
          <div className=" ">
            <Outlet className=" "></Outlet>
          </div>
          <RightSide className=""></RightSide>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
