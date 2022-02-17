import React, { useState,forwardRef } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Panel from "../Panel";

const DatePickercom =() => {
    const [startDate,setStartDate] = useState(new Date());
    // eslint-disable-next-line react/display-name
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) =>(
            <div className="datepicker-container" style={{width:"130px",height:"33px"}}>
                <Panel>
                    <span  className="btn w-100 m-0  p-2  " onClick={onClick} ref={ref}>
                        {value}
                        <svg width="10" height="6" className="m-1" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  opacity="0.5" d="M1 1L5 5L9 1" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </Panel>
            </div>

    ));
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
        />
    );
};
export default DatePickercom;