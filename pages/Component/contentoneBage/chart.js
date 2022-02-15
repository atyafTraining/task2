import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {  Stack} from 'react-bootstrap';

const data = [
    {
        name: '10am',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '11am',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '12am',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '01am',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '02am',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '03am',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '04am',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '05am',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },{
        name: '06am',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },{
        name: '07am',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/customized-legend-event-l19fo';

    state = {
        opacity: {
            uv: 1,
            pv: 1,
        },
    };

    handleMouseEnter = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;

        this.setState({
            opacity: { ...opacity, [dataKey]: 0.5 },
        });
    };

    handleMouseLeave = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;

        this.setState({
            opacity: { ...opacity, [dataKey]: 1 },
        });
    };

    render() {
        const { opacity } = this.state;

        return (
            <>
                <div className="bg-white">
                    <h3 className="pb-3 fw-bold ps-5 pt-4" style ={{ color:"rgba(3, 2, 41, 1)",fontSize:"18px"}}>Reports</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
                            <Line type="monotone" dataKey="pv" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>

                </div>

            </>
        );
    }
}

































