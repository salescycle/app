import React, {PropTypes} from 'react'
import Header from './components/header.jsx'
import Menu from '../Menu/menu.jsx'
import ClientList from '../clientList/clientList.jsx'

export default function Home(props){
	let {handleClick} = props
	return (
		<div>
			<Header titleText=" this is the header"></Header>
				<Menu menuStyle="chevron"></Menu>
				<button onClick={handleClick}>{'Click'}</button>
				<div className="row">
					<ClientList {...props} />
				</div>
				<button className="button primary">Here is a button</button>
				<a className="button primary" href="#">Primary</a>
		</div>
	)
}

Home.propTypes = {
	handleClick: PropTypes.func.isRequired
}
