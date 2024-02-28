// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr =['a', 12, 'hello', false, 123, 222, 'world', true, 'b', 10]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let firstObject = {
    title: 'The Alchemist',
    pageCount: 182,
    genre:'fiction'
}

let secondObject = {
    title: 'The Butterfly Effect',
    pageCount: 112,
    genre:'fiction'
}

let thirdObject = {
    title: 'The Woman',
    pageCount: 480,
    genre:'novel'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let objectOne = {
    title: 'The Alchemist',
    pageCount: 182,
    genre:'fiction',
    author: ['Paulo Coelho','37']
}

let objectTwo = {
    title: 'The Butterfly Effect',
    pageCount: 112,
    genre:'fiction',
    author: ['Andy Andrews','50']
}

let objectThree = {
    title: 'The Woman',
    pageCount: 480,
    genre:'novel',
    author: ['KristinHannah','45']
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users = [
    {name:'Alex', username:'alex111', password:'myPassword1!'},
    {name:'Todd', username:'todd', password:'1234567'},
    {name:'Victoria', username:'Vicky123', password:'lalala'},
    {name:'Ben', username:'Ben1980', password:'hahaha1'},
    {name:'Gena', username:'gena3', password:'crocodile!'},
    {name:'Peter', username:'peter_k', password:'pass-word'},
    {name:'Nicole', username:'nic', password:'lolipop'},
    {name:'Eric', username:'eric-ggg', password:'gggggggggg'},
    {name:'Ninette', username:'nin', password:'miller222'},
    {name:'Austin', username:'Austin-b', password:'balalaika'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Як.що змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно' Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x=0;
if (x !== 0){
    console.log('Вірно');
}else{
    console.log('Невірно');
}




// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time = 45;
if(time >= 0 && time <= 15){
    console.log('першa частинa години');
}else if(time > 15 && time <= 30){
    console.log('другa частинa години');
}else if (time > 30 && time <= 45){
    console.log('третя частинa години');
}else if (time > 45 && time <= 59){
    console.log('четвертa частинa години');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day=20;
if(day >= 1 && day <= 10){
    console.log('першa декадa місяця');
}else if(day > 10 && day <= 20){
    console.log('другa декадa місяця');
}else if (day > 20 && day <= 31){
    console.log('третя декадa місяця');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

//let dayNumber= prompt('Enter day of the week:');
let dayNumber = '5';
switch (dayNumber) {
   case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('There is only 7 days in a week :)');

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let number1=5;
let number2=5;
if (number1 == number2){
    console.log("numbers are equal");
} else if(number1>number2){
    console.log("The largest number is: " + number1);
}else{
    console.log("The largest number is: " + number2);
}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
//


