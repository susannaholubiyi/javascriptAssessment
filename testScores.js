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

const shoppingList =[{name: "Apples", category: "Fruits", isHealthy: true}, 
                        {name: "Potato Chips", category: "Snacks", isHealthy: false},
                        {name: "Carrots", category: "Vegetables", isHealthy: true },
                        {name: "Chocolate Bars", category: "Sweets", isHealthy: false},
                        {name: "Greek Yogurt", category: "Dairy", isHealthy: true},
                        {name: "Soda", category: "Beverages", isHealthy: false}]

function getHealthyItems(shoppingList){
    let healthyItems = shoppingList.filter(item => item.isHealthy ===true);
    healthyItems.forEach((item) => {console.log(item)})

}
console.log(getHealthyItems(shoppingList));




module.exports = {getPassScoreFrom, increaseScoresByFive, getTheSquareOf, assignBookTo, findAfternoonClassesFrom, getTotalExpense}