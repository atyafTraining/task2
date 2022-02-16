import Head from 'next/head'
import React, {Fragment, useState, Component ,useEffect} from "react";
import Sidebar from "./Component/sidebarLeftfexd/sidebar";
import 'react-datepicker/dist/react-datepicker.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import Content from "./Component/contentoneBage/Content";


export default function Home() {
    useEffect(()=>{
        let classes=sessionStorage.getItem("ExpandBar")
        document.querySelector("body").classList=classes
    })
    return (
        <>
            <div className="m-0 p-0" >

                <Sidebar />
                <Content />

            </div>
        </>
    )
}














