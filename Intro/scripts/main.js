function loadData(){
    console.log("Loading from server!!!");
}

function sayHelloToAPerson(name){
    console.log("Hi there, " + name);

}
function sum(number1, number2){
    let result = number1 + number2
    console.log(result);
    return result;  //nothing below a return gets executed

    console.log("below a return");
}
function testValidation() {
    let num = 11;
    
    if(num < 10) {
        console.log("Error, num to low");
        return;
    }
    console.log("saved1");
}

//1 to 20
//except 7
function printSomeNumbers(){

    for(let i=0; i<21; i++){ 
        if(i != 7 && i != 13)  //use let in for loops
        console.log(i);
    }
}
function sumSomeNumbers(){
    let list = [12,32,12,456,12,87,345,56,3,7,5678,2,4587,243,09,234,-3,4567,-9,0];
    let total = 0;
    let pivot = list[0];
    let smallest = list[0];

    for(let i=0; i<list.length; i++){
        let num =list[i]; 

        total += num;
        
        if(num > pivot){
            pivot = num;
        }
        if(num < smallest){
            smallest = num;
        }
    
    } 
    console.log("sum ", total);
    console.log("biggest ", pivot);
    console.log("smallest ", smallest);
}    

function init() {
    console.log("DOM ready");

    //catch events
    //load previous data
    loadData();
    sayHelloToAPerson("April");
    sayHelloToAPerson("John");
    sayHelloToAPerson("Bob");

    //make it work
    let res =sum(21, 21);
    console.log(res);

    //for loops
    printSomeNumbers(); //nums from 1 to 20

    sumSomeNumbers(); //let list = [12,32,12,456,12,87,345,56,3,7,5678,2,4587,243,09,234,-3,4567,-9,0];



};

window.onload = init;