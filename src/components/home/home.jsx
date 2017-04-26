import React, {PropTypes} from 'react'

export default function Home(props){
	let {handleClick} = props
	return (
		<div>
			<h1>{'Sales Cycle App'}</h1>
			<button onClick={handleClick}>{'Click'}</button>
		</div>
	)
}

Home.propTypes = {
	handleClick: PropTypes.func.isRequired
}
