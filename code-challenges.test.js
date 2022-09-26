// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Question1a) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
//  a) Create a test with an expect statement using the variable provided.

      describe("upNameSentence", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(upNameSentence(people)).toEqual(["Ford Perfect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])

  })
})

// Expected output:["Ford Perfect is a hitchhiker." , "Zaphod Beeblebrox is president of the galaxy." "Arthur Dent is a radio employee."]

// FAIL  week-6-assessment-ResetReesi/code-challenges.test.js
// upNameSentence
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)

// ● upNameSentence › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//   ReferenceError: upNameSentence is not defined

 const people= [
      { name: "ford perfect", occupation: "a hitchhiker." },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy." },
      { name: "arthur dent", occupation: "a radio employee." }
    ]


// Question1b) Create the function that makes the test pass.

//* MY PLAN (PSUEDO CODE):
  // declare a function named upNameSentence that takes in array objects 🤞🏾
  // Iterate throught the array using the .map() method to uppercase the the first letter of each name 
  // create a new mini function that would iterate through the array to get the values of name: and ocupation:
  // Use string interpolation to add the strings together
  // do everything in the map(do everything in here)
  // Pay attention to join() join("") join(" ")
  // You nees a "is" and " is " two different things
  // Spent hours trying to figure out how to get the computer to to recognized the diffrent objects. ended up placing everything in an array

const upNameSentence = (array) => {
return array.map(value =>value.name.split(" ").map(fullName => fullName.charAt(0).toUpperCase() + fullName.slice(1)).join(" ") +  " is " +`${value.occupation}`
  )
}

// PASS  week-6-assessment-ResetReesi/code-challenges.test.js
// upNameSentence
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)


//  console.log(upNameSentence(people))

//  return array.map(value =>value.name.split(" ").map(fullName => fullName.charAt(0).toUpperCase() + fullName.slice(1)).join(" ") +  " is " +`${value.occupation}`
//  [
//   'Ford Prefect is a hitchhiker',
//   'Zaphod Beeblebrox is president of the galaxy',
//   'Arthur Dent is a radio employee'
// ]

// [
//   [
//     'f', 'o', 'r', 'd',
//     ' ', 'p', 'r', 'e',
//     'f', 'e', 'c', 't'
//   ],
//   [
//     'z', 'a', 'p', 'h', 'o',
//     'd', ' ', 'b', 'e', 'e',
//     'b', 'l', 'e', 'b', 'r',
//     'o', 'x'
//   ],
//   [
//     'a', 'r', 't', 'h',
//     'u', 'r', ' ', 'd',
//     'e', 'n', 't'
//   ]
// ]

// return firstName = nameUpcase[0][0].toUpperCase().charAt(0) + nameUpcase[0][0].slice(1)
// F

// return array.map(value =>value.name.split(" ").map(fullName => fullName.charAt(0).toUpperCase() + fullName.slice(1))

// [ 'Ford', 'Prefect' ],
// [ 'Zaphod', 'Beeblebrox' ],
// [ 'Arthur', 'Dent' ]

// return array.map(value =>value.name.split(" ").map(fullName => fullName.charAt(0).toUpperCase() + fullName.slice(1)).join()
// [ 'Ford,Prefect', 'Zaphod,Beeblebrox', 'Arthur,Dent' ]
// 

// xoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxxoxo



// Question2a) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

describe("remainders", () => {
  it("It takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3.", () => {
    expect(remainders(hodgepodge1)).toEqual([2,0,-1,0]),
    expect(remainders(hodgepodge2)).toEqual([2,1,-1,])
  })
})

// FAIL  week-6-assessment-ResetReesi/code-challenges.test.js
// ● Test suite failed to run

//   ReferenceError: decribe is not defined

// Question2a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// Question2b) Create the function that makes the test pass.

// My Plan (PsudeoCode):
// * Create a function called remainder
// * Return an array 
// * Iterate over the array using the .filter() to locate all the number
// * Create a mini function that would pull out the (typeof) data type we are looking for (numbers)
// * Return the array with the new data, then use the .map() method yo iterate through the array of numbers and see if those number are % 3
// * Return the Remainder

const remainders = (array) => {
  const newArr = array.filter((value) => typeof value === "number")
    return newArr.map((value) => value % 3)

}

// console.log(remainders(hodgepodge1))
// console.log(remainders(hodgepodge2))

// return array.filter((value) => typeof value === "number")
// [ 23, 45, -10, 0 ]

// return newArr.map((value) => value % 3)
// [ 23, 45, -10, 0 ]

// PASS  week-6-assessment-ResetReesi/code-challenges.test.js
// remainders
//   ✓ It takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3. (3 ms)

// xoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxox


// Question3a) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

describe("theSum", () => {
  it("It takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(theSum(cubeAndSum1)).toEqual(99),
    expect(theSum(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  week-6-assessment-ResetReesi/code-challenges.test.js
// theSum
//   ✕ It takes in an array of numbers and returns the sum of all the numbers cubed. (1 ms)

// ● theSum › It takes in an array of numbers and returns the sum of all the numbers cubed.

//   ReferenceError: theSum is not defined


// Questiob3b) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass

// My Plan (PsudeoCode):
// * Create a function called theSum
// * Iterarte throught the array to cube all the number in the array
// * Create a new mini function for the cubed numbers 
// * Return a new array with all the number cubed
// * Iterate through the new array using the .reduce method to take the the 1st index and add it to the 2nd index
// * Return the sum

const theSum = (array) => {
  const cubed = array.map((value) => value ** 3)
  let sum = 0
  return cubed.reduce((previousValue , currentValue) => previousValue + currentValue, )
  

}


// console.log(theSum(cubeAndSum1))
// console.log(theSum(cubeAndSum2))


// return array.map((value) => value ** 3)
// [ 8, 27, 64 ]

// return cubed.reduce((previousValue , currentValue) => previousValue + currentValue, )
// 99


//  PASS  week-6-assessment-ResetReesi/code-challenges.test.js
//   theSum
//     ✓ It takes in an array of numbers and returns the sum of all the numbers cubed. (3 ms)