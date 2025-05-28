const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER_LOGIN":
      return { ...state, error: null };
    case "USER_LOGIN_SUCCESS":
      return { ...state, loading: false, user: action.payload, error: null };
    case "USER_LOGIN_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "USER_LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;
