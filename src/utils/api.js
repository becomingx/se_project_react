const baseUrl = "http://localhost:3001";
const headers = { "Content-Type": "application/json" };

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};

const getItems = () => {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: headers,
  });
};

const addItem = ({ name, imageUrl, weather }) => {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  });
};

const removeItem = (_id) => {
  return request(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: headers,
  });
};

export { getItems, addItem, removeItem };