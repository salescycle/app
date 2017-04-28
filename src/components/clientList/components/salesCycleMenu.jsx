import React from 'react'
import PropTypes from 'prop-types'
import Styles from './SalesCycleMenu.css'

export default function SalesCycleMenu(props) {
	let menuDiv = ''

	if(! props.isVisible){
		return (<div></div>);
	}
	return (
		<div className={Styles.menuDivPreparation}>
			<div className={Styles.CRMDiv}>
				<div className={Styles.crmTitle}>CRM</div>
				<div className={Styles.crmDataName}>
					<span>Zack</span>
					<span>Willow</span>
					</div>
					<div className={Styles.crmDataInfo}>
					<span className={Styles.dateOfBirth}>12/02/1973</span>
					<span className={Styles.crmDataAddress}>123 Terry Dr. <br /> WI, 53291</span>
					<span className={Styles.crmDataGender}>M</span>
				</div>
			</div>
			<div className={Styles.matchesDiv}>
				<div className={Styles.matchesTitle}>Potential Matches</div>

					<div className={Styles.crmDataName}>
						<input type="checkbox" />
						<span>Zackery</span>
						<span>Willow</span>
					</div>
					<div className={Styles.crmDataInfo}>
					<span className={Styles.dateOfBirth}>12/02/1973</span>
					<span className={Styles.crmDataAddress}>132 Terry Dr. <br /> WI, 53291</span>
					<span className={Styles.crmDataGender}>M</span>
					<span className={Styles.crmDataScore}></span>
				</div>

			</div>
		</div>
	)
}

SalesCycleMenu.props = {
	menuDiv: PropTypes.string
}
