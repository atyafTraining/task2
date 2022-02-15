import React, { useState } from 'react';
import Image from "react-bootstrap/Image";

export default function Sidebarlogo() {
    return (
        <>
            <a href="#" className="fw-bold fs-3 text-black align-bottom  justify-content-center pt-5 pb-4" >
                <h1>
                    <Image src="/imges/logo/logo.png" className="pe-3"/>
                    <span className="overflow-hidden">Base</span>
                </h1>
            </a>

        </>
    )
}