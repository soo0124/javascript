// //문제 1 - hoisting
// console.log(a);
// var a = 10;
// console.log(a);

//문제2
// console.log(b);
// let b = 10;
// console.log(b);

//문제3
// var a = 10;
// if(true){
//     console.log(a);
// }

//문제4
// let a = 10;
// if(true){
//     console.log(a);
//     let a = 20;
// }

//문제5
// let a = 10;
// if(true){
//    console.log(a);
//}

//문제6
// var a = 30;
// if(true){
//     console.log(a);
//     var a = 20;
// }

//문제7
// var x = 0;
// {
//     var x = 1;
//     console.log(x);
// }
// console.log(x);

//문제8
// let x = 0;
// {
//     let x = 1;
//     console.log(x);
// }
// console.log(x);

//문제9
// let x = 1;
// {
//     console.log(x);
//     let x = 1;
// }

// 문제10
// var res = square(5);
// console.log(res);

// function square(number) {
//     return number * number;
// }

//문제 11
// const res = square(5);
//  console.log(res);

//  function square(number) {
//      return number * number;
// }

//문제 12
// var x = function () {return 5;};
// console.log(typeof x,x,x());

//문제 13
//var y = (function() {return 5;})();
//console.log(typeof y,y);   //y() 이렇게하면 type error

//문제 14
//; (function (a,b) {return console.log(a+b)}) (1,2)

//문제 15
// const add = function(a,b) { return a+b };
// (function(a,b) {console.log(add(a, b)); }) (1,2);

//문제 16
// var x = 'outer';
// (function () {
//     console.log(typeof x, x);
//     var x = 'inner';
// }());

//문제 17
//const z;
//console.log(z);

//문제 18
// let x = "outer";
// (function() {
//     let x = "inner";
//     console.log(x);
// }());

// console.log(x);

//문제 19
// let x = "outer";
// console.log(x);
// {
//     console.log(x);
//     let x = "inner";
// }

//문제 20
// {
//     a = undefined;
//     let a;
//     a = 123;
//     console.log(typeof a, a);
// }

//문제 21
 function xxx()
 {
     a = "read";
     let a;
     console.log(typeof a, a);
 }
 xxx();

