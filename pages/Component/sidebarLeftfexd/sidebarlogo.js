import React, { useState } from 'react';
import Image from "react-bootstrap/Image";

export default function Sidebarlogo() {
    return (
        <>
            <a href="#" className="text-black align-bottom  justify-content-center align-content-center text-center pt-5 pb-4" >
                <h1>
                    <Image src="/imges/logo/logo.png" className="pe-2"/>

                    <span className="fw-bold fs-3  overflow-hidden">Base</span>
                </h1>
            </a>

        </>
    )
}