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
        default:
          return initialState
    }
  }

export default herbReducer
