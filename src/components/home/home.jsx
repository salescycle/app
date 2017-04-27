import React, {PropTypes} from 'react'
import Header from '../header/header.jsx'
import Menu from '../Menu/menu.jsx'

export default function Home(props){
	let {handleClick} = props
	return (
		<div>
			<Header titleText=" this is the header"></Header>
			<Menu menuStyle="chevron"></Menu>
			<button onClick={handleClick}>{'Click'}</button>
		</div>
	)
}

Home.propTypes = {
	handleClick: PropTypes.func.isRequired
}
