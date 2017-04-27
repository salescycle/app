import React, {PropTypes} from 'react'
<<<<<<< Updated upstream
import Header from '../header/header.jsx'
import Menu from '../Menu/menu.jsx'
import ClientList from '../clientList/clientList.jsx'
var  chevronImage = require('../../svgs/chevron1.svg')
=======
import Header from './components/header.jsx'
>>>>>>> Stashed changes

export default function Home(props){
	let {handleClick} = props
	return (
		<div>
<<<<<<< Updated upstream
			<Header titleText=" this is the header"></Header>
			<Menu menuStyle="chevron"></Menu>
			<button onClick={handleClick}>{'Click'}</button>
			<ClientList {...props} />
			<img  src={chevronImage} />
=======
			<div>
				<Header titleText=" this is the header"></Header>
			</div>
			<div>
				<button onClick={handleClick}>{'Click'}</button>
			</div>
>>>>>>> Stashed changes
		</div>
	)
}

Home.propTypes = {
	handleClick: PropTypes.func.isRequired
}
