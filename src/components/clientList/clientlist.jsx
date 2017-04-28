import React from 'react'
import {elementType} from 'react-prop-types';
import Chevron from './components/chevron.jsx'
import Styles from './clientList.css'
import StageList from './components/SalesCycleMenu.jsx'

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
					<div className='steps'>
						<span>{four}</span>
					</div>
					<div className='steps'>
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
		</div>

	)
}

ClientList.props = {
	clientName: elementType
}
