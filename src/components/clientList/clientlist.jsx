import React from 'react'
import { elementType } from 'react-prop-types';
import Chevron from './components/chevron.jsx'
import Styles from './clientList.css'

export default function ClientList(props) {

	return (
		<div className={`${Styles.clientRowDiv} row`}>
			<div className={`${Styles.clientNameDiv} columns small-2`}>
				<span className={Styles.clientName}>Bill Brasky</span>
			</div>
			<div className="columns small-10">
			<div className="columns small-2">
			<Chevron className="" chevronBackground={Styles.chevronBackground} chevronText='Telephone'/>
			</div>
			<div className="columns small-2">
			<Chevron chevronBackground={Styles.chevronBackground} chevronText='Approach'/>
			</div>
			<div className="columns small-2">
			<Chevron chevronBackground={Styles.chevronBackground} chevronText='Factfinder'/>
			</div>
			<div className="columns small-2">
			<Chevron chevronBackground={Styles.chevronBackground} chevronText='TBD'/>
			</div>
			<div className="columns small-2">
			<Chevron chevronBackground={Styles.chevronBackground} chevronText='Closing'/>
			</div>
			<div className="columns small-2">
			<Chevron chevronBackground={Styles.chevronBackground} chevronText='Website'/>
			</div>
			</div>
		</div>

	)
}

ClientList.props = {
	clientName: elementType
}
