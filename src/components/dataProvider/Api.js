//React puede manejar js directo

class Api {
    constructor({baseURL, headers}){
        this._baseURL = baseURL;
        this._header = headers;
    }

_handleServerResponse(res){
 return res.ok? res.json() : Promise.reject(`Error: ${res.status}`);

}


getCards(){
return fetch(`${this._baseURL}/getCards`, {
    headers: this._header,
}).then(this._handleServerResponse);
}

updateCard(cardId, like){
    return fetch(`${this._baseURL}/updateCard/${cardId}`, {
        method: "PATCH",
        headers: this._header,
        body: JSON.stringify({like: like}),
    }).then(this._handleServerResponse);
}

deleteCard(cardId){
    return fetch(`${this._baseURL}/delateCard/${cardId}`, {
    method: "DELETE",
    headers: this._header,
}).then(this._handleServerResponse);
}


}


const api = new Api({
    baseURL: "https://exercise-2-wu6w.onrender.com",
    headers: {"Content-Type": "application/json",},
});


export default api;