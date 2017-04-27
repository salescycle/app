class clientListApi {
  static fetchClientList() {
    return fetch('http://salescycle-api.azurewebsites.net/list').then(response => {
      return response.json()
    }).then(clientList => {
      return clientList
    })
  }
}

export default clientListApi;
