// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import {Button} from "react-bootstrap";
//
// function DataTimeFild() {
//     return null;
// }
//
// const DatePickercom = () => {
//     const [startDate,setStartDate] = useState(new Date());
//     const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
//
//             <Button className="example-custom-input" style={{backgroundColor:"white" ,width:"100%",color:"black" ,textAlign:"start"}} onClick={onClick} ref={ref}>
//                 {value}
//             </Button>
//
//     ));
//     return (
//     <>
//
//         <DatePicker className="btn border-0 p-2 rounded " value={"10-06-2021"} selected={startDate}  onChange={date => setStartDate(date)} />
//
//         <DatePicker
//             selected={startDate}
//             onChange={(date) => setStartDate(date)}
//             customInput={<ExampleCustomInput />}
//         />
//         {/*<DatePicker*/}
//         {/*    selected={startDate}*/}
//         {/*    selectsStart  startDate={this.state.startDate}*/}
//
//         {/*    onChange={date => setStartDate(date)} />*/}
//         {/*<DatePicker*/}
//         {/*    selected={startDate}*/}
//         {/*    onChange={date => setStartDate(date)} />*/}
//     </>
//     );
// };
//
// export default DatePickercom;
//
//
//
//













import React, { useState,forwardRef } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Panel from "../Panel";

const DatePickercom =() => {
    const [startDate,setStartDate] = useState(new Date());
    // eslint-disable-next-line react/display-name
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
            <Panel>
                <Button className="example-custom-input btn-white p-2 px-4"  onClick={onClick} ref={ref}>
                    {value}
                </Button>
            </Panel>

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