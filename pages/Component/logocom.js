import Image from "next/image";
import {Nav} from 'react-bootstrap';
import React from "react";
export default function Logocom() {
    return (
        <>
            <aside className="position-fixed">
                <Nav.Link className="padding50 " href="/home">
                    <h1>
                        <Image src="/imges/logo.png" width={42}height={42}/>
                        <span className="text-dark opacity-100 fs-1">Base</span>
                    </h1>
                </Nav.Link>
            </aside>
        </>
    );
}