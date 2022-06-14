export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "SIGNUP":
      return {
        ...state,
        isSignedUp: true,
        encodedToken: payload.data._tokenResponse.refreshToken,
      };
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        encodedToken: payload.data._tokenResponse.refreshToken,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        isLoggedOut: true,
        encodedToken: payload,
      };
    default:
      return state;
  }
};
