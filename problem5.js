

// function canPay(changeArray, totalDue){

//     if (Array.isArray(changeArray) || changeArray.length === 0) {
       
//     }

//     const totalExpenses = changeArray.reduce((sum, expense) => sum + expense, 0);

//     if (totalExpenses >= totalDue) {
//         return true  ;
//     } else {
//         return false ;
//     }

//      return " empty expense array";
// }

// // Sample inputs
// const expenses1 = [1, 2, 5];
// const chipPrice1 = 7;

// const expenses2 = [1, 2, 5];
// const chipPrice2 = 10;

// const expenses3 = [];
// const chipPrice3 = 0;

// console.log(canPay(expenses1, chipPrice1)); // Output: true
// console.log(canPay(expenses2, chipPrice2)); // Output: false
// console.log(canPay(expenses3, chipPrice3)); // Output: " empty expense array"



// 2 ----->

// function canPay(changeArray, totalDue)
// function canPay(chipsPrice, moneyArray)

            function canPay(changeArray, totalDue) {

                if (changeArray.length === 0) {
                    return "checking.. its empty array Or Not";
                }

                let totalMoney = 0;
                   for (let i = 0; i < totalDue.length; i++) 
                    totalMoney += totalDue [i];
            
                  if (totalMoney >= changeArray) {
                        return true;
                    } else {
                        return false;
                    }
            }

           
            const changeArray= [1, 2, 5];
            const totalDue = 10 ;
            const result = canPay(changeArray, totalDue);
            console.log(result);

