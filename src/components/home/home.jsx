import React from 'react'
import Header from './components/header.jsx'
import PropTypes from 'prop-types'
import ClientListContainer from '../../container/client/clientList.js'
import Styles from './home.css'
import StageList from '../../components/clientList/components/SalesCycleMenu.jsx'

export default function Home(props) {
	let {handleClick} = props
	return (
		<div>
			<div className="row collapse">
				<div className="columns small-8">
					<Header titleText="| Might Morphin Power Client Syncer"></Header>
				</div>
			</div>
			<div className="row expanded collapse">
				<div className={`${Styles.mainMenu} columns small-12`}>
					<ClientListContainer/>
					<StageList />
				</div>
			</div>
		</div>
	)

}

Home.propTypes = {
    handleClick: PropTypes.func
}
