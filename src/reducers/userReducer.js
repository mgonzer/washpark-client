const userReducer = (state = {
  username: "",
  password: ""
}, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      state = {
        ...state,
        username: action.payload
      };
      break;
    case "SET_PASSWORD":
      state = {
        ...state,
        password: action.payload
      }
      break;
  }
  return state;
}

export default userReducer;
