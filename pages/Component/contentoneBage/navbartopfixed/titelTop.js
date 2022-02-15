import { Col, Container, Row, Stack } from "react-bootstrap";
import Image from 'next/image'

export function TitelTop() {
    const Data = [
        {
            icon: "SaveProducts.svg",
            name: "Save Products",
            Number: "178+"
        },
        {
            icon: "StockProducts.svg",
            name: "Stock Products",
            Number: "178+"
        },
        {
            icon: "SalesProduct.svg",
            name: "Sales Products",
            Number: "178+"
        },
        {
            icon: "JobApp.svg",
            name: "Job Application",
            Number: "178+"
        }
    ]
    return (
            <Row className="g-4  m-0 ">
                {Data.map(

                    function X(item) {
                        return (
                            <>
                                <Col className='p-3' xs={12} md={6} lg={3}>
                                    <Stack className=" align-items-center gap-3  bg-white p-4  "  direction="horizontal" >
                                        <Image src={"/imges/icon/" + item.icon} width={60} height={60} />
                                        <div>
                                            <h3 className="mb-0 fw-bold">{item.Number}</h3>
                                            <p className="mb-0 opacity-50">{item.name}</p>
                                        </div>
                                    </Stack>
                                </Col>

                            </>
                        )
                    }
                )}
            </Row>

    )
}