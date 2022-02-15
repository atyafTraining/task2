import React from "react";
import Topfixid from "./navbartopfixed/topfixid";
import {TitelTop} from "./navbartopfixed/titelTop";
import PureComponent from "./chart";
import {Col, Row, Table} from "react-bootstrap";
import Datatable from "./datatable";
import ProductsTable from "./prodectable";
import ChartsPage from "./chart2";

export default function Content() {
    return (
     <>

         <div className="paddingsidebar">

             <Topfixid />
             <TitelTop />

                 {/*<div className="ps-5 w-50" style={{marginLeft:"155px"}}></div>*/}


             <Row className="g-1">
                 <Col xs={12} md={8}>
                    <div className="p-3">
                        <PureComponent />
                    </div>
                 </Col>
                 <Col xs={12} md={4}>
                     <div className="p-3">
                         <PureComponent />
                     </div>
                 </Col>

                 <Col xs={12} md={8}>
                     <div className="p-3">
                         <Datatable />
                     </div>
                 </Col>
                 <Col xs={12} md={4}>
                     <div className="p-3">
                        <ProductsTable />
                     </div>
                 </Col>
             </Row>

         </div>
     </>
    );
}
