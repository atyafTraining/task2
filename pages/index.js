import Head from 'next/head'
import React, {Fragment, useState, Component} from "react";
import Sidebar from "./Component/sidebarLeftfexd/sidebar";
import {Container, InputGroup, Row, Stack} from "react-bootstrap";
import WithFilter from "./Component/contentoneBage/datatable";
import 'react-datepicker/dist/react-datepicker.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Topfixid from "./Component/navbartopfixed/topfixid";
import {TitelTop} from "./Component/navbartopfixed/titelTop";
import PureComponent from "./Component/contentoneBage/chart";
import Datatable from "./Component/contentoneBage/datatable";


export default function Home() {

    return (
        <Container fluid className="body m-0 p-0">
            <Sidebar />
            <Topfixid />
            <TitelTop />
            <PureComponent />
            <div className="ps-5 w-50" style={{marginLeft:"155px"}}><Datatable /></div>



            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>




        </Container>




    )
}














