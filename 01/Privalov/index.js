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

let aaa = '';
let bbb = '';
let j = -1;
let o = 0
while ((j = summerStr.indexOf(',', j+2)) != -1) {
    aaa = summerStr.substr(0, j+2) + summerStr[j+2].toUpperCase() + summerStr.substr(j+3);
    
}
while ((o = summerStr.indexOf(',', o+2)) != -1) {
    bbb = summerStr.substr(0, o+2) + summerStr[o+2].toUpperCase() + summerStr.substr(o+3);
    
}
console.log(aaa);
console.log(bbb);
console.log(console.log(summerStr.lastIndexOf(',')));

console.log(summerStr.replace(/-\w/g, $0 => $0.toUpperCase()));
let upperLetterStr = summerStr.split(",").map(function(x){ return x.toUpperCase()}).join('');


console.log(upperLetterStr);





let namesStr = "Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже".split(" ");
let namesArr = [];
for (let i = 0; i < namesStr.length; i++) {
    if ((namesStr[i].charAt(0) >= 'А') && (namesStr[i].charAt(0) < 'Я') && (namesStr[i] != 'День')) {
        namesArr.push(namesStr[i]);
    }
}
let newNamesStr = `На день рождения пришли: ${namesArr[0]} ${namesArr[1]}, ${namesArr[2]}, ${namesArr[3]}.`;
console.log(newNamesStr);



//split map join
