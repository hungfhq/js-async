// const fetch = require("node-fetch");
// async function display() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const json = await response.json();
//   json.title = 'English';
//   return json;
// }

// display()
// .then((result) => {
//   console.log(result);
// })

// const fetch = require('node-fetch');

// fetch('https://github.com/')
// 	.then(res => res.text())
// 	.then(body => console.log(body));

const fetch = require('node-fetch');

function createP(text) {
  const p = document.getElementById('paragraph');
  p.innerHTML = text;
}

fetch('https://api.github.com/users/github')
	.then(res => res.json())
  .then(json => {
    console.log(json);
    createP(json)
  });
  