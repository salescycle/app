import * as types from './actionTypes.js';
import clientListApi from '../api/clientListApi.js';

function fetchClientListSuccess(payload) {
  return {type: types.FETCH_CLIENTLIST_SUCCESS, payload: payload}
}

function handlePropectingClick(payload){
	return {type: types.HANDLE_PROSPECTING_CLICK, payload:payload}
}

export function fetchClientList() {
  return function(dispatch) {
    return clientListApi.fetchClientList().then(clientListPayload => {
      dispatch(fetchClientListSuccess(clientListPayload))
    })
  }
}


export function handleProspectingClicked(){

			var menuDiv = ''
			

}
