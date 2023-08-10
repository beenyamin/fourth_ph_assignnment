

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