import {connect} from 'react-redux'
import Home from '../../components/home/home.jsx'

import css from '../../components/home/home.css'
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

export default connect(mapStateToProps, mapDispatchToProps)(styleable(css)(Home))
