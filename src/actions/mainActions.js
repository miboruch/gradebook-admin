import axios from 'axios';
import {
  FETCH_FAILURE,
  LOAD_START,
  SET_UNIVERSITIES,
  SET_COURSES,
  POST_ERROR,
  POST_SUCCESS
} from '../reducers/mainReducer';

const loadStart = () => {
  return {
    type: LOAD_START
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

export const fetchUniversities = () => async (dispatch) => {
  dispatch(loadStart());

  try {
    const { data } = await axios.get('http://localhost:8080/university/findAll');

    dispatch(setUniversities(data));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export const fetchCourses = () => async (dispatch) => {
  dispatch(loadStart());

  try {
    const { data } = await axios.get('http://localhost:8080/courses/findAll');

    dispatch(setCourses(data));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export const addUser = (values) => async (dispatch) => {
  dispatch(loadStart());

  try {
    await axios.post('http://localhost:8080/user/addUser', values);

    dispatch(postSuccess());
  } catch (error) {
    dispatch(postError(error));
  }
};
