import mongoose from 'mongoose'

const patientSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        patinetName: {
            type: String,
            required: true
        },
        patientGender: {
            type: String,
            required: true
        },
        patientPhoneNumber: {
            type: String,
            required: true
        },
        patientDob: {
            type: Date,
            required: true
        },
        patientEmail: {
            type: String,
            required: true
        },
        appointmentDate: {
            type: Date,
            required: true
        },
        appointmentTime: {
            type: String,
            required: true
        },
        hospital: {
            type: String,
            required: true
        },
        appointmentType: {
            type: String,
            required: true
        },
        prefferedPhysian: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const Appointment = mongoose.model('Appointment', patientSchema)

export default Appointment
