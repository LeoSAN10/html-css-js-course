let str = "Hello, world";

for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}


let reverseStr = str.split('').reverse().join('');
console.log(reverseStr);


let strWithoutO = str.replace(/o/g, '')
console.log(strWithoutO);




let commaIndex = str.indexOf(',');
let halfStr = str.slice(0, commaIndex);
console.log(halfStr);

let lastHalfStr = str.slice(commaIndex + 1, str.length);
console.log(lastHalfStr);


let strWithoutL = str.replace(/l/g, '-')
console.log(strWithoutL);


let strCase = '';
for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()){
        strCase += str[i].toLowerCase();
    } else {
        strCase += str[i].toUpperCase();
    }
};
console.log(strCase);


function isPalindrome(str){
    
    if(str === str.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}


// pdf Tasks

let summerStr = 'Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха бфла речка'

let dotStr = summerStr.replace(/,/g, '.');
console.log(dotStr);

let upperStr = summerStr.indexOf(',' + 2).toUpperCase();


