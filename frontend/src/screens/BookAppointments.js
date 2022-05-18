import React, { useState } from "react";
import { Button, Row, Col} from "react-bootstrap";
import AppointmentForm from "../components/AppointmentForm";
import PreviousAppoinments from "../components/PreviousAppoinments";
import UpcommingAppointment from "../components/UpcommingAppointment";

const BookAppointments = ({ history }) => {
  const [showAppointmentWindow, setShowAppointmentWindow] = useState(true);
  const [showUpcommingAppointment, setShowUpcommingAppointment] =
    useState(false);
  const [showPreviousAppointments, setShowPreviousAppointments] =
    useState(false);

  return (
    <>
      <Row>
        <Col lg={2}>
          <Row
            style={{
              marginBottom: 12,
            }}
          >
            <Button
              type="button"
              style={{
                backgroundColor: "#3CA861" /* Green */,
                border: "none",
                color: "white",
                textAlign: "center",
                textDecoration: "none",
                display: " inline-block",
              }}
              onClick={() => {
                setShowAppointmentWindow(true);
                setShowUpcommingAppointment(false);
                setShowPreviousAppointments(false);
              }}
            >
              Schedule An Appointment
            </Button>
          </Row>
          <Row
            style={{
              marginBottom: 12,
            }}
          >
            {" "}
            <Button
              type="button"
              style={{
                backgroundColor: "#3CA861" /* Green */,
                border: "none",
                color: "white",
                textAlign: "center",
                textDecoration: "none",
                display: " inline-block",
              }}
              onClick={() => {
                setShowAppointmentWindow(false);
                setShowUpcommingAppointment(true);
                setShowPreviousAppointments(false);
              }}
            >
              Upcoming Appointment
            </Button>
          </Row>
          <Row
            style={{
              marginBottom: 12,
            }}
          >
            <Button
              type="button"
              style={{
                backgroundColor: "#3CA861" /* Green */,
                border: "none",
                color: "white",
                textAlign: "center",
                textDecoration: "none",
                display: " inline-block",
              }}
              onClick={() => {
                setShowAppointmentWindow(false);
                setShowUpcommingAppointment(false);
                setShowPreviousAppointments(true);
              }}
            >
              Previous Appointments
            </Button>
          </Row>
        </Col>
        <Col lg={10}>
          {showAppointmentWindow ? (
            <AppointmentForm history={history} />
          ) : showUpcommingAppointment ? (
            <div>
              <p
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Upcomming Appointments
              </p>

              <UpcommingAppointment />
            </div>
          ) : (
            <PreviousAppoinments
              showAppointmentWindow={(value) => setShowAppointmentWindow(value)}
              showUpcommingAppointment={(value) =>
                setShowUpcommingAppointment(value)
              }
              showPreviousAppointments={(value) =>
                setShowPreviousAppointments(value)
              }
              history={history}
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default BookAppointments;
