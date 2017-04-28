import React from 'react'
import {elementType} from 'react-prop-types';
import Chevron from './components/chevron.jsx'
import Styles from './clientList.css'
import StageList from './components/SalesCycleMenu.jsx'
import MenuStyles from './components/SalesCycleMenu.css'
import PropTypes from 'prop-types'



export default function ClientList(props) {
	const one = 'Prospecting'
	const two = 'Telephoning'
	const three = 'Approach'
	const four = 'Factfinding'
	const five = 'Preparation'
	const six = 'Closing'
	const seven = 'Follow-Through'

	return (
		<div className={`${Styles.clientRowDiv} row expanded collapse`}>
			<div className={`${Styles.clientNameDiv} columns small-2`}>
				<span className={Styles.clientName}>Bill Brasky</span>
			</div>
			<div className={`${Styles.chevronContainer} columns small-10`}>
				<div className='steps-container'>
					<div className='steps'>
						<span>{one}</span>
					</div>
					<div className='steps active'>
						<span>{two}</span>
					</div>
					<div className='steps'>
						<span>{three}</span>
					</div>
					<div onClick={props.handleFactfindingClick} className='steps'>
						<span>{four}</span>
					</div>
					<div onClick={props.handleprospectingClick} className='steps'>
						<span>{five}</span>
					</div>
					<div className='steps'>
						<span>{six}</span>
					</div>
					<div className='steps'>
						<span>{seven}</span>
					</div>
				</div>
			</div>
			<StageList menuDiv={props.menuDiv} />

			<button onClick={props.handleClick} className="button primary">Get Clients</button>
		</div>

	)
}

ClientList.props = {
	clientName: elementType,
	handleFactfindingClick: PropTypes.func,
	handleprospectingClick: PropTypes.func,
	handleClick: PropTypes.func

}
