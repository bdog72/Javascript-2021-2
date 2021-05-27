// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// Example 1 -> make a request to get the users

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ------------------------------------------------
// Example 2 -> make a request to get the users

// https://developer.mozilla.org/en-US/docs/Web/API/Body/json

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  });
