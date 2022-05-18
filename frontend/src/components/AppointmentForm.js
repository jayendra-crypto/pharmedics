import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux'
import { createAppointment } from '../actions/appointmentActions';
;

const AppointmentForm = ({ history }) => {
    const [patinetName, setPatinetName] = useState("")
    const [patientGender, setPatientGender] = useState("")
    const [patientPhoneNumber, setPatientPhoneNumber] = useState("")
    const [patientDob, setPatientDob] = useState("")
    const [patientEmail, setPatientEmail] = useState("")
    const [appointmentDate, setAppointmentDate] = useState("")
    const [appointmentTime, setAppointmentTime] = useState("")
    const [hospital, setHospital] = useState("")
    const [appointmentType, setAppointmentType] = useState("")
    const [prefferedPhysian, setPrefferedPhysian] = useState("")
    const [formErrorMessage, setFormErrorMessage] = useState(false)

    const dispatch = useDispatch()

    const { appointmentInfo, loading, error } = useSelector((state) => state.appointmentCreate)

    const onSubmitHandler = (e) => {
        e.preventDefault()

        if (patinetName === "" || patientGender === "" || patientPhoneNumber === "" || patientDob === "" || patientEmail === "" || appointmentDate === "" || appointmentTime === "" || hospital === "" || appointmentType === "" || prefferedPhysian === "") {
            setFormErrorMessage(true)
        } else {
            setFormErrorMessage(false)
            dispatch(createAppointment({
                patinetName, patientGender, patientPhoneNumber, patientDob,
                patientEmail,
                appointmentDate,
                appointmentTime,
                hospital,
                appointmentType,
                prefferedPhysian,
            }))

        }
    }

    useEffect(() => {
        if (appointmentInfo !== undefined && appointmentInfo._id) {
            history.push(`/appointment/${appointmentInfo.user}/${appointmentInfo._id}`, appointmentInfo)
        }
    }, [appointmentInfo]);

    return (
        <>
            <FormContainer>
                <h2 style={{
                    marginRight: 100,
                }} className='text-center'>Book an Appointment</h2>
                {formErrorMessage && <Message variant='danger'>Please Provide all the details.</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={onSubmitHandler}>
                    <Row style={{
                        width: 700,
                    }}>
                        {/* patient name  */}
                        <Col lg={6}  >
                            <Form.Group controlId='patientId'>
                                <Form.Label>Patient Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter patient full name.'
                                    value={patinetName}
                                    onChange={(e) => setPatinetName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            {/* patinet patientGender */}
                            <Form.Group controlId='patientGender'>
                                <Form.Label >
                                    Gender
                                </Form.Label>

                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadiosMale"
                                    value="Male"
                                    onChange={(e) => setPatientGender(e.target.value)}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadiosFemale"
                                    value="Female"
                                    onChange={(e) =>
                                        setPatientGender(e.target.value)}
                                />


                            </Form.Group>

                            {/* patinet phone number */}
                            <Form.Group controlId='patientPhoneNumber'>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter phone number.'
                                    value={patientPhoneNumber}
                                    onChange={(e) => setPatientPhoneNumber(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            {/* patient dob */}
                            <Form.Group controlId='patientDoB'>
                                <Form.Label>Patient Date of Birth</Form.Label>
                                <Form.Control
                                    type='date'
                                    value={patientDob}
                                    onChange={(e) => setPatientDob(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            {/* patient email */}
                            <Form.Group controlId='patientEmail'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email.'
                                    value={patientEmail}
                                    onChange={(e) => setPatientEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </Col>

                        {/* patient appointment date */}
                        <Col lg={6}>
                            <Form.Group controlId='patientAppointmentDate'>
                                <Form.Label>Choose Appointment Date</Form.Label>
                                <Form.Control
                                    type='date'
                                    placeholder='Select appropriate date.'
                                    value={appointmentDate}
                                    onChange={(e) => setAppointmentDate(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            {/* patient appointment time */}
                            <Form.Group controlId='patientAppointmentTime'>
                                <Form.Label>Choose Appointment Time</Form.Label>
                                <select className="form-control"
                                    value={appointmentTime}
                                    onChange={(e) => setAppointmentTime(e.target.value)}
                                >
                                    <option>Appointment timings</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="10:30 AM">10:30 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="11:30 AM">11:30 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="12:30 PM">12:30 PM</option>
                                    <option value="01:00 PM">01:00 PM</option>

                                    <option value="05:00 PM">05:00 PM</option>
                                    <option value="05:30 PM">05:30 PM</option>
                                    <option value="06:00 PM">06:00 PM</option>
                                    <option value="06:30 PM">05:30 PM</option>
                                    <option value="07:00 PM">06:00 PM</option>
                                    <option value="07:30 PM">07:30 PM</option>
                                    <option value="08:00 PM">08:00 PM</option>
                                    <option value="08:30 PM">08:30 PM</option>
                                    <option value="09:00 PM">09:00 PM</option>


                                </select>

                            </Form.Group>

                            {/* choose your hospital*/}
                            <Form.Group controlId='hospital'>
                                <Form.Label>Choose Hospital</Form.Label>
                                <select className="form-control"
                                    value={hospital}
                                    onChange={(e) => setHospital(e.target.value)}
                                >
                                    <option>Hospital</option>
                                    <option value="Appolo Hospital">Appolo Hospital</option>
                                    <option value="Regincy Healthcare">Regincy Healthcare</option>
                                    <option value="Fortis Hospital">Fortis Hospital</option>
                                    <option value="Nanavati Hospital">Nanavati Hospital</option>

                                </select>
                            </Form.Group>

                            {/* type of appointment*/}
                            <Form.Group controlId='patientAppointmentType'>
                                <Form.Label>Which Type Of Appointment You Require</Form.Label>
                                <select className="form-control"
                                    value={appointmentType}
                                    onChange={(e) => setAppointmentType(e.target.value)}
                                >
                                    <option>Appointment Types</option>
                                    <option value="Normal Consulting">Normal Consulting</option>
                                    <option value="Heart Checkup">Heart Checkup</option>
                                    <option value="Eye Checkup">Eye Checkup</option>
                                    <option value="Hearing Test">Hearing Test</option>
                                    <option value="Blood Test">Blood Test</option>
                                    <option value="Skin Care">Skin Care</option>
                                </select>
                            </Form.Group>

                            {/* preffered physian*/}
                            <Form.Group controlId='prefferedPhysian'>
                                <Form.Label>Select Your Preferred Physician</Form.Label>
                                <select className="form-control"
                                    value={prefferedPhysian}
                                    onChange={(e) => setPrefferedPhysian(e.target.value)}>
                                    <option>Preferred Physician</option>
                                    <option value="Dr. Sanjay Singh">Dr.Sanjay Singh</option>
                                    <option value="Dr. Komal Bisth">Dr. Komal Bisth</option>
                                    <option value="Dr. Maya Patel">Dr. Maya Patel</option>
                                </select>
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* submit button`` */}
                    <Button type='submit' variant='primary'>
                        Book Appointment
                    </Button>
                </Form>
            </FormContainer>
        </>
    )

};

export default AppointmentForm;
