export const LOAD_START = 'LOAD_START';
export const LOAD_STOP = 'LOAD_STOP';
export const SET_UNIVERSITIES = 'SET_UNIVERSITIES';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const SET_COURSES = 'SET_COURSES';
export const POST_ERROR = 'POST_ERROR';
export const POST_SUCCESS = 'POST_SUCCESS';
export const SET_ACCOUNTS = 'SET_ACCOUNTS';
export const SET_DELETE_USER = 'SET_DELETE_USER';

const initialState = {
  universities: [],
  courses: [],
  accounts: [],
  deleteUser: null,
  isLoading: false,
  postError: null,
  error: null,
  postSuccess: false
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        isLoading: true,
        error: null,
        postError: null,
        postSuccess: false
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
    case POST_ERROR:
      return {
        ...state,
        isLoading: false,
        postError: action.payload
      };
    case POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        postSuccess: true
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
    case SET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
        isLoading: false
      };
    case SET_DELETE_USER:
      return {
        ...state,
        deleteUser: action.payload
      };
    default:
      return state;
  }
};
