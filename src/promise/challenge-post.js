import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  "title": "204",
  "price": 204,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://images.pexels.com/photos/1990241/pexels-photo-1990241.jpeg"]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));