import React, { useState } from 'react';
import Image from "react-bootstrap/Image";

export default function Sidebarlogo() {
    return (
        <>
            <a className="text-black pt-4 align-bottom  justify-content-center align-content-center text-center " >
                <h1>
                    <Image src="/imges/logo/logo.png" className="pe-2"/>

                    <span className="fw-bold fs-3  overflow-hidden">Base</span>
                </h1>
            </a>

        </>
    )
}