var a = 12;
var b = '12';

console.log(c);
console.log(a==b);
console.log(a===b);

var c = 10;
console.log(typeof a);
console.log('type : ',typeof b);

function plus(x,y) {
    console.log(x+y);
}

plus(3,4);
plus('3 ','4');

var j = 12;
var i = '12';

if(i===j) {
    i = 10;
}
else {
    i = 0;
}

console.log(i);

console.log(0 / 0);

function func1(a) {
    console.log('func1');
    a();
}

function func2() {
    console.log('func2');
}

func1(func2);

console.log(isNaN(null));

var hh = "123";
console.log(Number(hh));

/*
console.log(a);     
console.log(Number(a));
console.log(typeof a);
console.log(typeof Number(a));
*/