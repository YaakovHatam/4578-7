function resolveAfter2Seconds(x) { 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1(i) {
  var x = await resolveAfter2Seconds(10);
  console.log(i + ': ' + x); // 10
}
for(let i=0; i < 10; i++) {
  f1(i);
}
console.log(14);