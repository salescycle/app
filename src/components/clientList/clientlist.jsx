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
	let test = 'test value'

	var count = Object.keys(props.users).length - 1;
  console.log(count);
	console.log('!!!!!!! render of component', props.users)

	if (props.users[0] != undefined)
	{
		test = props.users[0]['FIRSTNAME'] + ' ' + props.users[0]['LASTNAME'];
		var index;

		for (index = 0; index < count; ++index) {
		    console.log(props.users[index]);
		}
	}

	function clientListItems(usersList) {
			let nameValue = 'First Time'
			if (props.users[0] != undefined)
			{
				nameValue = usersList[0]['FIRSTNAME'] + ' ' + usersList[0]['LASTNAME'] + ' from the function'
			} else {

			}
			return <span className={Styles.clientName}>{nameValue}</span>
	}


	return (
		<div className={`${Styles.clientRowDiv} row expanded collapse`}>
			<div className={`${Styles.clientNameDiv} columns small-2`}>
				{clientListItems(props.users)}
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
