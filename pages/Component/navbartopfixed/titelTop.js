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
        <Container fluid className="px-0">

            <Row className=" Navbar text-center align-content-center justify-content-center  m-0">
                {Data.map(

                    function X(item) {
                        return (
                            <>
                                <Col xs={12} md={3} xxl  gap={3} className="">
                                    <Stack className=" bg-white pt-3 text-center align-content-center justify-content-center "  direction="horizontal" >
                                        {/*<Stack>*/}
                                            <Image src={"/imges/icon/" + item.icon} width={60} height={60} />
                                        {/*</Stack>*/}
                                        <div className="text-end" >
                                            <h1 className="number">{item.Number}</h1>
                                            <p className="title ">{item.name}</p>
                                        </div>
                                    </Stack>

                                </Col>



                            </>
                        )
                    }
                )}
            </Row>

        </Container>
    )
}