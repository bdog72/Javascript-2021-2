let movieShop = {
  movie: "Focus",
  movieFunc: (movieDesc) => {
    console.log(this.movie, movieDesc);
  },
};

movieShop.movieFunc("is a good movie");

movieShop.movieFunc.call(movieShop, "is still a good movie");
