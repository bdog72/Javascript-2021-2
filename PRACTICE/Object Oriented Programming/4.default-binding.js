var movie = "Rush";

function movieFunc(movieDesc) {
  console.log(this.movie, movieDesc);
}

function otherMovieFunc(movieDesc) {
  "use strict";
  console.log(this.movie, movieDesc);
}

movieFunc("is a racing movie");

otherMovieFunc("is also a racing movie");

// Binding Precedence

/*
1 - the new keyword

2- call()/apply()/bind()

3- Context Object

4- Default Binding

*/
