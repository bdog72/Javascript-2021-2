//
//
let sentence =
  'The 11 Quick 65 brown 7210 fox _ 6054 jumps jogs 32 over 205 the 51 lazy 103 dog really reallly @ The %% & * () [] {} - + = * / gooooogle yeeeeah';

let sentence2 = 'colour';
// console.log(123);

let reg14X = /j(?!u)/;
let search14Result = reg14X.test(sentence);
// let search14Result = sentence.match(reg14X);
// let search14Result = sentence.match(reg14X).length;
console.log(search14Result);
