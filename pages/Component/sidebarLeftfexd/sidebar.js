import React, { useState } from 'react';
import Sidebarlogo from "./sidebarlogo.js";
import Sidebarnavlinkes from "./sidebarnavlinkes.js";
import Sidebarfooter from "./sidebarfooter.js";
import Image from "react-bootstrap/Image";

export default function Sidebar() {
    const [Width,setWidth]=useState("218px")
    const [Margin,setMargin]=useState("0px")
    const [BorderRadius,setBorderRadius]=useState("0px")

    function ClosingSidebar (){
        if(Width==="218px"){
            setWidth("80px"), setMargin("20px"), setBorderRadius("10px"),
                document.querySelector(".mainSidebar").style=" margin: 20px; Width:80px; border-radius: 20px; padding-left:20px;"

        }
        else{
            setWidth("218px"), setMargin("0px"), setBorderRadius("0px"),
            document.querySelector(".mainSidebar").style="padding-left:0px !important"
        }
    }

    return (
        <>

            <aside className="mainSidebar h-100 top-0 start-0 overflow-x-hidden position-fixed align-content-center text-center px-0  d-flex flex-column ">
                <Image onClick={ClosingSidebar} height={50} width={50} style={{margin:"0 auto"}} src="/imges/icon/Calendar.svg"/>

                <Sidebarlogo style={{flexShrink:"0"}}/>
                <Sidebarnavlinkes />
                <Sidebarfooter  style={{flexShrink:"0"}}/>
            </aside>

        </>
    )
}