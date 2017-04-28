import {connect} from 'react-redux'
import ClientList from '../../components/clientList/clientList.jsx'
import React from 'react'
import css from '../../components/clientList/clientList.css'
import styleable from 'react-styleable'
import {fetchClientList,handlePropectingClick} from '../../actions/clientList-actions'

class ClientListContainer extends React.Component {
  componentDidMount() {
      this.props.actions.fetchClientList();
  }
}

const mapStateToProps = (state) => {
    console.log("*@&*(@states ", state)
  	return state
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: () => {
			dispatch(fetchClientList())
		},
		prospectingClick: () =>  {
			dispatch(handlePropectingClick())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(styleable(css)(ClientList))
