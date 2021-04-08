const fruits =['Apple', 'Peer', 'Orange', 'Grapes', 'Banana'];
let fruitsCopy = fruits.slice();
console.log(fruitsCopy);


let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let vgtStr = vegetables.toString();
console.log(vgtStr);

const nums = [1, 2, 3, 4, 5];
let sum = nums.reduce(function(a, b) {
    return a + b;
}, 0);
console.log(sum);


const languages = ['php', 'php', 'css', 'script', 'script', 'html', 'html']
let sameElements = languages.filter((item, index) =>
languages.indexOf(item) === index);
console.log(sameElements);

const repeatingNums = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8];
let unicalNum = Array(new Set(repeatingNums));
console.log(repeatingNums.length - unicalNum.length);


const falsyArray = [NaN, 0, 77, false, -17,'', undefined, 99, null];

const trueResult = falsyArray.filter(trueN => Boolean(trueN) == true);
console.log(trueResult);

for(let i = 0; i < falsyArray.length; i++){
    
}


/*
function hello(){
    let name = prompt('Введите имя');
    alert(`hello, ${name}`);
}

hello()


function arrayMin(arr) {
    let min = Infinity;
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] < min){
            min = arr[i];
        };
    };
    return min
}
  
  function arrayMax(arr) {
    let max = -Infinity;
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > max){
            max = arr[i];
        };
    };
    return max
  }

console.log(arrayMin(repeatingNums));
console.log(arrayMax(repeatingNums));
*/
let firstOper = Number(prompt("Введите первый операнд"));
let secondOper = Number(prompt("Введите второй операнд"));
let calculateSign = prompt("Введите знак");

function calculate(oper1, sign, oper2){
    const signArray = ['-', '+','/', '*']
    let signCheck = false;
    
        /*if(sign == signArray[0] || sign == signArray[1] || sign == signArray[2] || sign == signArray[3]){
            signCheck = true;
        } else{
            do{
               
            }
            while (true);
        }
        */
        while(true){
            
            if(sign == signArray[0] || sign == signArray[1] || sign == signArray[2] || sign == signArray[3]) break
            sign = prompt("Введите знак(-, +, /, *)");
        }
        signCheck = true;
    console.log(signCheck);
    if(signCheck == true){
        switch(sign){
            case '+':
                alert(oper1 + oper2 *1)
                break;
            case '-':
                alert(oper1 - oper2 *1)
                break; 
            case '*':
                alert(oper1 * oper2)
                break; 
            case '/':
                alert(oper1 / oper2 *1)
                break;         
        }
    }
}

calculate(firstOper, calculateSign, secondOper);

