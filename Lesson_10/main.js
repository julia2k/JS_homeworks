// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єк
let form1 = document.forms['form1'];
form1.onsubmit = function(e){
    let wrap = document.createElement("div");
    document.body.appendChild(wrap);
    e.preventDefault();
    wrap.innerHTML = `<h3>${this['name'].value} ${this['surname'].value} ${this['age'].value}</h3>`
}




// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
window.onload = function(e){
    let storage = JSON.parse(localStorage.getItem('reload')) || [];
    let documentCountWrap = document.createElement('div');
    document.body.appendChild(documentCountWrap);
    documentCountWrap.innerHTML= storage.length;
    storage.push('');
    localStorage.setItem('reload', JSON.stringify(storage));

};


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.

function functionFromFirstPage(e){
    console.log('from functionFromFirstPage');
    let date = new Date();
    let storage = JSON.parse(localStorage.getItem('sessions')) || [];
    storage.push(date);
    localStorage.setItem('sessions', JSON.stringify(storage));

    // let documentCountWrap = document.createElement('div');
    // document.body.appendChild(documentCountWrap);
    // documentCountWrap.innerHTML= `Current Date is ${date}`;

}
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію

function functionFromSessions(e){
    console.log('from Sessions')
    let storage = JSON.parse(localStorage.getItem('sessions')) || [];
     let documentCountWrap = document.createElement('div');
    document.body.appendChild(documentCountWrap);

    console.log(storage);
    for (let element of storage) {
        let p = document.createElement('p');
        p.innerText = element;
        documentCountWrap.appendChild(p);
    }
}


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
let arr =[];
for (let i = 0; i < 100; i++) {
    arr[i]=Math.floor(Math.random() * 1000);
}

let showTenObjectsWrap = document.getElementById('showTenObjects');

for (let i = 0; i < 10; i++) {
    let li = document.createElement('li');
    li.innerText = arr[i];
    showTenObjectsWrap.appendChild(li);
}
let arrIndexStartFrom=0;
function clickFunction(direction){
    if (direction == 'p'){
        if(arrIndexStartFrom !==0){
            arrIndexStartFrom = arrIndexStartFrom - 10;
            showTenObjectsWrap.innerHTML='';
            for (let i = arrIndexStartFrom; i < arrIndexStartFrom+10; i++) {
                let li = document.createElement('li');
                li.innerText = arr[i];
                showTenObjectsWrap.appendChild(li);
            }
        }
    }else{
        if(arrIndexStartFrom !== arr.length-10) {
            arrIndexStartFrom = arrIndexStartFrom + 10;
            showTenObjectsWrap.innerHTML='';
            for (let i = arrIndexStartFrom; i < arrIndexStartFrom+10; i++) {
                let li = document.createElement('li');
                li.innerText = arr[i];
                showTenObjectsWrap.appendChild(li);
            }
        }
    }
}


//
//
//
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


let divText = document.createElement('div');
divText.id='text';
let buttonForDivIDText = document.createElement('button');
buttonForDivIDText.innerText='click to remove red square';
document.body.append(divText, buttonForDivIDText);
buttonForDivIDText.onclick = function(){
    divText.remove();
    buttonForDivIDText.remove();
}

//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача
//


let formAgeCheck = document.forms['formAgeCheck'];
let ageWrap = document.getElementById('ageWrap');
formAgeCheck.onsubmit = function(e){
    e.preventDefault();
    if(this['age'].value >= 18){
        ageWrap.innerText = "you are old enough";
    }else {
        ageWrap.innerText = "you are too young";
    }

}

//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let tableCreator = document.forms['tableCreator'];
// let ageWrap = document.getElementById('ageWrap');
tableCreator.onsubmit = function(e){
    e.preventDefault();
    let rows = this['rows'].value;
    let cols = this['columns'].value;
    let text = this['text'].value;
    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let th = document.createElement('th');
            th.innerText = text;
            tr.appendChild(th);
        }
        table.appendChild(tr);
    }
document.body.appendChild(table);
}



// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд -
//     нічого не відбувається


function functionAdditionalTask(e){
    let priceWrap = document.getElementById('h1');
    let price = 100;
    let step=10;

    let storage = JSON.parse(localStorage.getItem('newPrice')) || [price];

    price = parseInt(storage[storage.length-1]);
    priceWrap.innerText = `${price} grn`;

    console.log(storage[storage.length-1]);
    storage.push(price + step);
    setTimeout(() => {
        localStorage.setItem('newPrice', JSON.stringify(storage));
    }, "10000");


}