// Solve the following string/math/number/function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.





//STEP 1

// 1.	Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.

// Sample Data and Output
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'


// function alphaOrder(string){
//     string = string.toString();
//     console.log(string.toLowerCase().split("").sort().join(""));
// }
// alphaOrder ('webmaster');





//STEP 2


// 2.	Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.

// Sample Data and Output
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox'


// function upperCase(string){
//     let array = string.split(' ');
//     let list = [];

//     for (let i = 0; i<array.length; i++){

//         list.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
//     }
//     return list.join(' ');
// }
//     console.log(upperCase('the quick brown fox'));





//STEP 3
// 3.	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// Sample Data and Output
// Example string: 'The quick brown fox' 
// Expected Output: 5

// function vowels (string){
//     let splitString = string.toLowerCase().split('');
//     let numVowels = 0

//     for (let i = 0; i < splitString.length; i++){
//         if (
//             splitString[i] == 'a' || splitString [i] == 'e' || splitString[i] == 'i' || splitString[i] == 'o' || splitString[i] == 'u'){
//                 numVowels++;
//             }
        
//     }
//     console.log (numVowels);
// }
// vowels('The quick brown fox' )






//STEP 4

// 4.	Write a JavaScript function that generates a string id (specified length) of random characters.

// Sample Data and Output
// Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA




// function genStgID (numChar){

//     let listChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let stgID = ' ';

//     for (let i = 0; i<numChar; i++){
//         let random = listChar.charAt(Math.floor(Math.random()* (listChar.length-1)));
//         stgID += random
//     }
//     return stgID;
// }
// console.log(genStgID (8))





//STEP 5

// 5.	Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

// Sample Data and Output
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"



// function longName (listContries){
//     let longestCountryName = ' ';
//     for (let i = 0; i<listContries.length; i++){
//             if (longestCountryName.length < listContries[i].length){
//                 longestCountryName = listContries [i];
//             }
            
//         }
//         return longestCountryName;

// }

// console.log (longName(["Australia", "Germany", "United States of America"]));


