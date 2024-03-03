// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectArea = (a,b) => a * b;
console.log(rectArea(5, 10));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

const circleArea = r => Math.PI * Math.pow(r,2);
console.log(circleArea(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinderArea = (h,r) => 2 * Math.PI * r * (r + h);
console.log(cylinderArea(3, 6));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 arr.forEach(element => console.log(element));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const printText = text => document.write(`<p>${text}</p>`);
printText('Hello World!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createList = text =>
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `);
createList('JavaScript');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createYourOwnList =(text, count) => {
    document.write('<ul>');
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
createYourOwnList('lalala', 6);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const createListOfAnything = list => {
    document.write('<ul>');
    for (let i = 0; i < list.length; i++) {
        document.write(`<li>${list[i]}</li>`);
    }
    document.write('</ul>');
}
createListOfAnything(['String', false, 'Monday', 59, 31, true,10000]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
 let obj = [
     {id:1,name:'Vasya',age:33},
     {id:2,name:'Petya',age:20},
     {id:3,name:'Kolya',age:55},
     {id:4,name:'Ivan',age:10}
 ];
const addToBlock = arr => {
    for (const element of arr) {
        document.write(`<div>
        <h2>Name - ${element.name}</h2>
        <p>Id - ${element.id}</p>
        <p>Age - ${element.age}</p>
        </div>`);
    }
}
addToBlock(obj);

// - створити функцію яка повертає найменьше число з масиву

const minNumber = arr => {
    let n = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (n > arr[i]){
            n = arr[i];
        }
    }
    console.log('the smallest Number is - ' + n);
}

minNumber([33,25,5,10,10,68,111]);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = arr => {
    let n=0;
    for (let i = 0; i < arr.length; i++) {
        n=n+arr[i];
    }
    return n;
}
console.log(sum([1,2,10]));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr,index1,index2) => {
   [arr[index1],arr[index2]] = [arr[index2],arr[index1]];
    return arr;
}
console.log(swap([11,22,33,44] , 0, 3));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    for (const values of currencyValues) {
        if(values.currency == exchangeCurrency){
            return sumUAH / values.value;
        }

    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));