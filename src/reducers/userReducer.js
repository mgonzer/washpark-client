const userReducer = (
  initialState = {
  users:{},
  user: {data:{
    id: 0,
    diagnosis: '',
    first_name: '',
    notes: [],
    password: '',
    resources: [],
    treatment_plan: '',
    username: ''
  }}
}, action) => {
  switch (action.type) {
    case "LOGIN":{
      const state = {...initialState}
      state.user = action.payload
      return state
    }
    case "SIGNUP":{
      const state = {...initialState}
      state.user = action.payload
      return state
    }
    case "ADMIN_LOGIN":{
      const state = {...initialState}
      state.users = action.payload
      return state
    }
    case "GET_ONE_PATIENT": {
      const state = {...initialState}
      state.user = action.payload
      return state
    }
    case "GET_PATIENTS": {
      const state = {...initialState}
      state.users = action.payload
      return state
    }
    case "LOAD_PATIENT": {
      const state = {...initialState}
      state.user = action.payload
      return state
    }
    case "ADD_NOTE": {
      const state = {...initialState}
      state.user.data.notes = state.user.data.notes.concat(action.payload)
      return state
    }
    case "PIN_ARTICLE": {
      const state = {...initialState}
      state.user = action.payload
      return state
    }
    case "PIN_ARTICLE_PRACTITIONER": {
      const state = {...initialState}
      state.user = action.payload
      return state
    }

    default:
      return initialState
  }
}

export default userReducer;
