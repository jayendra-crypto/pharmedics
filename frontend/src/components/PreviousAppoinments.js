import React, { useState, useEffect } from 'react';
import { Alert, Button, Card, Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { getAllAppointment } from '../actions/appointmentActions';
import Loader from './Loader'
import { dateDifferencier } from '../util';
import moment from 'moment';



const PreviousAppoinments = ({
    showAppointmentWindow,
    showUpcommingAppointment,
    showPreviousAppointments
}) => {

    const [previousAppointments, setPreviousAppointments] = useState([])
    const dispatch = useDispatch()

    const { loading, appointmentList } = useSelector(state => state.appointmentList)


    useEffect(() => {
        dispatch(getAllAppointment())

    }, []);

    useEffect(() => {
        setPreviousAppointments(appointmentList)
    }, [appointmentList]);



    return <div>
        {
            previousAppointments?.length === 0 ? (
                <div style={{
                    width: "100%",
                    height: "50vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column", marginLeft: 70
                }}>
                    <Alert variant="danger" style={{
                        width: "100%",
                        textAlign: "center"
                    }}>
                        No Previous Appointment
                    </Alert>


                    <LinkContainer to="/book-appointment">
                        <Button style={{
                            backgroundColor: "#3CA861",
                            border: "none",
                            color: "white",
                            textAlign: "center",
                            textDecoration: "none",
                            display: " inline-block",

                        }}
                            onClick={() => {
                                showPreviousAppointments(false)
                                showAppointmentWindow(true)
                                showUpcommingAppointment(false)
                            }}
                        >Schedule An Appointment</Button>
                    </LinkContainer>
                </div>
            ) : (
                <>
                    <p style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 18
                    }}>Your Previous Appointments</p>
                    {loading && <Loader />}
                    <Row lg={3} >
                        {previousAppointments?.map((appointment, i) => (
                            <Col key={appointment._id} style={{
                                marginBottom: 10
                            }}>
                                {!dateDifferencier(appointment.appointmentDate) && (
                                    <Card style={{ width: '25rem' }}>
                                        <Card.Body>
                                            <Card.Title>Eye Test</Card.Title>
                                            <Table responsive size='sm'>
                                                <tbody>
                                                    <tr>
                                                        <td>Patient Id</td>
                                                        <td >{appointment._id}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Patient Name</td>
                                                        <td >{appointment.patinetName}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Appointment Date</td>
                                                        <td >{moment.utc(appointment.appointmentDate).format('MM/DD/YYYY')}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <LinkContainer to={{ pathname: `/appointment/${appointment.user}/${appointment._id}`, state: appointment }} >
                                                <Button variant="primary">See Full Details</Button>
                                            </LinkContainer>
                                        </Card.Body>
                                    </Card>
                                )}
                            </Col>

                        ))}
                    </Row>
                </>
            )
        }
    </div>;
};

export default PreviousAppoinments;
