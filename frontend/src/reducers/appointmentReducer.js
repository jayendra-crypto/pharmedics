import {
    APPOINTMENT_CREATE_REQUEST,
    APPOINTMENT_CREATE_SUCCESS,
    APPOINTMENT_CREATE_FAIL,
    APPOINTMENT_UPDATE_REQUEST,
    APPOINTMENT_UPDATE_SUCCESS,
    APPOINTMENT_UPDATE_FAIL,
    APPOINTMENT_DELETE_REQUEST,
    APPOINTMENT_DELETE_SUCCESS,
    APPOINTMENT_DELETE_FAIL,
    APPOINTMENT_DETAILS_REQUEST,
    APPOINTMENT_DETAILS_SUCCESS,
    APPOINTMENT_DETAILS_FAIL,
    APPOINTMENT_DETAILS_BY_ID_REQUEST,
  APPOINTMENT_DETAILS_BY_ID_SUCCESS,
  APPOINTMENT_DETAILS_BY_ID_FAIL,
} from '../constants/appointmentConstants';


export const createAppointmentReducer = (state = {}, action) => {
    switch (action.type) {
      case APPOINTMENT_CREATE_REQUEST :
        return { loading: true }
      case APPOINTMENT_CREATE_SUCCESS:
        return { loading: false, appointmentInfo: action.payload }
      case APPOINTMENT_CREATE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
export const deleteAppointmentReducer = (state = {}, action) => {
    switch (action.type) {
      case APPOINTMENT_DELETE_REQUEST :
        return { loading: true }
      case APPOINTMENT_DELETE_SUCCESS:
        return { loading: false, appointmentInfo: action.payload }
      case APPOINTMENT_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
export const updateAppointmentReducer = (state = {}, action) => {
    switch (action.type) {
      case APPOINTMENT_UPDATE_REQUEST :
        return { loading: true }
      case APPOINTMENT_UPDATE_SUCCESS:
        return { loading: false, appointmentInfo: action.payload }
      case APPOINTMENT_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
export const allDetailAppointmentReducer = (state = [], action) => {
    switch (action.type) {
      case APPOINTMENT_DETAILS_REQUEST :
        return { loading: true }
      case APPOINTMENT_DETAILS_SUCCESS:
        return { loading: false, appointmentList: action.payload }
      case APPOINTMENT_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
export const detailByIdAppointmentReducer = (state = {}, action) => {
    switch (action.type) {
      case APPOINTMENT_DETAILS_BY_ID_REQUEST :
        return { loading: true }
      case APPOINTMENT_DETAILS_BY_ID_SUCCESS:
        return { loading: false, appointmentInfo: action.payload }
      case APPOINTMENT_DETAILS_BY_ID_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }