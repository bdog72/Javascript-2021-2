// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

/*
An HTTP requeest is made in 4 easy steps

1- Instantiate a new XHR Object
2- Create the Request (Request Setup)
3- Decide what to do with the data recieved/fetched if the request is successful
4- Send the request
*/

const btn = document.querySelector("button");
const para = document.querySelector("p");

btn.addEventListener("click", textData);

function textData() {
  const NewXHR = new XMLHttpRequest(); // Step 1

  NewXHR.open("GET", "5.info.txt", true); // Step 2

  // Step 3
  NewXHR.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      // console.log(this);
      para.innerText = this.responseText;
    }
  };

  NewXHR.send(); // Step 4
}
