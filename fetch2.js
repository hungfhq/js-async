const fetch = require("node-fetch");

url = 'https://jsonplaceholder.typicode.com/todos/1';
const response = (url) => {
 return fetch(url)
}

let res = response(url);
// res
// .then(response => response.json())
// .then(json => console.log(json))

let jsonP = (a) => {
  return a.then(resp => resp.json());
}

let j = jsonP(res);

j.then(whatever => console.log(whatever))

// console.log(response);
// console.log(j.then(whatever => console.log(whatever)));
// res();