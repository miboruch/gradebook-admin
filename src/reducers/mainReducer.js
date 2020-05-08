export const LOAD_START = 'LOAD_START';
export const LOAD_STOP = 'LOAD_STOP';
export const SET_UNIVERSITIES = 'SET_UNIVERSITIES';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const SET_COURSES = 'SET_COURSES';

const initialState = {
  universities: [],
  courses: [],
  isLoading: false,
  error: null
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case LOAD_STOP:
      return {
        ...state,
        isLoading: false
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SET_UNIVERSITIES:
      return {
        ...state,
        universities: action.payload,
        isLoading: false
      };
    case SET_COURSES:
      return {
        ...state,
        courses: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
