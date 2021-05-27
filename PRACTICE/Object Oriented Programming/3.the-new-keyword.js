//(3) -> The third way of invoking a function: the new keyword

function movieFunc(movieDesc) {
  console.log(this.name, movieDesc);
}

let newEmptyObject = new movieFunc("ooops");

// console.log(new movieFunc("ooops"));

newEmptyObject.name = "The New Empty Object";

console.log(newEmptyObject);
