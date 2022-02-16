import React, { useState } from 'react';
import {Col, Container, Dropdown, Row, Stack} from "react-bootstrap";

import DatePickercom from "./Date";


export default function Topfixid() {
    return (
        <>
            <Row className="mb-4">
                <Col sm={12} md >
                    <h3>Dashboard</h3>

                </Col>
                <Col xs={6} md={"auto"}>
                    <DatePickercom />

                </Col>
                <Col xs={6} md={"auto"} >
                    <DatePickercom />
                </Col>

            </Row>
        </>
    )
}














