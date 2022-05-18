import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../css/GetDisease.css';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { Link } from 'react-router-dom'

const GetDisease = ({ symp }) => {
    const [symptoms, setSymptoms] = useState(symp)
    const [disease, setDisease] = useState(null)
    const data = { symptoms }

    const GetFromFlask = async () => {

        const resData = await axios.post(`/api/disease/`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            data
        }).then(data => {

            setDisease(data.data.disease)
        }).catch(err => {
            console.log(err)
        })


    }

    const loader = <>
        <Spinner animation="grow" variant="danger" />
    </>;

    var pred = <>
        Predicted Disease: {disease}
    </>;

    useEffect(() => {
        GetFromFlask()
    }, [])


    return (
        <>
            <Container>
                <Row className="justify-content-md-center predicted">
                    <Col sm="10" md="10" lg="10">
                        {disease === null || disease === '' ? loader : pred}
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {disease === null || disease === '' ? null : ""}
                        {disease &&
                            <>
                                <Container style={{
                                    textAlign: "center"
                                }}>
                                    <Link to="/near-by-hospital">
                                        <button
                                            style={{
                                                backgroundColor: "#F6412D", /* Green */
                                                border: "none",
                                                color: "white",
                                                padding: "6px 25px",
                                                textAlign: "center",
                                                textDecoration: "none",
                                                display: " inline-block",
                                                fontSize: "16px"
                                                , borderRadius: 5
                                            }}

                                        >Consult to our Doctors</button>
                                    </Link>
                                    <div style={{
                                        textAlign: "center", fontWeight: "700", margin: "6px 0"
                                    }}>
                                        OR</div>

                                    <Link
                                        to="/book-appointment">
                                        <button
                                            style={{
                                                backgroundColor: "#F6412D", /* Green */
                                                border: "none",
                                                color: "white",
                                                padding: "6px 25px",
                                                textAlign: "center",
                                                textDecoration: "none",
                                                display: " inline-block",
                                                fontSize: "16px"
                                                , borderRadius: 5
                                            }}

                                        >Search Near By Hospital</button>
                                    </Link>
                                </Container>
                            </>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}



export default GetDisease;