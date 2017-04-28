import React from 'react'
import {elementType} from 'react-prop-types';
import Chevron from './components/chevron.jsx'
import Styles from './clientList.css'
import StageList from './components/SalesCycleMenu.jsx'
import MenuStyles from './components/SalesCycleMenu.css'
import ClientRow from './components/clientRow.jsx'
import PropTypes from 'prop-types'

export default function ClientList(props) {

	/*let test = 'test value'

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
		let output
			var count = Object.keys(props.users).length - 1;
		  console.log(count)
			console.log('!!!!!!! render of component', props.users)

			if (props.users[0] != undefined)
			{

				var index;

				for (index = 0; index < count; ++index) {
					//let	nameValue = props.users[index]['FIRSTNAME'] + ' ' + props.users[index]['LASTNAME'];
					let nameValue ='test value'
				  output += <ClientRow  one="two" fullName={nameValue} />
				}
			}
			return output
	}*/
function getUsers(){
	console.log('pros in render : ',props.users)
	let	nameValue = 'test'
	return Object.keys(props.users).map(
		function(user,i){
			console.log('user in map ',user, i);
			if (props.users[i] != undefined ){

				nameValue = props.users[i]['FIRSTNAME'] + ' ' + props.users[i]['LASTNAME'];
			}
			return(
				<ClientRow  one="two" fullName={nameValue} key={i}/>
			)
		}
	);
}

let userslist = getUsers()

console.log('user list', userslist);

	return (
		<div>
			{userslist}
			<button onClick={props.handleClick} className="button primary">Get Clients</button>
		</div>
	)
}

ClientList.props = {
	clientName: elementType,
	factfindingClick: PropTypes.func,
	prospectingClick: PropTypes.func,
	handleClick: PropTypes.func

}
