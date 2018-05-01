function getRandomNumberLessThan(maxValue){
    let number = Math.round(Math.random()*maxValue);
    return number;
}

function getRandomOperator(){
    const operators = ['+', '-'];
    const randomIndex = Math.round(Math.random()*(operators.length-1));
    return operators[randomIndex];
}