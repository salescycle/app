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

function getClassName (status)
{
	let className = "steps"
	if (status === 'Y')
		{
			className = "steps green"
		} else if (status === 'D') {
			className = "steps yellow"
		}

		return className

}


console.log("this is the stage", props.stage1);
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
					<div className={props.stage1 === 'N' ? 'steps' : 'steps green'}>
						<span>{two}</span>
					</div>
					<div className={props.stage2 === 'N' ? 'steps' : 'steps green'}>
						<span>{three}</span>
					</div>
					<div className={getClassName(props.stage3)}>
						<span>{four}</span>
					</div>
					<div className={getClassName(props.stage4)}>
						<span>{five}</span>
					</div>
					<div className={props.stage5 === 'N' ? 'steps' : 'steps green'} onclick = {props.handleClick}>
						<span>{six}</span>
					</div>
					<div className={props.stage6 === 'N' ? 'steps' : 'steps green'}>
						<span>{seven}</span>
					</div>
				</div>
			</div>
		</div>

	)
}

ClientRow.props = {
	stage0: PropTypes.string,
	stage1: PropTypes.string,
	stage2: PropTypes.string,
	stage3: PropTypes.string,
	stage4: PropTypes.string,
	stage5: PropTypes.string,
	stage6: PropTypes.string,
	users: PropTypes.string,
	handleClick: PropTypes.func,
	fullName: PropTypes.string,

}
