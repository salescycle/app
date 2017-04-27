class clientListApi {
  static fetchClientList() {
    return fetch('http://salescycle-api.azurewebsites.net/list').then(response => {
      return response.json()
    }).then(clientList => {
		console.log("client list ", clientList)
      return clientList
    })
  }
}

export default clientListApi;
