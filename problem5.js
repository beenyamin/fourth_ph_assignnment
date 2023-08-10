



            function canPay(changeArray, totalDue) {

                if (changeArray.length === 0) {
                    return "checking..its empty array Or Not";
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

