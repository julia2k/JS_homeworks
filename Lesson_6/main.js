// - Знайти та вивести довижину настипних стрінгових значень
let a='hello world';
let b = 'lorem ipsum';
let c= 'javascript is cool';
console.log(a.length);
console.log(b.length);
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
let a2 =  'hello world';
let b2 = 'lorem ipsum';
let c2 ='javascript is cool';
console.log(a2.toUpperCase());
console.log(b2.toUpperCase());
console.log(c2.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
let a3 ='HELLO WORLD';
let b3= 'LOREM IPSUM';
let c3 = 'JAVASCRIPT IS COOL';
console.log(a3.toLowerCase());
console.log(b3.toLowerCase());
console.log(c3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';

console.log(str.replaceAll(' ', ''));


//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str2 = 'Ревуть воли як ясла повні';
   function stringToarray(someString){
       return someString.split(' ');

   }
 let arr2 = stringToarray(str2); //['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log(arr2);



//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.


let newArr= [10,8,-7,55,987,-1011,0,1050,0];
let arrOfStr = newArr.map(elem => elem.toString());
console.log(arrOfStr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
   let nums = [11,21,3];
   function sortNums(arr, typeOfSorting){
       if (typeOfSorting == 'ascending'){
           return arr.sort((a,b) => a-b);
       }else{
           return arr.sort((a,b) => b-a);
       }
   }
console.log(sortNums(nums,'ascending')); // [3,11,21]
console.log(sortNums(nums,'descending')); // [21,11,3]


//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortedArr = coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration);
console.log(sortedArr);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredCourses= coursesAndDurationArray.filter((course) => course.monthDuration>5)
console.log(filteredCourses);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mappedArr = coursesAndDurationArray.map((course, index) => ({
    id: index, title: course.title, monthDuration:course.monthDuration
}));
console.log(mappedArr);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let cards =[
    {cardSuit:'spade', value:'6',color:'black' },
    {cardSuit:'spade', value:'7',color:'black' },
    {cardSuit:'spade', value:'8',color:'black' },
    {cardSuit:'spade', value:'9',color:'black' },
    {cardSuit:'spade', value:'10',color:'black' },
    {cardSuit:'spade', value:'ace',color:'black' },
    {cardSuit:'spade', value:'jack',color:'black' },
    {cardSuit:'spade', value:'queen',color:'black' },
    {cardSuit:'spade', value:'king',color:'black' },

    {cardSuit:'clubs', value:'6',color:'black' },
    {cardSuit:'clubs', value:'7',color:'black' },
    {cardSuit:'clubs', value:'8',color:'black' },
    {cardSuit:'clubs', value:'9',color:'black' },
    {cardSuit:'clubs', value:'10',color:'black' },
    {cardSuit:'clubs', value:'ace',color:'black' },
    {cardSuit:'clubs', value:'jack',color:'black' },
    {cardSuit:'clubs', value:'queen',color:'black' },
    {cardSuit:'clubs', value:'king',color:'black' },

    {cardSuit:'diamond', value:'6',color:'red' },
    {cardSuit:'diamond', value:'7',color:'red' },
    {cardSuit:'diamond', value:'8',color:'red' },
    {cardSuit:'diamond', value:'9',color:'red' },
    {cardSuit:'diamond', value:'10',color:'red' },
    {cardSuit:'diamond', value:'ace',color:'red' },
    {cardSuit:'diamond', value:'jack',color:'red' },
    {cardSuit:'diamond', value:'queen',color:'red' },
    {cardSuit:'diamond', value:'king',color:'red' },

    {cardSuit:'heart', value:'6',color:'red' },
    {cardSuit:'heart', value:'7',color:'red' },
    {cardSuit:'heart', value:'8',color:'red' },
    {cardSuit:'heart', value:'9',color:'red' },
    {cardSuit:'heart', value:'10',color:'red' },
    {cardSuit:'heart', value:'ace',color:'red' },
    {cardSuit:'heart', value:'jack',color:'red' },
    {cardSuit:'heart', value:'queen',color:'red' },
    {cardSuit:'heart', value:'king',color:'red' }
]

// - знайти піковий туз
let findCard = cards.find(card => card.value == 'ace' &&  card.cardSuit == 'spade');
console.log(findCard);

// - всі шістки
let findAllSix = cards.filter(card => card.value == '6');
console.log(findAllSix);

// - всі червоні карти
let findAllRed = cards.filter(card => card.color == 'red');
console.log(findAllRed);

// - всі буби
let findAllDiamond = cards.filter(card => card.cardSuit == 'diamond');
console.log(findAllDiamond);

// - всі трефи від 9 та більше
let findAllLarger = cards.filter(card => card.value !== '6' && card.value !== '7' && card.value !== '8' );
console.log(findAllLarger);

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reducedCards = cards.reduce((newCards, card )=> {
    if (card.cardSuit == 'clubs') {
        newCards.clubs.push(card);
    }
    else if (card.cardSuit == 'heart') {
        newCards.hearts.push(card);
    }else if (card.cardSuit == 'spade') {
        newCards.spades.push(card);
    }else{
        newCards.diamonds.push(card);
    }
    return newCards;
}, {
    spades: [], // 'spade', 'diamond','heart', 'clubs'
    diamonds: [], // '6'-'10', 'ace','jack','queen','king','joker'
    hearts:[],
    clubs:[]// 'red','black'
 });
console.log( reducedCards);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
let arrWithSass = coursesArray.filter(arr => arr.modules.includes('sass'));
console.log(arrWithSass)

// --написати пошук всіх об'єктів, в який в modules є docker
let arrWithDocker = coursesArray.filter(arr => arr.modules.includes('docker'));
console.log(arrWithDocker);