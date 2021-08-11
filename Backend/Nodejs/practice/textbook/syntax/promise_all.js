const promise1 = Promise.resolve("Success 1");
const promise2 = Promise.resolve("Success 2");

Promise.all([promise1, promise2])
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
