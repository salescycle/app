import React from 'react'
import Styles from './SalesCycleMenu.css'

export default function SalesCycleMenu(props) {
	var menuDivFF = Styles.menuDivFactfinding
	var menuDivPrep = Styles.menuDivPreparation
	return (
		<div className={menuDivFF}>
			<div className={Styles.CRMDiv}>
				<div className={Styles.crmTitle}>CRM</div>
				<div className={Styles.crmDataName}>
					<span>Bill</span>
					<span>Braskulina</span>
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
						<span>Bill</span>
						<span>Braskulina</span>
					</div>
					<div className={Styles.crmDataInfo}>
					<span className={Styles.dateOfBirth}>12/02/1973</span>
					<span className={Styles.crmDataAddress}>123 Terry Dr. <br /> WI, 53291</span>
					<span className={Styles.crmDataGender}>M</span>
					<span className={Styles.crmDataScore}>.50</span>
				</div>

			</div>
		</div>
	)
}

SalesCycleMenu.props = {}
