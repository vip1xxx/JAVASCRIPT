//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const calculateRectangleArea = (a, b) => console.log(`Площа прямокутника: ${a * b}`);

calculateRectangleArea(5, 10);
//- створити функцію яка обчислює та повертає площу кола з радіусом r
const calculateCircleArea = r => console.log(`Площа кола: ${Math.PI * r * r}`);
calculateCircleArea(7);
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const calculateCylinderArea = (r, h) => {
    const area = 2 * Math.PI * r * (r + h);
    console.log(`Площа циліндра: ${area}`);
};
calculateCylinderArea(5, 10);
//- створити функцію яка приймає масив та виводить кожен його елемент
const printArrayElements = arr => arr.forEach(element => console.log(element));

printArrayElements([1, 2, 3, 4, 5]);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
const createParagraph = text => {
    const paragraph = `${text}`;
    console.log(paragraph);
};
createParagraph("Це приклад параграфа.");


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createList = text => {
    const list = `
    ${text}
    ${text}
    ${text}
`;
    console.log(list);
};
createList("Елемент списку");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл
const createText = (text, count) => {
    let list = '<ul>\n';
    for (let i = 0; i < count; i++) {
        list += `    ${text}\n`;
    }
    list += '</ul>';
    console.log(list);
};
createText("Елемент списку", 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const createListFromArray = arr => {
    let list = '<ul>\n';
    arr.forEach(item => {
        list += `${item}\n`;
    });
    list += '</ul>';
    console.log(list);
};
createListFromArray([1, 'Текст', true, 42, 'Інший текст', false]);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const displayObjects = objects => {
    objects.forEach(obj => {
        console.log(`ID: ${obj.id}`);
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log('---');
    });
};
const data = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
];
displayObjects(data);
//- створити функцію яка повертає найменьше число з масиву
const findSmallestNumber = numbers => {
    if (numbers.length === 0) {
        console.log('пустий');
        return;
    }

    const smallest = Math.min(...numbers);
    console.log(`число: ${smallest}`);
};
const numbers = [5, 3, 9, 1, 6];
findSmallestNumber(numbers);
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = arr => {
    const total = arr.reduce((acc, num) => acc + num, 0);
    console.log(`Сума чисел: ${total}`);
    return total;
};
sum([1, 2, 10]); // -> 13
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        console.log('некоректні індекси');
        return;
    }
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    console.log(arr);
};
swap([11, 22, 33, 44], 0, 1); // => [22, 11, 33, 44]
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const currency = currencyValues.find(c => c.currency === exchangeCurrency);
    if (!currency) {
        console.log('Валюта не знайдена');
        return null;
    }
    const exchangedAmount = sumUAH / currency.value;
    console.log(exchangedAmount);

    return exchangedAmount;
};
exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD'); // => 250














