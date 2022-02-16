import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import { useEffect, useState } from 'react'
import { Stack } from 'react-bootstrap'
import React from 'react';
import {IoMdArrowDropright} from 'react-icons/io';
export default function SideBarNavLink() {
    const TotalList = [
        { icon: "Dashboard.svg",iconOpen:<IoMdArrowDropright style={{color:"rgba(96, 91, 255, 1)"}}/>, name: "Dashboard", list: ["Line Chart.", "Vertical Bar Chart.", "Horizontal Bar Chart.","Donut.","Funnel."] },
        { icon: "Analytics.svg",iconOpen:<IoMdArrowDropright style={{color:"rgba(96, 91, 255, 1)"}}/>, name: "Analytics", list: null },
        { icon: "Invoice.svg",iconOpen:<IoMdArrowDropright style={{color:"rgba(96, 91, 255, 1)"}}/>, name: "Invoice", list: ["1", "2", "3"] },
        { icon: "Schedule.svg",iconOpen:<IoMdArrowDropright style={{color:"rgba(96, 91, 255, 1)"}}/>, name: "Schedule", list: ["1", "2", "3"] },
        { icon: "Calendar.svg",iconOpen:<IoMdArrowDropright style={{color:"rgba(96, 91, 255, 1)"}}/>, name: "Calender", list: null },
        { icon: "Messages.svg",iconOpen:<IoMdArrowDropright style={{color:"rgba(96, 91, 255, 1)"}}/>, name: "Messages", list: ["1", "2", "3"] },
        { icon: "Notification.svg",iconOpen:<IoMdArrowDropright style={{color:"rgba(96, 91, 255, 1)"}}/>, name: "Notification", list: null },
        { icon: "Setting.svg",iconOpen:<IoMdArrowDropright style={{color:"rgba(96, 91, 255, 1)"}}/>, name: "Settings", list: ["1", "2", "3"] },
    ]

    useEffect(() => {
        const navItem = document.querySelectorAll('.mainSidebar .nav > ul > li');
        navItem.forEach((el) => el.addEventListener('click', function(){
            const elClasses = el.classList;
            if (!elClasses.contains('active')){
                elClasses.add('active')
            } else elClasses.remove('active')
            console.log(elClasses)
        }))
    })

    return (<>
        <ul className='pt-5 ps-0'>

            {
                TotalList.map(
                    function X(i){
                        const iconpath= "/imges/icon/"+i.icon
                        return (
                            <>
                                <Nav.Item as="li" className="mt-4 item">
                                    <Stack direction="horizontal" className="ps-4 py-2">
                                        <Image src={iconpath} width={16} height={16} className="me-3" />
                                        <span className="item1">{i.name}</span>
                                        <span className="item1 ms-auto pe-3">{i.list ?i.iconOpen:null}</span>
                                    </Stack>
                                    {i.list
                                        && <ul className="bg-white ullist" >
                                            {
                                                i.list.map(
                                                    function ListUl(y) {
                                                        return (<>
                                                            <li className='text-start mt-1 fs-6 ps-2'>{y}</li>
                                                        </>)
                                                    }
                                                )
                                            }
                                        </ul>
                                    }
                                </Nav.Item>
                            </>
                        )
                    }
                )
            }
        </ul>
    </>
    )
}




