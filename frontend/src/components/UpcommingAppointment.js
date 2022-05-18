import React, { useState, useEffect } from 'react';
import { Button, Card, Table, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { dateDifferencier } from '../util';
import { getAllAppointment } from '../actions/appointmentActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import moment from 'moment';





const UpcommingAppointment = () => {

    const [upcommingAppointments, setUpcommingAppointments] = useState([])
    const dispatch = useDispatch()

    const { loading, appointmentList } = useSelector(state => state.appointmentList)


    useEffect(() => {
        dispatch(getAllAppointment())

    }, []);

    useEffect(() => {
        setUpcommingAppointments(appointmentList)
    }, [appointmentList]);

    return (
        <>
            {loading && <Loader />}
            <Row lg={3} >
                {
                    upcommingAppointments?.map((appointment) => (
                        <Col key={appointment._id} style={{
                            marginBottom: 10
                        }}>
                            {dateDifferencier(appointment.appointmentDate) && (
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
                                                    <td >{ moment.utc(appointment.appointmentDate).format('MM/DD/YYYY') }</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <LinkContainer to={{ pathname: `/appointment/${appointment.user}/${appointment._id}`, state: appointment }}>
                                            <Button variant="primary">See Full Details</Button>
                                        </LinkContainer>
                                    </Card.Body>
                                </Card>)}
                        </Col>
                    )
                    )
                }
            </Row>
        </>


    )
};

export default UpcommingAppointment;
