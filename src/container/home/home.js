import {connect} from 'react-redux'
import Home from '../../components/home/home.jsx'

import css from '../../components/home/home.css'
import styleable from 'react-styleable'
import {loadUsers} from '../../actions/user-action'
import {fetchClientList} from '../../actions/clientList-actions'

const mapStateToProps = (state) => {
		return state.clientList
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: () => {
			dispatch(fetchClientList())
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(styleable(css)(Home))
