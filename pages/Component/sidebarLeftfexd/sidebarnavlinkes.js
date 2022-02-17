import React, { useState } from 'react';
import '../../api/SideBarNavLink.js'
import Nav from 'react-bootstrap/Nav'
import SideBarNavLink from '../../api/SideBarNavLink.js';

export default function Sidebarnavlinkes() {
    return (
<>

     <div className="scrol" style={{flex:"1 0 0",overflowX:"hidden",overflowY:"auto"}}>
        <Nav defaultActiveKey="/home" className="flex-column">
            <SideBarNavLink  />
        </Nav>
     </div>
                
</>    )
}