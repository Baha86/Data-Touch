class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

 setFeedBack({name, phone, email, comment}) {
    return fetch(`${this._baseUrl}/feedback`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        name, phone, email, comment
      }
    }).then(this._checkResponse);
  }

  _checkResponse(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(`Ошибка: ${result.status}`);
  }
}

const baseUrl = "http://localhost:3001";

const api = new Api({
  baseUrl: baseUrl,
});

export default api;
