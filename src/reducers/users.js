import iniitialState from './initial-state'
var users = [
]

function usersReducer(state=iniitialState, action){
    switch (action.type) {
      case 'FETCH_CLIENTLIST_SUCCESS':
        return Object.assign({}, state,
              action.payload
              )
        break;
      default :
			case 'HANDLE_PROSPECTING_CLICK':
			return Object.assign({}, state, {
							menuVisible : false
						}
					)
			break;
        return iniitialState
    }
}

export default usersReducer
