// document.getElementById("count-el").innerText = 11;


// let count = 0;
// console.log(count)

// let myAge = 1000;
// console.log(myAge);


// let firstBatch = 5
// let secondBatch = 6
// let count = firstBatch + secondBatch;
// console.log(count)


// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge = 1000;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// Setting up the the race 🏎 🏎 🏎

// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)

// function countDown(){
    
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countDown();

// // GO! 🏁
// // Players are running the race 🏎 💨
// // Race is finished! 🍾

// // Get ready for a new race 🏎 🏎 🏎
// countDown();

// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
// function logNum(){
//     console.log(42)
//  }
//  logNum()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times

// function sum(){
   
//     console.log( lap1 + lap2 + lap3)
// } 
// sum();

// let lapsCompleted = 0;

// function increment(){
//     lapsCompleted += 1
//     console.log(lapsCompleted);
// }

// increment();
// increment();
// increment();
 
// adding event listner

// initialize the count at 0;
// listen for the for the clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html

let count = 0;
let countEl = document.getElementById("count-el");

function increment(){
    count += 1
    
    countEl.innerText = count;
}

increment();