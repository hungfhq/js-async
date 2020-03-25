const fetch = require("node-fetch");

// const getData = () => {
//   return fetch('https://jsonplaceholder.typicode.com/todos/1')
//   }

// const greeting = (data) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(data), 1000);
//       setTimeout(() => reject(new Error("Whoops!")), 1000);
//     })
// }

// const parseJson = (resp) => {
//   console.log('parseJson');
//   let res = 'a';
//   res = resp.json();
//   return res;
// }

// const convertTitle = (obj) => {
//   console.log('convertTitle');
//    obj.title = 'english'
//    console.log(obj);
//    return obj
// }

// const display = async () => {
//   const res = await getData();
//   const obj =  parseJson(res);
//   const result = convertTitle(obj);
//   return result;
//     // await greeting('hello').catch(err => console.log(err))
//     // await greeting('I will come first anyway')
//     }
    
//     display()
//     .then(resul => {
//       greeting(resul).then(res => console.log(res));
//     })
//     // .then(res => console.log(res));
//     // console.log(greeting('hello').then().catch(err => console.log('asdf',err)));
//     // greeting('hello').then().catch(err => console.log('asdf',err))


async function display() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await response.json();
  json.title = 'English';
  return json;
}

display()
.then((result) => {
  console.log(result);
})