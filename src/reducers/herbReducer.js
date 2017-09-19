const herbReducer = (
  initialState = {
    herbs:[]
  }, action) => {
    switch (action.type) {
      case "HERBS":{
        const state = {...initialState}
        state.herbs = action.payload.data
        return state
      }
      case "UPDATE_HERBS": {
        const state = {...initialState}
        state.herbs = action.payload.data
        return state
      }
      case "ADD_HERB": {
        const state = {...initialState}
        state.herbs = state.herbs.concat(action.payload.data)
        return state
      }
        default:
          return initialState
    }

  }

export default herbReducer
