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
              

                  if (arr[1] <= 0 || arr[1] <= 1 ) 
                    return "Invalid Input";
               
                    let equal = true;
                for (let i = 0; i < arr.length - 1; i++) {
                    if (arr[i] !== arr[i + 1]) {
                        equal = false;
                        break;
                    }
                }

                if (equal) {
                    return "equal";
                }

                const sortedArr = [];

                while (arr.length > 0) {
                    let max = -Infinity;
                    let maxIndex = -1;

                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] > max) {
                            max = arr[i];
                            maxIndex = i;
                        }
                    }

                    sortedArr.push(max);
                    arr.splice(maxIndex, 1);
                }

                return sortedArr;
            }

            const inputArray = [4,-2]   ;

            const output = sortMaker(inputArray);
            console.log(output);

