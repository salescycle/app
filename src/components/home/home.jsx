import React, {PropTypes} from 'react'
import Header from './components/header.jsx'
import Menu from '../Menu/menu.jsx'
import ClientList from '../clientList/clientList.jsx'
import Styles from './home.css'

export default function Home(props){
	let {handleClick} = props
	return (
		<div >
			<Header></Header>
				<Menu menuStyle="chevron"></Menu>
				<div className={Styles.mainMenu}>
					<ClientList {...props} />
				</div>
		</div>
	)
}

Home.propTypes = {
	handleClick: PropTypes.func.isRequired
}
