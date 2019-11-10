// join


// function customJoin(arr, sep = ",") {
//     let str = "";
//     for (let elem of arr) {
//         str += elem;
//         if (elem != arr[arr.length - 1])
//             str += sep;
//     }
//     return str;
// }
// console.log(customJoin(arr, "+"));


//map
// function customMap(arr, func) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(func(arr[i], i, arr))
//     }
//     return result;
// }

// function perform(value, index, array) {
//     return value * 2;
// }
// console.log(customMap(arr, (val, index) => val > index));

// let arr = [3, 5, 7, -55, 89, 5];
//foreach
// function customForeach(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(func(arr[i], i, arr));
//     }
// }
// customForeach(arr, (val, index) => val);


// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// function customSlice(arr, start = 0, end = arr.length) {
//     let result = [];
//     if (start < 0) {
//         start = arr.length + start;
//     }
//     if (end < 0) {
//         end = arr.length + end;
//     }
//     let j = 0
//     for (let i = start; i < end; i++) {
//         result[j] = arr[i];
//         j++;
//     }
//     return result;
// }
// console.log(customSlice(fruits, 1, 4));