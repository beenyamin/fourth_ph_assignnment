
// string1, string2


//  function matchFinder(string1, string2) {
//     if (typeof string1  || typeof string2 ) {

//     }


//     function matchFinder (string1, string2) {
//         if(typeof string1 I== "string" && typeof string2 I== "string" ){
//         return "please provide me a valid file name (string)";
        

//     if (string1.includes(string2)) {
//         return true;

//     } else {
//         return false;
//     }
// }


// const inputString1 = "John Doe " ;
// const inputString2 = "“ohn";
// const result1 = matchFinder(inputString1, inputString2);
// console.log(result1); // true

// const inputString3 = "JavaScript ";
// const inputString4 = "Code";
// const result2 = matchFinder(inputString3, inputString4);
// console.log(result2); // false

// const invalidInput1 = "hello";
// const invalidInput2 = 123;
// const invalidResult = matchFinder(invalidInput1, invalidInput2);
// console.log(invalidResult); 







// ------------>>

// function matchFinder (string1, string2){
//     if (typeof string1  || typeof string2 ) {
//     }   

//     if (string1.includes(string2)) {
//         return true;

//     } else {
//         return false;
//     }
// }

// const string1 = "John Doe"
// const string2 = "ohn"

// const result = matchFinder(string1, string2)

// console.log(result); // true

//    const String1 = "JavaScript ";
//    const String2 = "Code";
//  const result2 = matchFinder(string2 , string2 );
//    console.log(result2); // false



function matchFinder(string1, string2) {
    if(typeof string1 !== "string" && typeof string2 !== "string" ){
        return " Type a Valid name ";

        }

       else if  (string1.includes(string2)) {
            return true;
        } else {
            return false;
        }
    }


    const String1 = "John Doe ";
    const String2 = "ohn";
    const result = matchFinder(String1, String2);
    console.log(result)