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
import axios from 'axios'

export const createAppointment = (appointmentData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPOINTMENT_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`api/appointment/create-appointment`, appointmentData, config)

    dispatch({
      type: APPOINTMENT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      //   dispatch(logout())
    }
    dispatch({
      type: APPOINTMENT_CREATE_FAIL,
      payload: message,
    })
  }
}

export const getAppointmentById = (patientId, userId) => async (dispatch, getState) => {
  try {
    dispatch({ type: APPOINTMENT_DETAILS_BY_ID_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`api/appointment/${userId}/${patientId}`, config)

    dispatch({
      type: APPOINTMENT_DETAILS_BY_ID_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: APPOINTMENT_DETAILS_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getAllAppointment = () => async (dispatch, getState) => {
  try {
    dispatch({ type: APPOINTMENT_DETAILS_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`api/appointment/`, config)

    dispatch({
      type: APPOINTMENT_DETAILS_SUCCESS,
      payload: data,
    })
    
  } catch (error) {
    dispatch({
      type: APPOINTMENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteAppointment = (userId, patientId,) => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPOINTMENT_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/appointment/delete-appointment/${userId}/${patientId}`, config)

    dispatch({
      type: APPOINTMENT_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      // dispatch(logout())
    }
    dispatch({
      type: APPOINTMENT_DELETE_FAIL,
      payload: message,
    })
  }
}