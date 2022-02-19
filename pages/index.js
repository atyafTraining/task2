import React, { Fragment, useState, Component, useEffect } from "react";
import Sidebar from "./Component/sidebarLeftfexd/sidebar";
import Head from "next/head";
import "react-datepicker/dist/react-datepicker.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import Content from "./Component/contentoneBage/Content";

export default function Home() {
  useEffect(() => {
    let classes = localStorage.getItem("ExpandBar");
    document.querySelector("body").classList = classes;
  });
  return (
    <>
      <div className="m-0 p-0">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}
