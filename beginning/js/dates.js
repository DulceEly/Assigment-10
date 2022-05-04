//STEP 1

// 1.	Create an application that gets the number of days in a month. Display that result within the console window.



// let d = new Date();
// let m = d.getMonth() +1;
// let y = d.getFullYear();
// numDaysMonth = new Date(y, m, 0).getDate();

// console.log(numDaysMonth);




//STEP 2
// 2.	Create an application that gets the month name from a particular date. Display that result within the console window.

// let d = new Date();
// let monthName = function(d){
//     monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     return monthArray[d.getMonth()];
// }
// console.log(monthName(new Date('05/01/2022')));




//STEP 3

// 3.	Create an application that tests whether a date is a weekend. Display that result within the console window.


// let dtWeekend = function (testDay){
//     let d = new Date(testDay);
//     if(d.getDay() === 6 || d.getDay() === 0)
//     {
//         return "This day is weekend";
//     } else {
//         return "It is not a weekend";
//     }

// }

// console.log(dtWeekend('05/05/2022'))
// console.log(dtWeekend('05/07/2022'))
// console.log(dtWeekend('05/08/2022'))
// console.log(dtWeekend('05/04/2022'))





//STEP 4

// 4.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 


///////

// let today = new Date()
// let yesterday = new Date(today)

// yesterday.setDate(yesterday.getDate() - 1)

// console.log(`Today is: ${today.toDateString()}`);
// console.log(`Yesterday was: ${yesterday.toDateString()}`);



/////////////

// let today = new Date();
// let yesterday = new Date();

// yesterday.setDate(today.getDate() - 1);

// console.log('Today is: ' + today);
// console.log('Yesterday was: ' + yesterday);



//////////


//   var today = new Date();
//   var day = today.getDay();
//   var daylist = [
//             'Sunday',
//             'Monday',
//             'Tuesday',
//             'Wednesday',
//             'Thursday',
//             'Friday',
//             'Saturday',
//         ];;

// let yesterday = new Date();
// yesterday.setDate(today.getDate() - 1);


// console.log("Today is : " + daylist[day] + ".");
// console.log("Yesterday was : " + daylist[yesterday.setDate] + ".");




//////////////

// let yesterday = function getDayOfWeek (date) {

//     let dt = new Date (date);
//     let daysWeek = [
//         'Sunday',
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//     ];
//     return new Date((dt.setDate(dt.getDate()-1)));

// }
// console.log(yesterday[now.getDayOfWeek()])


///////////



// function getDayOfWeek (date) {
//     let daysWeek = [
//         'Sunday',
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//     ];
//     return daysWeek[(dt.getDay())];

// }
// let dt = new Date (date);


// let dayName = daysWeek[dt.getDay]
// console.log (getDayOfWeek.d.toDateString());



//STEP 5


// 5.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.


//   var today = new Date();
//   var day = today.getDay();
//   var daylist = [
//             'S',
//             'M',
//             'T',
//             'W',
//             'T',
//             'F',
//             'S',
//         ];;

// console.log("Today is : " + daylist[day] + ".");
