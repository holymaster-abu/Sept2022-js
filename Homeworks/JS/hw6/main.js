// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let a = 'hello world'
let b = 'lorem ipsum'
let c = 'javascript is cool'

console.log(a.length);
console.log(b.length);
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let x = 'HELLO WORLD';
let y = 'LOREM IPSUM';
let z = 'JAVASCRIPT IS COOL';

console.log(x.toLowerCase());
console.log(y.toLowerCase());
console.log(z.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let drtStr = ' dirty string   ';

console.log(drtStr.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let poem = 'Ревуть воли як ясла повні';

console.log(poem.split(" "));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let numsArr = [10,8,-7,55,987,-1011,0,1050,0];

let newStr = numsArr.map(value => value + '')
console.log(newStr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3];

console.log(nums.sort((a, b) => a - b)); // sortNums(nums,'ascending') // [3,11,21]
console.log(nums.sort((a, b) => b - a)); // sortNums(nums,'descending') // [21,11,3]

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

function filter (coursesAndDurationArray) {
    return (coursesAndDurationArray.monthDuration >= 5)
}
coursesAndDurationArray = coursesAndDurationArray.filter(filter);
console.log(coursesAndDurationArray);

// описати колоду карт

let cardDeck = [
    {cardSuit: 'diamond', color: 'red', cardNumber: 6},
    {cardSuit: 'heart', color: 'red', cardNumber: 6},
    {cardSuit: 'club', color: 'black', cardNumber: 6},
    {cardSuit: 'spade', color: 'black', cardNumber: 6},
    {cardSuit: 'diamond', color: 'red', cardNumber: 7},
    {cardSuit: 'heart', color: 'red', cardNumber: 7},
    {cardSuit: 'club', color: 'black', cardNumber: 7},
    {cardSuit: 'spade', color: 'black', cardNumber: 7},
    {cardSuit: 'diamond', color: 'red', cardNumber: 8},
    {cardSuit: 'heart', color: 'red', cardNumber: 8},
    {cardSuit: 'club', color: 'black', cardNumber: 8},
    {cardSuit: 'spade', color: 'black', cardNumber: 8},
    {cardSuit: 'diamond', color: 'red', cardNumber: 9},
    {cardSuit: 'heart', color: 'red', cardNumber: 9},
    {cardSuit: 'club', color: 'black', cardNumber: 9},
    {cardSuit: 'spade', color: 'black', cardNumber: 9},
    {cardSuit: 'diamond', color: 'red', cardNumber: 10},
    {cardSuit: 'heart', color: 'red', cardNumber: 10},
    {cardSuit: 'club', color: 'black', cardNumber: 10},
    {cardSuit: 'spade', color: 'black', cardNumber: 10},
    {cardSuit: 'diamond', color: 'red', cardNumber: 'jack'},
    {cardSuit: 'heart', color: 'red', cardNumber: 'jack'},
    {cardSuit: 'club', color: 'black', cardNumber: 'jack'},
    {cardSuit: 'spade', color: 'black', cardNumber: 'jack'},
    {cardSuit: 'diamond', color: 'red', cardNumber: 'queen'},
    {cardSuit: 'heart', color: 'red', cardNumber: 'queen'},
    {cardSuit: 'club', color: 'black', cardNumber: 'queen'},
    {cardSuit: 'spade', color: 'black', cardNumber: 'queen'},
    {cardSuit: 'diamond', color: 'red', cardNumber: 'king'},
    {cardSuit: 'heart', color: 'red', cardNumber: 'king'},
    {cardSuit: 'club', color: 'black', cardNumber: 'king'},
    {cardSuit: 'spade', color: 'black', cardNumber: 'king'},
    {cardSuit: 'diamond', color: 'red', cardNumber: 'ace'},
    {cardSuit: 'heart', color: 'red', cardNumber: 'ace'},
    {cardSuit: 'club', color: 'black', cardNumber:'ace'},
    {cardSuit: 'spade', color: 'black', cardNumber: 'ace'},
]

// - знайти піковий туз

console.log(cardDeck.filter(value => value.cardSuit === 'spade' && value.cardNumber === 'ace'));

// - всі шістки

console.log(cardDeck.filter(value => value.cardNumber === 6));

// - всі червоні карти

console.log(cardDeck.filter(value => value.color === 'red'));

// - всі буби

console.log(cardDeck.filter(value => value.cardSuit === 'diamond'));

// - всі трефи від 9 та більше

console.log(cardDeck.filter(value => (value.cardSuit === 'club' && value.cardNumber >= 9) || (value.cardSuit === 'club' && typeof value.cardNumber === 'string')));

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт

let reduce = cardDeck.reduce((accumulator, card) => {
    if (card.cardSuit ==='spade'){
        accumulator.spades.push(card);
    } else if (card.cardSuit ==='club') {
        accumulator.clubs.push(card);
    } else if (card.cardSuit ==='heart') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit ==='diamond') {
        accumulator.diamonds.push(card);
    }
    return accumulator;

},{spades:[],hearts:[],diamonds:[],clubs:[]});
console.log(reduce);