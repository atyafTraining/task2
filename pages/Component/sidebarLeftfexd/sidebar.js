import React, { useState } from 'react';
import Sidebarlogo from "./sidebarlogo.js";
import Sidebarnavlinkes from "./sidebarnavlinkes.js";
import Sidebarfooter from "./sidebarfooter.js";
import Image from "react-bootstrap/Image";
import { AiOutlineDoubleRight } from "react-icons/ai";
export default function Sidebar() {

    const [Width,setWidth]=useState("218px")
    const [Margin,setMargin]=useState("0px")
    const [BorderRadius,setBorderRadius]=useState("0px")

    function ClosingSidebar (){
        if(!document.querySelector("body").classList.contains("sidebar-active"))
        {
            document.body.classList.add("sidebar-active")
        }
        else{
            document.body.classList.remove("sidebar-active")
        }
    }

    return (
        <>
            <aside className="mainSidebar  h-100 top-0  overflow-x-hidden position-fixed  px-0  d-flex flex-column ">

                <Sidebarlogo style={{flexShrink:"0"}}/>
                <AiOutlineDoubleRight onClick={ClosingSidebar} className="icon1" />
                <Sidebarnavlinkes />
                <Sidebarfooter  style={{flexShrink:"0"}}/>
            </aside>
        </>
    )
}