import {combineReducers} from 'redux'
import {routerReducer } from 'react-router-redux'

import users from './users'

const salesCycleApplication = combineReducers({
	users,
	pages: (state = {}) => state,
	routing: routerReducer
})

export default salesCycleApplication
