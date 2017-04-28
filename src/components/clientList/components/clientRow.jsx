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
					<div className={props.stage3 === 'N' ? 'steps' : 'steps green'}>
						<span>{four}</span>
					</div>
					<div className={props.stage4 === 'N' ? 'steps' : 'steps green'}>
						<span>{five}</span>
					</div>
					<div className={props.stage5 === 'N' ? 'steps' : 'steps green'}>
						<span>{six}</span>
					</div>
					<div className={props.stage6 === 'N' ? 'steps' : 'steps green'}>
						<span>{seven}</span>
					</div>
				</div>
			</div>
			{/*<StageList menuDiv={props.menuDiv}/> */}


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
