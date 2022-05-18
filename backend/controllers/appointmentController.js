import expressAsyncHandler from "express-async-handler";
import Appointment from "../models/appointmentModel.js";

// Create Appointment
// @POST request
const createAppointment = expressAsyncHandler(async (req, res) => {
  const {
    patinetName,
    patientGender,
    patientPhoneNumber,
    patientDob,
    patientEmail,
    appointmentDate,
    appointmentTime,
    hospital,
    appointmentType,
    prefferedPhysian,
  } = req.body;

  const appointment = new Appointment({
    user: req.user._id,
    patinetName,
    patientGender,
    patientPhoneNumber,
    patientDob,
    patientEmail,
    appointmentDate,
    appointmentTime,
    hospital,
    appointmentType,
    prefferedPhysian,
  });

  const createdAppointment = await appointment.save();
  res.status(201).json(createdAppointment);
});

// Delete Appointment
// @DELETE request
const deleteAppointment = expressAsyncHandler(async (req, res) => {
  const appointment = await Appointment.find({
    _id: req.params.id,
    user: req.params.userId,
  });
  if (appointment) {
    await appointment[0].remove();
    res.json({ message: "Appointment removed" });
  } else {
    res.status(404);
    throw new Error("Appointment not found");
  }
});

// Update Request
// @PUT request
const updateAppointment = expressAsyncHandler(async (req, res) => {
  const {
    patinetName,
    patientGender,
    patientPhoneNumber,
    patientDob,
    patientEmail,
    appointmentDate,
    appointmentTime,
    hospital,
    appointmentType,
    prefferedPhysian,
  } = req.body;

  const appointment = await Appointment.find({
    _id: req.params.id,
    user: req.params.userId,
  });

  if (appointment) {
    appointment[0].patinetName = patinetName;
    appointment[0].patientGender = patientGender;
    appointment[0].patientPhoneNumber = patientPhoneNumber;
    appointment[0].patientDob = patientDob;
    appointment[0].patientEmail = patientEmail;
    appointment[0].appointmentDate = appointmentDate;
    appointment[0].appointmentTime = appointmentTime;
    appointment[0].hospital = hospital;
    appointment[0].appointmentType = appointmentType;
    appointment[0].prefferedPhysian = prefferedPhysian;

    const updatedAppointment = await appointment[0].save();
    res.json(updatedAppointment);
  } else {
    res.status(404);
    throw new Error("Appointment not found");
  }
});

// Get All Appointments
// @GET request
const getAllAppointment = expressAsyncHandler(async (req, res) => {
  const allAppointments = await Appointment.find({});

  if (allAppointments.length !== 0) {
    res.json(allAppointments);
  } else {
    res.status(404);
    throw new Error("No Appointment found");
  }
});

// Get Appointment By Id
// @GET request
const getAppointmentById = expressAsyncHandler(async (req, res) => {
  const appointment = await Appointment.find({
    _id: req.params.id,
    user: req.params.userId,
  });

  if (appointment) {
    res.json(appointment[0]);
  } else {
    res.status(404);
    throw new Error("No Appointment found");
  }
});
export {
  createAppointment,
  deleteAppointment,
  updateAppointment,
  getAllAppointment,
  getAppointmentById,
};
