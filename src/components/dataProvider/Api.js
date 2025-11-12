//React puede manejar js directo

class Api {
    constructor({baseURL, headers}){
        this._baseURL = baseURL;
        this._header = headers;
    }

_handleServerResponse(res){
 return res.ok? res.json : Promise.reject(`Error: ${res.status}`);

}

getCards(){
return fetch(`${this._baseUrl}/getCards`, {
    headers: this._headers,
}).then(this._handleServerResponse);
}
}

const api = new Api({
    baseURL: "",
    headers: {"Content-Type": "application/json",},
})


export default api;