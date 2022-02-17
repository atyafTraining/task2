import React, { useState } from 'react';
import Sidebarlogo from "./sidebarlogo.js";
import Sidebarnavlinkes from "./sidebarnavlinkes.js";
import Sidebarfooter from "./sidebarfooter.js";
import Image from "react-bootstrap/Image";
import { AiOutlineDoubleRight } from "react-icons/ai";
export default function Sidebar() {

    function ClosingSidebar (){
        if(!document.querySelector("body").classList.contains("sidebar-active"))
        {
            document.body.classList.add("sidebar-active")
            localStorage.setItem("ExpandBar",document.querySelector("body").classList)
            console.log(`Classes For Body Element ${localStorage.getItem("ExpandBar")}`)
        }
        else{
            document.body.classList.remove("sidebar-active")
            localStorage.setItem("ExpandBar",document.querySelector("body").classList)
            console.log(`Classes For Body Element ${localStorage.getItem("ExpandBar")}`)
        }
    }

    return (
        <>
            <aside className="pro-sidebar md toggled  mainSidebar h-100 top-0  overflow-x-hidden position-fixed  px-0  d-flex flex-column ">
                <Sidebarlogo style={{flexShrink:"0"}}/>
                <AiOutlineDoubleRight onClick={ClosingSidebar} className="icon1" />
                <Sidebarnavlinkes />
                <Sidebarfooter  style={{flexShrink:"0"}}/>
            </aside>
        </>
    )
}