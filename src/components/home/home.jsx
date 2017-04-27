import React from 'react'
import Header from './components/header.jsx'
import PropTypes from 'prop-types'
import ClientListContainer from '../../container/client/clientList.js'
import Styles from './home.css'

export default function Home(props){
	let {handleClick} = props
	return (
		<div>
				<Header></Header>
				<div className={Styles.mainMenu}>
					<ClientListContainer />
				</div>
		</div>
	)
}

Home.propTypes = {
	handleClick: PropTypes.func
}
