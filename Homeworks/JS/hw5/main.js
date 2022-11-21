// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle (a, b) {
    let rectangleSquare = (a * b);
    return rectangleSquare;
}
let firstTask = rectangle(12,14);
console.log(firstTask);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circle = (c) => c * c * 3.14;
let secondTask = circle(5);
console.log(secondTask);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r 2пr(r+h)

function cylinder (r, h) {
    let cylinderSquare = 2 * 3.14 * r * r + 2 * 3.14 * r * h;
    return cylinderSquare;
}

let thirdTask = cylinder(5,10);
console.log(thirdTask);

// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayPrinter(arr) {
    for (const item of arr) {
        console.log(item);

    }
}
arrayPrinter([1,2,3,4,5,6,7,8,9,10]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text) {
    document.write(`<p>${text}</p>`);
}
paragraph(`jksdfhksfhb`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list (xxx) {
    document.write(`<ul>
        <li>${xxx}</li>
        <li>${xxx}</li>
        <li>${xxx}</li></ul>`);

}
list(`sasd`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list2 (count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${`Hello`}</li>`);

    }
    document.write(`</ul>`);
}
list2(15);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function list3 (array) {
    document.write(`<ul>`)
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
}
list3([1,`hsad`,false,NaN]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function users (arrayIdNameAge) {

    for (const arrayIdNameAgeElement of arrayIdNameAge) {
        document.write(`<div>${arrayIdNameAgeElement}</div>`)

    }
}
users ([1,`Ihor`,34])

// - створити функцію яка повертає найменьше число з масиву

function minimalNum  (arr) {
    let minimum = arr[0];
    for (const element of arr) {
        if (minimum > element) {
            minimum = element;
        }
    }
    return minimum;
}
document.write(minimalNum([654,11,-6,24,13]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function cacl (arr) {
    document.write(`<div>`)  // Щоб не змішувалось з попереднім завданням
    let result = 0;
    for (let arrElement of arr) {
    result += arrElement

    }
    return result
        document.write(`</div>`) // // Щоб не змішувалось з попереднім завданням
}
document.write(cacl([5,5,5]))

