import React from 'react'
import Header from './components/header.jsx'
import PropTypes from 'prop-types'
import ClientListContainer from '../../container/client/clientList.js'
import Styles from './home.css'
import {fetchClientList} from '../../actions/clientList-actions'


export default function Home(props) {
<<<<<<< HEAD
	let {handleClick} = props
	return (
		<div>
			<div className="row collapse">
				<div className="columns small-8">
					<Header titleText="| Might Morphin Power Client Syncer"></Header>
				</div>
			</div>
			<div className={Styles.mainMenu}>
				<ClientListContainer/>
			</div>
		</div>
	)
=======
    let {handleClick} = props
    return (
        <div>
            <div className="row collapse">
                <div className="columns small-8">
                    <Header titleText="| Might Morphin Power Client Syncer"></Header>
                </div>
            </div>
            <div className={Styles.mainMenu}>
                <ClientListContainer/>
            </div>
        </div>
    )
>>>>>>> origin/Design
}

Home.propTypes = {
    handleClick: PropTypes.func
}

const mapStateToProps = (state) => {
	return state.clientList
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: () => {
			dispatch(fetchClientList())
		}
	}
