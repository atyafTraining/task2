import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickercom = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
    <>

        <DatePicker className="border-0 p-2 rounded" value={"10-06-2021"} selected={startDate}  onChange={date => setStartDate(date)} />


        {/*<DatePicker*/}
        {/*    selected={startDate}*/}
        {/*    selectsStart  startDate={this.state.startDate}*/}

        {/*    onChange={date => setStartDate(date)} />*/}
        {/*<DatePicker*/}
        {/*    selected={startDate}*/}
        {/*    onChange={date => setStartDate(date)} />*/}
    </>
    );
};

export default DatePickercom;