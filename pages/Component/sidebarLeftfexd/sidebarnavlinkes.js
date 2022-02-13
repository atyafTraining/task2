import React, { useState } from 'react';
import '../../api/SideBarNavLink.js'
import Nav from 'react-bootstrap/Nav'
import SideBarNavLink from '../../api/SideBarNavLink.js';

export default function Sidebarnavlinkes() {
    return (
<>

     <div style={{flex:"1 0 0",overflow:"auto",paddingLeft:"20px"}}>
        <Nav defaultActiveKey="/home" className="flex-column">
            <SideBarNavLink  />
        </Nav>
     </div>
                
</>    )
}