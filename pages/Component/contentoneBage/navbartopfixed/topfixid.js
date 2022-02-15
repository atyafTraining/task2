import React, { useState } from 'react';
import {Col, Container, Dropdown, Row, Stack} from "react-bootstrap";

import DatePickercom from "./Date";


export default function Topfixid() {
    return (
        <>
             <Stack direction="horizontal"  gap={3}>
                 <div className="pt-4 ms-3 "><h3>Dashboard</h3></div>
                 <div className="ms-auto " >
                    <DatePickercom  />
                    </div>
                    <div>
                        <DatePickercom />
                    </div>
             </Stack>
        </>
    )
}














