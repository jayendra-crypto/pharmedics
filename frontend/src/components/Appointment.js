import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteAppointment } from '../actions/appointmentActions';
import moment from 'moment';
import { dateDifferencier } from '../util';



const Appointment = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const [patientDetails, setPatientDetails] = useState(history.location.state)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteAppointmentHandler = () => {
        dispatch(deleteAppointment(patientDetails.user, patientDetails._id))
        history.push("/book-appointment")
    }

    return <div>
        <Button variant='primary' style={{
            marginBottom: 15
        }}
            onClick={() => {
                history.goBack()
            }}
        >
            Back
        </Button>
        <Table striped bordered hover size="sm" variant='dark'>
            <thead>
                <tr >
                    <th colSpan="2"> Details Of Appointment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Patient Id</td>
                    <td>{patientDetails._id}</td>
                </tr>
                <tr>
                    <td>Patient Name</td>
                    <td>{patientDetails.patinetName}</td>
                </tr>
                <tr>
                    <td>Patient Phone Number</td>
                    <td>{patientDetails.patientPhoneNumber}</td>
                </tr>
                <tr>
                    <td>Patient Date Of Birth</td>
                    <td>{moment.utc(patientDetails.patientDob).format('MM/DD/YYYY')}</td>

                </tr>
                <tr>
                    <td>Patient Email</td>
                    <td>{patientDetails.patientEmail}</td>
                </tr>
                <tr>
                    <td>Appointment Date</td>
                    <td>{moment.utc(patientDetails.appointmentDate).format('MM/DD/YYYY')}</td>
                </tr>
                <tr>
                    <td>Appointment Time</td>
                    <td>{patientDetails.appointmentTime}</td>
                </tr>
                <tr>
                    <td>Hospital</td>
                    <td>{patientDetails.hospital}</td>
                </tr>
                <tr>
                    <td>Appointment Type</td>
                    <td>{patientDetails.appointmentType}</td>
                </tr>
                <tr>
                    <td>Prefered Physian</td>
                    <td>{patientDetails.prefferedPhysian}</td>
                </tr>


            </tbody>
        </Table>

        {dateDifferencier(patientDetails.appointmentDate) &&
            <>
                <Button variant='primary' style={{
                    marginRight: 15
                }}>
                    Update
                </Button>

                <Button variant='danger' onClick={() => handleShow()}>
                    Cancel
                </Button>


                {
                    show && (
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Cancel Appointment</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Are you sure you want to cancel this appointment ?
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary"
                                    onClick={deleteAppointmentHandler}
                                >Yes</Button>
                            </Modal.Footer>
                        </Modal>
                    )
                }
            </>
        }


    </div>;
};

export default Appointment;
