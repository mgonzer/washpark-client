const resourceReducer = (
  initialState = {
    resources:[]
  }, action) => {
    switch (action.type) {
      case "RESOURCES":{
        const state = {...initialState}
        state.resources = action.payload.data
        return state
      }
      case "ONE_RESOURCE": {
        const state = {...initialState}
        state.resources = action.payload.data
        return state
      }
      case "GET_SOME_RESOURCES": {
        const state = {...initialState}
        state.resources = action.payload.data
        return state
      }
      case "ADD_RESOURCE": {
        const state = {...initialState}
        state.resources = state.resources.concat(action.payload)
        return state
      }
        default:
          return initialState
    }
  }

export default resourceReducer
