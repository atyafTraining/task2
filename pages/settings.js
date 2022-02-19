import React from "react";
import Sidebar from "./Component/sidebarLeftfexd/sidebar";

export default function Home() {
  return (
    <>
      <div className="m-0 p-0">
        <Sidebar />
        <div className="paddingsidebar ">
          <h1>Settings</h1>
        </div>
      </div>
    </>
  );
}
