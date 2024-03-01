// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a , b){
    let area = a*b;
    return area;
}
rectangleArea(4, 5);



// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r){
    let areaC = Math.PI * Math.pow(2,2);
    return areaC;
}
console.log(circleArea(2));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(h, r){
    let area = 2 * Math.PI * r * (r + h);
    return area;
}
console.log(cylinderArea(2,5));

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayOutput (arr){
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
arrayOutput([111,'Friday', 'March', 2024, 123, '2/29/24', 'js']);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(text){
    document.write(`<p>${text}</p>`);
}
createP('Hello World!');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function create3li(li_text){
    document.write(`
    <ul>
        <li>${li_text}</li>
        <li>${li_text}</li>
        <li>${li_text}</li>
    </ul>
    `);
}
create3li("Hello");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createMultipleli(li_text, times){
    document.write(`<ul>`);
    for (let i = 0; i < times; i++) {
        document.write(`<li>${li_text}</li>`);
    }
    document.write(`</ul>`);

}
createMultipleli("Friday", 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createList(arr){
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}
createList([111, 'hi', false,'Friday', 555,'Monday', true]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let data=[
    {id:1,name:'Vasya',age:33},
    {id:2,name:'Petya',age:20},
    {id:3,name:'Kolya',age:55},
    {id:4,name:'Ivan',age:10}
];
function createDataBlocks(data){
    for (const datum of data) {
document.write(`
<div>
<p>ID - ${datum.id}</p>
<p>Name - ${datum.name}</p>
<p>Age - ${datum.age}</p>
</div>
<hr>
`);
    }
}
createDataBlocks(data);
// - створити функцію яка повертає найменьше число з масиву

function smallestNumber(array){

     let n = array[0];

    for (let i = 0; i < array.length; i++) {

        if (n > array[i]){
            n = array[i];
        }
    }
    console.log('the smallest Number is - ' + n);
}

smallestNumber([10,9,4,555,30,3,1]);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumOfNumbers(array){

    let sum = 0;

    for (let i = 0; i < array.length; i++) {

        sum= sum+array[i];
    }
    console.log('The sum of all numbers is - ' + sum);
}

sumOfNumbers([1,2,10]);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2){
    let newArr=[];
    for (let i = 0; i < arr.length; i++) {
        if (i === index1){
            newArr[i] = arr[index2];

        }else if (i === index2){
            newArr[i]=arr[index1];
        }else{
            newArr[i]=arr[i];
        }

    }
    console.log(newArr);
}
swap([11,22,33,44],0,1);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

///  я не зрозумiла завдання шо куди переводит. 10000 : 40 = 250. Toдi при чому тут EUR?
