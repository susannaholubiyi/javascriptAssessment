function getPassScoreFrom(testScores){

    let output = testScores.filter(scores => scores >= 70 ).filter(validScore => validScore <= 100)
    
   
    return output;
}

function increaseScoresByFive(testScores){
    let ans = testScores.filter(scores => scores < 100 ).map((num) => num + 5)
    return ans;
}

function getTheSquareOf(numbers){
    return ans =numbers.map((num) => num * num );
     
}


function assignBookTo(listOfMembers, listOfBooks){
    for(const member of listOfMembers){
        for(index = 0; index < listOfBooks.length; index++){
            if (member.book == null){ 
                listOfMembers[index].book = listOfBooks[index];
            }
        }  
    }
    return listOfMembers;
    
}

function findAfternoonClassesFrom(classTime){
    let ans = classTime.filter(time => time.includes("PM"));
    return ans;
}

function getTotalExpense(expenses){
    let totalExpense = 0
    for (const expense in expenses){
        totalExpense += expenses[expense]
    }
    return totalExpense;
}

// function exmple(){
//     let num = [12,3,4,5,9,4,5]
// num.splice(2,0,2,3);


module.exports = {getPassScoreFrom, increaseScoresByFive, getTheSquareOf, assignBookTo, findAfternoonClassesFrom, getTotalExpense}