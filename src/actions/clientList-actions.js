import * as types from './actionTypes.js';
import clientListApi from '../api/clientListApi.js';

function fetchClientListSuccess(payload) {
  return {type: types.FETCH_CLIENTLIST_SUCCESS, payload: payload}
}

export function fetchClientList() {
  return function(dispatch) {
    return clientListApi.fetchClientList().then(clientListPayload => {
      dispatch(fetchClientListSuccess(clientListPayload))
    })
  }
}
