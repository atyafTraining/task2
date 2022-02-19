import React from "react";
import Sidebar from "./Component/sidebarLeftfexd/sidebar";
import Panel from "/pages/Component/contentoneBage/Panel";
import Datatable from "/pages/Component/contentoneBage/datatable";

// this code printed in settings.js after click the settings link
// for example
export default function Home() {
  return (
    <>
      <div className="m-0 p-0">
        <Sidebar />
        <div className="paddingsidebar ">
          <h1>Settings</h1>
          <p>any another code here</p>
          for example
          <Panel header="Recent Orders" className="h-100">
            <Datatable />
          </Panel>
        </div>
      </div>
    </>
  );
}
