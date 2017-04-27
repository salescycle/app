import React, {PropTypes} from 'react'
import Chevron from './components/chevron.jsx'
import Styles from './clientList.css'

export default function ClientList(props) {
	return (
		<div>
			<div>{props.clientName}</div>
			<Chevron chevronBackground={Styles.chevronBackground} chevronText='Telephone'/>
			<Chevron chevronBackground={Styles.chevronBackground} chevronText='Approach'/>
			<Chevron chevronBackground={Styles.chevronBackground} chevronText='Factfinder'/>
			<Chevron chevronBackground={Styles.chevronBackground} chevronText='TBD'/>
			<Chevron chevronBackground={Styles.chevronBackground} chevronText='Closing'/>
			<Chevron chevronBackground={Styles.chevronBackground} chevronText='Website'/>
		</div>
	)
}

ClientList.props = {
	clientName: PropTypes.string
}
