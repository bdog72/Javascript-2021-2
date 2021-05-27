// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    // resolve("Success");
    reject("whooopsie");
  }, 1000);
});

// myFirstPromise.then(
//   (successMsg) => {
//     console.log(successMsg);
//   },
//   (errorMsg) => {
//     console.log(errorMsg);
//   }
// );

// .then() + .catch()
myFirstPromise
  .then((successMsg) => {
    console.log(successMsg);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  });
