import React, { useState } from 'react';
import Image from "react-bootstrap/Image";

export default function Sidebarlogo() {
    return (
        <>
            <a href="#" className="justify-content-center pt-5 pb-4 logo" >
                <h1>
                    <Image src="/imges/logo/logo.png" className="pe-3"/>
                    <span className="fw-bold fs-3 text-black align-bottom ">Base</span>
                </h1>
            </a>

        </>
    )
}