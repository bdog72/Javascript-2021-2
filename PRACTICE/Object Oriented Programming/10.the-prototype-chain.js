function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (desc) {
  console.log(this.teacher, desc);
};

let js = new Workshop("Teddy");
let django = new Workshop("John");

js.ask("is a great teacher");
django.ask("is also a great teacher");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
