//STEP 1

// 1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.

// let randomNumber = (window.prompt("Please, write a random number in positive or negative"));
// console.log(Math.abs(randomNumber));

//STEP 2



// 2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.


// let decimal = (window.prompt("Please, write a random number in a decimal format. Examples: 1.5 1550.55"));
// let resultUp = (Math.ceil(decimal));
// console.log(resultUp);



//STEP 3

// 3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.

// let decimal = (window.prompt("Please, write a random number in a decimal format. Examples: 1.5 1550.55"));
// let resultDown = (Math.floor(decimal));
// console.log(resultDown);



//STEP 4

// 4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.


// let fiveNumbers = (window.prompt("Please, enter five random numbers and separate them by a comma. For example 1,2,3,4,5"));

// let resultInput = fiveNumbers.split(',').map(n => parseInt(n, 10));

// let resultMa = (Math.max(...resultInput));
// let resultMi = (Math.min(...resultInput));

// console.log(`The largest number is: ${resultMa}, and the smallest number is: ${resultMi}`);



//STEP 5

// 5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 


// let randomNumber = (window.prompt("Please, enter a positive random number."));

// console.log(Math.sqrt(randomNumber));
