import React from "react";
import { Stack,Image } from "react-bootstrap";
const data=[
    {index:1,imgpath:"/imges/table/products/Rectangle53.png",text:"NIKE Shoes Black Pattern",price:"$87"}
    ,    {index:2,imgpath:"/imges/table/products/Rectangle53.png",text:"iPhone 12",price:"$987"}
]
export default function ProductsTable() {
    return (
        <>
            {/*<h3 className="fs-3 pt-4 pb-4 ps-3">Top selling Products</h3>*/}

            {/*    <Row className="ps-3 pb-5 border-5">*/}
            {/*        <Col sm={3}>*/}
            {/*            <Image src="\imges\table\products\Rectangle53.png" className=""/>*/}
            {/*        </Col>*/}
            {/*        <Col className="border-2 text-start">*/}
            {/*            <p className="m-0">NIKE Shoes Black Pattern</p>*/}
            {/*            <p className="m-0"><Image src="\imges\table\products\Group525.png"/></p>*/}
            {/*            <p className="m-0">$87</p>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}

            {/*    <Row className="ps-3 pb-5 border-5">*/}
            {/*        <Col sm={3}>*/}
            {/*            <Image src="\imges\table\products\Rectangle53.png" className=""/>*/}
            {/*        </Col>*/}
            {/*        <Col className="border-2 text-start">*/}
            {/*            <p className="m-0">NIKE Shoes Black Pattern</p>*/}
            {/*            <p className="m-0"><Image src="\imges\table\products\Group525.png"/></p>*/}
            {/*            <p className="m-0">$87</p>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}


            <Stack className="p-4">

                {
                    data.map(
                        function X(i){
                            return(
                                <Stack className=" Top1 flex-row gap-3 pb-3 mb-3" key={i.index}>
                                    <Image width={60} src={i.imgpath}/>
                                    <Stack>
                                        <p className="mb-0">NIKE Shoes Black Pattern</p>
                                        <Image height={15}width={70} src='\imges\table\products\Group525.png'/>
                                        <b>{i.price}</b>
                                    </Stack>
                                </Stack>
                            )
                        }
                    )
                }
            </Stack>

        </>
    );
}













