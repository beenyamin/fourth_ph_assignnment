// function sortMaker(arr) {

//     if (arr.some(i => i > 0)) {
//         arr.sort((a, b) => b - a); 
//     } else if (arr[0] === arr[1]) {

//         return "equal" 
//     }

//     return arr;
// }

// const inputArr = [2, 3]; 
// const result = sortMaker(inputArr);
// console.log(result);

function sortMaker(arr) {
    if (arr[0] === arr[1]) {
        return "equal";


    } else {
        (arr.some(i => i > 0)) 
         arr.sort ((a, b) => b - a); 
    }

    return arr;
}

var array1 = [2, 3];
var array2 = [4, 4];

console.log(sortMaker(array1));
console.log(sortMaker(array2));



