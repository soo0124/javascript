//각 나라의 문자길이
// const array = ['korea','america','germany','spain','france','canada'];
// for(i=0; i<array.length; i++){
//     console.log(array[i].length);
// }

//아래 각 숫자중 3의 배수 출력

//  const array2 = [5,16,37,69,87,145,276,395,585,1235,2565,3000];
// for(i=0; i<array2.length; i++){
//     if(array2[i]%3==0){
//         console.log(array2[i]);
//     }
// }


// for(i=0; i<array2.length; i++){
//     if(array2[i]%4==0){
//         console.log(array2[i]);
//         break;
//     }
// }
// let hap = 0;
// for(i=0; i<array2.length; i++){
//     hap += array2[i];
// }
// console.log(hap);


let arr = ['hi','by','cl'];

let arr2 = arr.map(function (x,index, array) {
    return x.length
    
    //console.log(index);
    //console.log(array);
});

console.log(arr2[1]);
