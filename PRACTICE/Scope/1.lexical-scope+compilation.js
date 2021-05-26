// Example 1 -> shows the compilation
// var x = 10; // target ref
// console.log(x) // source ref

// const y;

// Exmaple 2 -> compilation/parsing
var novel = "Dune"; //GS

function otherBook() { //GS
  var novel = "Moby Dick"; //FS
  console.log("Some Book");
}

function writeBook() { //GS
  var writeNovel = "Why?"; //FS
  console.log(writeNovel);
}

otherBook();
writeBook();
