import React from "react";
import Topfixid from "./navbartopfixed/topfixid";
import {TitelTop} from "./navbartopfixed/titelTop";
import PureComponent from "./chart";
import {Col, Row, Table} from "react-bootstrap";
import Datatable from "./datatable";
import ProductsTable from "./prodectable";
import ChartsPage from "./chart2";
import Chart2 from "./chart2";
import PieCharts from "./chart2";
import Panel from "./Panel";

export default function Content() {
    return (
     <>

         <div className="paddingsidebar ">

             <Topfixid />
             <TitelTop />

                 {/*<div className="ps-5 w-50" style={{marginLeft:"155px"}}></div>*/}


             <Row className="g-4">
                 <Col xs={12} md={8} >
                       <Panel header="Reports" className="h-100 p-4">
                           <PureComponent />
                       </Panel>

                 </Col>
                 <Col xs={12} md={4}>
                         <Panel header="Analytics" className="h-100">
                             <PieCharts />
                         </Panel>
                 </Col>

                 <Col xs={12} md={8}>
                         <Panel header="Recent Orders" className="h-100">
                             <Datatable />
                         </Panel>
                 </Col>
                 <Col xs={12} md={4}>
                        <Panel header="Top selling Products" className="h-100">
                            <ProductsTable />
                        </Panel>
                 </Col>
             </Row>

         </div>
     </>
    );
}
