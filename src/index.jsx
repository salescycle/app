import {AppContainer as ReactHotLoader} from 'react-hot-loader'
import {Provider} from 'react-redux'
import React from 'react'
import {render} from 'react-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import {Router, Route, hashHistory } from 'react-router'
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import immutableStateInvariant from 'redux-immutable-state-invariant'

import salesCycleApplication from './reducers'
import Home from './container/home/home'
//import ExamplePageOne from './container/example-page-one'
//import ExamplePageTwo from './container/example-page-two'
import iniitialState from './reducers/initial-state'
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootElement = document.getElementById('root')

function getMiddlewares(){
	const middlewares = []
	middlewares.push(immutableStateInvariant())
	middlewares.push(routerMiddleware(hashHistory))
	middlewares.push(thunk)
	middlewares.push(logger())
	return middlewares
}
const store  = createStore(salesCycleApplication, iniitialState, composeEnhancers(
	//add middleware
	//https://github.com/KELiON/redux-async-initial-state
	applyMiddleware(...getMiddlewares())
))
const history = syncHistoryWithStore(hashHistory, store)

render(
	<ReactHotLoader>
		<Provider store={store}>
			<Router history={history}>
				<Route
					component={Home}
					path="/"
				/>
			</Router>
		</Provider>
	</ReactHotLoader>,
	rootElement
)
