const exp = require("constants");
let {getPassScoreFrom, increaseScoresByFive, getTheSquareOf, assignBookTo, findAfternoonClassesFrom, getTotalExpense} = require("./testScores.js");

test ("funtion returns scores greater than or equal to 70", ()=>{
    let testScores = [30, 45, 50, 70, 69, 49, 80, 50, 45, 70];
    let answer = getPassScoreFrom(testScores);
    expect (answer).toStrictEqual([70, 80, 70]);
}) 

test ("funtion returns scores greater than or equal to 70", ()=>{
    let testScores = [30, 45, 50, 70, 69, 102, 80, 50, 100, 70];
    let answer = getPassScoreFrom(testScores);
    expect (answer).toStrictEqual([70,  80, 100,  70]);
}) 

test ("funtion adds 5 to test scores", ()=>{
    let testScores = [85, 92, 78, 88, 95];
    let answer = increaseScoresByFive(testScores);
    expect (answer).toStrictEqual([90,  97, 83, 93,  100]);
}) 


test ("funtion returns the square of each numbers in a list", ()=>{
    let numbers = [2, 4, 6, 8, 10];
    let answer = getTheSquareOf(numbers);
    expect (answer).toStrictEqual([4,  16, 36, 64,  100]);
}) 

test("function assigns books", ()=>{
    let Emily = {name: "emily", book: null}
    let Jack = {name: "jack", book: null}
    let Sophia = {name: "sophia", book: null}
    let Daniel = {name: "daniel", book: null}

    let listOfMembers = [Emily, Jack, Sophia, Daniel]
    
    let listOfBooks = ["purple hibiscus", "Things fall apart","Pride and predujice","Macbeth"]
    let answer = assignBookTo(listOfMembers, listOfBooks);

    expect (answer).toEqual([{name: "emily", book: "purple hibiscus"}, {name: "jack", book: "Things fall apart"}, 
    {name: "sophia", book: "Pride and predujice"}, {name: "daniel", book: "Macbeth"}]);
})

test ("funtion returns the sclass timings in the afternoon", ()=>{
    let listOfClassTiming = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    let answer = findAfternoonClassesFrom(listOfClassTiming);
    expect (answer).toEqual(["1:00 PM", "3:00 PM", "5:00 PM"]);
}) 


test ("function calculates total expense", ()=>{
    let expenses = {groceries: 150, diningOut: 100, transportation: 50, entertainment: 80 }
    let answer = getTotalExpense(expenses);
    expect (answer).toBe(380);
})

