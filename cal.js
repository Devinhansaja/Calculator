let currentInput = '';
let previnput= '';
let operator='';

function giveNumber(Number){
    currentInput+=Number;
    updateDisplay();
}

function Setoperator(oper){
    if(currentInput !== ''){
        if(previnput !==''){
                calculate();
        }
        Setoperator=oper;
        previnput=currentInput;
        currentInput= '';
    }
}

function calculate(){
    let num1=Number(previnput);
    let num2=Number(currentInput);
    let result;

    
    switch (Setoperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        default:
            result = 'Invalid Operation';

}
currentInput = result.toString(); 
Setoperator = '';                   
        previnput = '';          
        updateDisplay();  
}
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

