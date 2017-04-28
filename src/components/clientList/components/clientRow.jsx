import React from 'react'
import PropTypes from 'prop-types'
import Styles from '../../clientList/clientList.css'

export default function ClientRow(props) {
	const one = 'Prospecting'
	const two = 'Telephoning'
	const three = 'Approach'
	const four = 'Factfinding'
	const five = 'Preparation'
	const six = 'Closing'
	const seven = 'Follow-Through'


	console.log("this is the props", props);
	return (

		<div className={`${Styles.clientRowDiv} row expanded collapse`}>
			<div className={`${Styles.clientNameDiv} columns small-2`}>
			{props.fullName}
			</div>
			<div className={`${Styles.chevronContainer} columns small-10`}>
				<div className='steps-container'>
					<div className='steps green'>
						<span>{one}</span>
					</div>
					<div className='steps yellow'>
						<span>{two}</span>
					</div>
					<div className='steps red'>
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
			{/*<StageList menuDiv={props.menuDiv}/> */}


		</div>

	)
}

ClientRow.props = {
	one: PropTypes.string,
	two: PropTypes.string,
	three: PropTypes.string,
	four: PropTypes.string,
	five: PropTypes.string,
	six: PropTypes.string,
	seven: PropTypes.string,
	users: PropTypes.string,
	handleClick: PropTypes.func,
	fullName: PropTypes.string,

}
