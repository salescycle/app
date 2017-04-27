import {connect} from 'react-redux'
import ClientList from '../../components/clientList/clientList.jsx'

import css from '../../components/clientList/clientList.css'
import styleable from 'react-styleable'
import {loadUsers} from '../../actions/user-action'

const mapStateToProps = (state) => {
	return state.users
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: () => {
			dispatch(loadUsers())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(styleable(css)(ClientList))
