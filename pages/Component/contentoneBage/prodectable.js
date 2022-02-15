import React from "react";
import {Col, Row, Table} from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function ProductsTable() {
    return (
        <>
            <div className="bg-white">
            <h3 className="fs-3 pt-4 pb-4 ps-3">Top selling Products</h3>

                <Row className="ps-3 pb-5 border-5">
                    <Col sm={3}>
                        <Image src="\imges\table\products\Rectangle53.png" className=""/>
                    </Col>
                    <Col className="border-2 text-start">
                        <p className="m-0">NIKE Shoes Black Pattern</p>
                        <p className="m-0"><Image src="\imges\table\products\Group525.png"/></p>
                        <p className="m-0">$87</p>
                    </Col>
                </Row>

                <Row className="ps-3 pb-5 border-5">
                    <Col sm={3}>
                        <Image src="\imges\table\products\Rectangle53.png" className=""/>
                    </Col>
                    <Col className="border-2 text-start">
                        <p className="m-0">NIKE Shoes Black Pattern</p>
                        <p className="m-0"><Image src="\imges\table\products\Group525.png"/></p>
                        <p className="m-0">$87</p>
                    </Col>
                </Row>



            {/*<Table responsive  size="sm">*/}
            {/*    <tbody>*/}
            {/*    <tr>*/}
            {/*        <td >*/}
            {/*            <Image src="\imges\table\products\iPhone-12-2-removebg-preview 1.png" />*/}
            {/*        </td>*/}
            {/*        <td>Mark</td>*/}
            {/*        <td>Otto</td>*/}
            {/*        <td>@mdo</td>*/}
            {/*    </tr>*/}

            {/*    </tbody>*/}
            {/*</Table>*/}

            </div>
        </>
    );
}