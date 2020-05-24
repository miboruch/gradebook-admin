import axios from 'axios';
import {
  FETCH_FAILURE,
  LOAD_START,
  LOAD_STOP,
  SET_UNIVERSITIES,
  SET_COURSES,
  POST_ERROR,
  POST_SUCCESS,
  SET_ACCOUNTS
} from '../reducers/mainReducer';
const API_URL = 'http://localhost:8080';

const loadStart = () => {
  return {
    type: LOAD_START
  };
};

const loadStop = () => {
  return {
    type: LOAD_STOP
  };
};

const setUniversities = (universities) => {
  return {
    type: SET_UNIVERSITIES,
    payload: universities
  };
};

const setCourses = (courses) => {
  return {
    type: SET_COURSES,
    payload: courses
  };
};

const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error
  };
};

const postError = (error) => {
  return {
    type: POST_ERROR,
    payload: error
  };
};

const postSuccess = () => {
  return {
    type: POST_SUCCESS
  };
};

const setAccounts = (accounts) => {
  return {
    type: SET_ACCOUNTS,
    payload: accounts
  };
};

export const fetchUniversities = () => async (dispatch) => {
  dispatch(loadStart());

  try {
    const { data } = await axios.get(`${API_URL}/university/findAll`);

    dispatch(setUniversities(data));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export const fetchCourses = () => async (dispatch) => {
  dispatch(loadStart());

  try {
    const { data } = await axios.get(`${API_URL}/courses/findAll`);

    dispatch(setCourses(data));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export const addUser = (values) => async (dispatch) => {
  dispatch(loadStart());

  try {
    await axios.post(`${API_URL}/user/addUser`, values);

    dispatch(postSuccess());
  } catch (error) {
    dispatch(postError(error));
  }
};

export const fetchAllUsers = () => async (dispatch) => {
  dispatch(loadStart());

  try {
    const { data } = await axios.get(`${API_URL}/user/findAll`);

    dispatch(setAccounts(data));
  } catch (error) {
    dispatch(loadStop());
  }
};
