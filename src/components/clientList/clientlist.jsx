import React from 'react'
import {elementType} from 'react-prop-types';
import Chevron from './components/chevron.jsx'
import Styles from './clientList.css'


export default function ClientList(props) {
		const one = 'Website'
		const two = 'Closing'
		const three = 'TBD'
		const four = 'Factfinder'
		const five = 'Approach'
		const six = 'Telephone'

	return (
		<div className={`${Styles.clientRowDiv} row`}>
			<div className={`${Styles.clientNameDiv} columns small-2`}>
				<span className={Styles.clientName}>Bill Brasky</span>
			</div>
			<div className="columns small-10">
			<div className='steps-container'>
				<div className='steps'>
					<span>{one}</span>
				</div>
				<div className='steps'>
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
			</div>
			</div>
		</div>

	)
}

ClientList.props = {
	clientName: elementType
}
