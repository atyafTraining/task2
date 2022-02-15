import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import { useEffect, useState } from 'react'
import { Stack } from 'react-bootstrap'
import React from 'react';
export default function SideBarNavLink() {
    const TotalList = [
        { icon: "Dashboard.svg", name: "Dashboard", list: ["Line Chart.", "Vertical Bar Chart.", "Horizontal Bar Chart.","Donut.","Funnel."] },
        { icon: "Analytics.svg", name: "Analytics", list: null },
        { icon: "Invoice.svg", name: "Invoice", list: ["1", "2", "3"] },
        { icon: "Schedule.svg", name: "Schedule", list: ["1", "2", "3"] },
        { icon: "Calendar.svg", name: "Calender", list: null },
        { icon: "Messages.svg", name: "Messages", list: ["1", "2", "3"] },
        { icon: "Notification.svg", name: "Notification", list: null },
        { icon: "Setting.svg", name: "Settings", list: ["1", "2", "3"] },
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
        <ul className=' px-4'>
            {
                TotalList.map(
                    function X(i){
                        const iconpath= "/imges/icon/"+i.icon
                        return (
                            <>
                                <Nav.Item as="li" className='mt-4'>
                                    <Stack direction="horizontal">
                                        <Image src={iconpath} width={16} height={16} className="me-3" />
                                        <span>{i.name}</span>
                                    </Stack>
                                    {i.list
                                        && <ul >
                                            {
                                                i.list.map(
                                                    function ListUl(y)
                                                    {
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

