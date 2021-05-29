//
//

// Example 1 -> Dynamic Scoping

// let movie = 'Avatar';

// function otherMovie(movieName) {
//   console.log(movie);
//   console.log(movieName);
// }

// function otherOtherMovie() {
//   let movie = 'District 9';

//   otherMovie('The Godfather');
// }

// otherOtherMovie();

// Example 2

let myContext = {
  movie: 'Black Panther 2',
};

function otherMovie(movieDesc) {
  console.log(this.movie, movieDesc);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

function otherOtherMovie() {
  let myContext = {
    movie: 'Avatar',
  };
  otherMovie.call(myContext, 'is coming');
}

otherMovie.call(myContext, 'is not coming');

otherOtherMovie();
