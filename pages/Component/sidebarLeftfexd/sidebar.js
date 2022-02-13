import React, { useState } from 'react';
import Sidebarlogo from "./sidebarlogo.js";
import Sidebarnavlinkes from "./sidebarnavlinkes.js";
import Sidebarfooter from "./sidebarfooter.js";

export default function Sidebar() {
    return (//className="mainSidebar px-0  d-flex flex-column "
        <>
            <aside style={{width:"218px",margin:"0px",borderRadius:"0px"}} className="mainSidebar px-0  d-flex flex-column ">
                <Sidebarlogo style={{flexShrink:"0"}}/>
                <Sidebarnavlinkes />
                <Sidebarfooter  style={{flexShrink:"0"}}/>
            </aside>

        </>
    )
}