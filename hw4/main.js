//1
function calculateRectangleArea(a, b) {
    return a * b;
}
let area = calculateRectangleArea(5, 10);
console.log('Площа прямокутника: ' + area);
//2
function calculateCircleArea(r) {
    return Math.PI * r * r;
}
let area1 = calculateCircleArea(5);
console.log('Площа кола: ' + area1);
//3
function totalSurfaceArea(radius, height) {
    return 2 * Math.PI * radius * (radius + height);
}

const radius = 5;
const height = 10;

const surfaceArea = totalSurfaceArea(radius, height);
console.log(surfaceArea);

//4
function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
let exampleArray = ['sanya', 'vika', 'maks', 'dima'];
printArrayElements(exampleArray);
//5
function createParagraph(text) {
    document.write('<p>' + text + '</p>');
}
let paragraphText = 'text';
createParagraph(paragraphText);
//6
function createListWithItems(text) {
    document.write('<ul>');

    for (let i = 0; i < 3; i++) {
        document.write('<li>' + text + '</li>');
    }

    document.write('</ul>');
}
let itemText = 'javascript';
createListWithItems(itemText);
//7
function createListWithItems1(text, numberOfItems) {
    if (typeof numberOfItems !== 'number' || numberOfItems <= 0) {
        console.error('більше 0.');
        return;
    }

    document.write('<ul>');

    for (let i = 0; i < numberOfItems; i++) {
        document.write('<li>' + text + '</li>');
    }

    document.write('</ul>');
}

let itemText2 = 'text';
let itemCount = 5;
createListWithItems1(itemText2, itemCount);
//8
function createListFromArray(arr) {
    if (!Array.isArray(arr)) {
        console.error('повинен бути масивом.');
        return;
    }

    document.write('<ul>');

    for (let i = 0; i < arr.length; i++) {
        document.write('<li>' + String(arr[i]) + '</li>');
    }
    document.write('</ul>');
}
let primitiveArray = [11, 'cool', true, 'planeta', 1.01, false, 'JavaScript'];
createListFromArray(primitiveArray);
//9
function displayObjects(objectsArray) {
    if (!Array.isArray(objectsArray)) {
        console.error('повинен бути масивом.');
        return;
    }

    document.write('<div>');

    objectsArray.forEach(obj => {
        if (obj.hasOwnProperty('id') && obj.hasOwnProperty('name') && obj.hasOwnProperty('age')) {
            document.write(
                '<div class="object-block">' +
                '<p>ID: ' + obj.id + '</p>' +
                '<p>Name: ' + obj.name + '</p>' +
                '<p>Age: ' + obj.age + '</p>' +
                '</div>'
            );
        } else {
            console.error("не має всіх необхідних властивостей.");
        }
    });
    document.write('</div>');
}
let objectsArray = [
    { id: 1, name: 'sanya', age: 22 },
    { id: 2, name: 'max', age: 23 },
    { id: 3, name: 'kolyan', age: 32 }
];
displayObjects(objectsArray);
//10
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    const currency = currencyValues.find(item => item.currency === exchangeCurrency);
    if (!currency) {
        console.error("валюта не знайдена в обміннику ");
        return null;
    }
    return sumUAH / currency.value;
}

const sumUAH = 120000;
const currencyValues = [
    { currency: 'USD', value: 25 },
    { currency: 'EUR', value: 42 }
];
const exchangeCurrency = 'USD';

const result = exchange(sumUAH, currencyValues, exchangeCurrency);
console.log(result);







