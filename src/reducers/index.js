import { combineReducers } from 'redux'
import UserReducer from './userReducer'
import HerbReducer from './herbReducer'
import ResourceReducer from './resourceReducer'


const rootReducer = combineReducers({
  user: UserReducer,
  herbs: HerbReducer,
  resources: ResourceReducer
})

export default rootReducer;
