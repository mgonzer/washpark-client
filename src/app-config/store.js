import {compose, createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise'
import logger from 'redux-logger';
import reducers from '../reducers'


const Store = compose(
  applyMiddleware(promise, logger))(createStore)(reducers)


export default Store
