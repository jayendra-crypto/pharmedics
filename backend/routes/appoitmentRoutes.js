import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'
import { createAppointment, deleteAppointment, updateAppointment, getAllAppointment,getAppointmentById } from '../controllers/appointmentController.js';


router.get("/", protect, getAllAppointment)
router.get("/:userId/:id", protect, getAppointmentById)
router.post("/create-appointment", protect, createAppointment)
router.put("/update-appointment/:userId/:id", protect, updateAppointment)
router.delete("/delete-appointment/:userId/:id", protect, deleteAppointment)

export default router
