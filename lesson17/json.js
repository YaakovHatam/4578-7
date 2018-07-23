let url = 'data.json';
const promise = fetch(url).then(res => res.json()).then((out) => {
  console.log(out);
}).catch(err => { throw err });