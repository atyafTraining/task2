import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Form, Button, Col, Container,Nav, Stack, Row} from 'react-bootstrap';
import SideBar from "./Component/SideBar";

export default function Home() {
  return (
      <>
          <Container fluid>
              <Row>
                  <Col sm={2} className=" h-100 bg-white position-fixed">
                      <SideBar />

                  </Col>
                  <Col sm={10} className=" h-25 position-fixed">
                      <Row className="flex-row bg-light w-100 h-25 Allcontant">tttttt</Row>
                      <Row className="flex-row bg-danger w-100 Allcontant" ></Row>
                  </Col>
              </Row>
          </Container>

          <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
          <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
          <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>


      </>
  )
}
