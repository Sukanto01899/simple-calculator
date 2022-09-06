const calculator = document.querySelector('.calculator');
const  display = document.querySelector('.screen');


calculator.addEventListener('click', e =>{
    if(e.target.matches('button')){
        const key = e.target;
        let displayNum = display.textContent;
        const action = key.dataset.action;
        let previousOparator = calculator.dataset.previousOparetor;

        if(!action){
            if(displayNum === '0' || previousOparator === 'oparator'){
                display.textContent = key.textContent;
                calculator.dataset.previousOparetor = '';
            }else{
                display.textContent += key.textContent;
            }
        }
        if(action === 'decimal'){
            if(!displayNum.includes('.')){
                display.textContent += '.';
            }
        }
        if(action === 'add' ||
           action === 'multiply' ||
           action === 'substract'||
           action === 'divide'){
            calculator.dataset.firstValue = displayNum;
            calculator.dataset.previousOparetor = 'oparator';
            calculator.dataset.oparetor = action;
           }
        if(action === 'calculate'){
            const firstValue = calculator.dataset.firstValue;
            const oparetor = calculator.dataset.oparetor;
            const secondValue = displayNum;

            display.textContent = calculate(firstValue, oparetor, secondValue);
        }
        if(action === 'clear'){
            let number = displayNum.split('');
            number.pop()
            display.textContent = number.join('') ;
            console.log(displayNum)
        }
    }
})


function calculate(num1, oparetor, num2){
    let result = '0'
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    if(oparetor === 'add'){
        result = n1 + n2;
    }else if(oparetor === 'multiply'){
        result = n1 * n2;
    }else if(oparetor === 'divide'){
        result = n1 / n2;
    }else if(oparetor === 'substract'){
        result = n1 - n2;
    }
    return result;
}