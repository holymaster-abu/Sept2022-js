// \\\\\\ 1 task \\\\\\\\\\

let x = +'a';
a = 1;
 if (a > 0){
     console.log('Correct')
 }else if (a < 0){
     console.log('Correct')
 }else {
     console.log('Incorrect')
 }
a = 0;
if (a > 0){
    console.log('Correct')
}else if (a < 0){
    console.log('Correct')
}else {
    console.log('Incorrect')
}
a = -3;
if (a > 0){
    console.log('Correct')
}else if (a < 0){
    console.log('Correct')
}else {
    console.log('Incorrect')
}

// \\\\\\ 2 task \\\\\\\\\\

// Як порівнювати якщо наприклад числа потрібно брати з масиву ????

let time = 54;
if (time <= 15 && time >= 0) {
    console.log('1-st Part')
} else if (time <=30 && time >= 0) {
    console.log('2-nd Part')
}else if (time <=45 && time >= 0) {
    console.log('3-rd Part')
}else if(time <=60 && time >= 0) {
    console.log('4-th Part')
}else {
    console.log('Wrong nubmer')
}

// \\\\\\ 3 task \\\\\\\\\\

let day = 20;
if (day <=10 && day >0) {
    console.log('1-st decade')
}else if (day <=20 && day >0){
    console.log('2-nd decade')
}else if ( day <=31 && day >0){
    console.log('3-rd decade')
}else {
    console.log('Wrong number')
}

// \\\\\\ 3 task \\\\\\\\\\

let weekday = prompt('choose a day');
switch (weekday) {
    case 'monday':
        console.log('Monday');
        break;
    case 'tuesday':
        console.log('Tuesday');
        break;
    case 'wednesday':
        console.log('Wed');
        break;
    case 'thursday':
        console.log('Thursday');
        break;
    case 'friday':
        console.log('Friday');
        break;
    case 'saturday':
        console.log('Saturday');
        break;
    case 'sunday':
        console.log('Sunday');
        break;
}

// \\\\\\ 4 task \\\\\\\\\\

let xa = prompt('enter a fisrt number');
let yb = prompt('enter a second number');
if (xa > yb) {
    console.log(xa)
}else if ( yb > xa) {
    console.log(yb)
}else if (xa === yb ){
    console.log('They are equal')
}else {
    console.log('Not a number')
}

// \\\\\\ 5 task \\\\\\\\\\

let xxx = prompt('enter your value') || "default"
console.log(xxx)