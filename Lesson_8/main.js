// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}


// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
let users = [
    new User(12, 'Vasya', 'Vasevich' , '111-222-2222'),
    new User(22, 'Petya', 'Petrovich' , '067-222-3333'),
    new User(36, 'Kolya', 'Horoshevich' , '066-555-1234'),
    new User(44, 'Olga', 'Melnik' , '095-111-5678'),
    new User(51, 'Tanya', 'Salo' , '097-123-1234'),
    new User(60, 'Sergiy', 'Miller' , '068-222-5555'),
    new User(75, 'Viktor', 'Poliakov' , '099-888-2222'),
    new User(18, 'Maya', 'Borina' , '050-666-9999'),
    new User(99, 'Mark', 'Shasliviy' , '050-345-7777'),
    new User(10, 'Masha', 'Vasilevich' , '097-555-3456')

];


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
let sortedUsers = users.sort((firstUser,secondUser) => firstUser.id - secondUser.id);
console.log(sortedUsers);



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client{
    constructor(id, name,surname,email,phone,order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.order = order;
    }
}



// створити пустий масив, наповнити його 10 об'єктами Client

let clientsArr = [
    new Client(12, 'Vasya', 'Vasevich' , 'vasya@gmail.com','111-222-2222',['sour cream','bread','potato','bananas']),
    new Client(22, 'Petya', 'Petrovich' , 'petya@g.com','067-222-3333', ['bread','cheese']),
    new Client(36, 'Kolya', 'Horoshevich' , 'k@g.com','066-555-1234',['sugar','tea','tomato']),
    new Client(44, 'Olga', 'Melnik' , 'melnic@gmail.com','095-111-5678',['milk']),
    new Client(51, 'Tanya', 'Salo' , 'salo@g.com','097-123-1234', ['milk','lemons','carrots']),
    new Client(60, 'Sergiy', 'Miller' , 'serg@g.com','068-222-5555', ['cheese','pineapple','apples','cilantro','parsley']),
    new Client(75, 'Viktor', 'Poliakov' , 'vpol@g.com','099-888-2222',['strawberries','water']),
    new Client(18, 'Maya', 'Borina' , 'maya@g.com','050-666-9999', ['bread','tea','sugar','salt','pepper','lemons','apples','cheese']),
    new Client(99, 'Mark', 'Shasliviy' , 'mark@g.com','050-345-7777',['apples','cheese','salt','vinegar']),
    new Client(10, 'Masha', 'Vasilevich' , 'masha@g.com','097-555-3456', ['bread','semolina','cake','onion','tea','milk','eggs'])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClientsByOrder = clientsArr.sort((firstClient,secondClient) => firstClient.order.length - secondClient.order.length);
console.log(sortedClientsByOrder);


//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car(model, make, year, maxSpeed, engine){
    this.model = model;
    this.make = make;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
    };
    this.info = function() {
        console.log(`Car infornation: Make - ${this.make}, Model - ${this.model}, Year - ${this.year}, Max speed - ${this.maxSpeed}, Engine - ${this.engine}`);
    };
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = newSpeed;
        return this.maxSpeed;
    }
    this.changeYear = function (newValue){
        this.year=newValue;
        return this.year;
    }
    this.addDriver = function(driver){
        return this.driver = driver;
    }

}


let firstCar = new Car('Acura','MDX','2019','180','ev');
console.log(firstCar.drive());
console.log(firstCar.info());
firstCar.increaseMaxSpeed('300');
firstCar.changeYear('2050');
firstCar.addDriver(['vasya','petrenko','22']);
console.log(firstCar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

class CarClass{
    constructor(model, make, year, maxSpeed, engine){
        this.model = model;
        this.make = make;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
    }
    info(){
        console.log(`Car infornation: Make - ${this.make}, Model - ${this.model}, Year - ${this.year}, Max speed - ${this.maxSpeed}, Engine - ${this.engine}`);
    };
    increaseMaxSpeed(newSpeed){
        this.maxSpeed = newSpeed;
        return this.maxSpeed;
    }
   changeYear(newValue){
        this.year=newValue;
        return this.year;
    }
    addDriver(driver){
        return this.driver = driver;
    }


}

let newCar = new CarClass('Mazda','CX-9','2021','190','turbo');
console.log(newCar);
console.log(newCar.drive());
console.log(newCar.info());
newCar.increaseMaxSpeed('500');
newCar.changeYear('2050');
newCar.addDriver(['Masha','K','67']);
console.log(newCar);


//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name,age,size){
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let ladies = [
    new Cinderella('Olga', '18', 37),
    new Cinderella('Maya', '19', 34),
    new Cinderella('Ariel', '32', 39),
    new Cinderella('Tanya', '50', 40),
    new Cinderella('Tonya', '25', 32),
    new Cinderella('Kamilla', '21', 36),
    new Cinderella('Nina', '24', 35),
    new Cinderella('Sonya', '20', 38),
    new Cinderella('Lola', '27', 39),
    new Cinderella('Katie', '16', 30)
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age,foundShoe){
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let prince = new Prince('Alex','30',35);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const girl of ladies) {
    if (girl.size == prince.foundShoe){
        console.log(`The name of Cinderella is ${girl.name}`)
    }

}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let cinderellaFind = ladies.find( girl=> girl.size == prince.foundShoe);
console.log(`Found girl is ${cinderellaFind.name}`)