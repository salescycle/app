import React, {PropTypes} from 'react'
import Chevron from './components/chevron.jsx'

export default function ClientList(props){
  return (
		<div>
		      <div>{props.clientName}</div>
					<Chevron chevronText='Telephone'/>
					<Chevron chevronText='Approach'/>
					<Chevron chevronText='Factfinder'/>
					<Chevron chevronText='TBD'/>
					<Chevron chevronText='Closing'/>
					<Chevron chevronText='Website'/>
		</div>
  )
}

ClientList.props = {
  clientName: PropTypes.string
}
