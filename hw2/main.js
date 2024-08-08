
let array = [42, "Hello, World!", true, null, undefined, { key: "value" }, [1, 2, 3], function() { return "I'm a function"; }, NaN, 3.14];
array.forEach(element => console.log(element));



let book1 = { title: "The Great Gatsby", pageCount: 180, genre: "Classic" };
let book2 = { title: "1984", pageCount: 328, genre: "Dystopian" };
let book3 = { title: "To Kill a Mockingbird", pageCount: 281, genre: "Fiction" };


console.log(book1);
console.log(book2);
console.log(book3);

let bookk1 = {
    title: "The Great Gatsby",
    pageCount: 180,
    genre: "Classic",
    authors: [
        { name: "F. Scott Fitzgerald", age: 44 }
    ]
};
let bookk2 = {
    title: "1984",
    pageCount: 328,
    genre: "Dystopian",
    authors: [
        { name: "George Orwell", age: 46 }
    ]
};
let bookk3 = {
    title: "Good Omens",
    pageCount: 412,
    genre: "Fantasy",
    authors: [
        { name: "Neil Gaiman", age: 60 },
        { name: "Terry Pratchett", age: 66 }
    ]
};

console.log(bookk1);
console.log(bookk2);
console.log(bookk3);



let users = [
    { name: "vasya", username: "vasya1", password: "password1" },
    { name: "Bobik", username: "bobik02", password: "password2" },
    { name: "petro", username: "petro03", password: "password3" },
    { name: "David", username: "david04", password: "password4" },
    { name: "Evelina", username: "evelina05", password: "password5" },
    { name: "maks", username: "maks06", password: "password6" },
    { name: "Grisha", username: "grisha07", password: "password7" },
    { name: "Halk", username: "halk08", password: "password8" },
    { name: "Ivan", username: "ivan09", password: "password9" },
    { name: "sanya", username: "sanya10", password: "password10" }
];
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

// кращий спосіб
//users.forEach(user => console.log(user.password));

let temperatures = [
    { day: "Monday", morning: 15, afternoon: 20, evening: 18 },
    { day: "Tuesday", morning: 16, afternoon: 21, evening: 19 },
    { day: "Wednesday", morning: 14, afternoon: 19, evening: 17 },
    { day: "Thursday", morning: 15, afternoon: 22, evening: 20 },
    { day: "Friday", morning: 17, afternoon: 23, evening: 21 },
    { day: "Saturday", morning: 18, afternoon: 24, evening: 22 },
    { day: "Sunday", morning: 16, afternoon: 20, evening: 18 }
];

console.log(temperatures);

let temperaturess
    = [
    ["Monday", 15, 20, 18],
    ["Tuesday", 16, 21, 19],
    ["Wednesday", 14, 19, 17],
    ["Thursday", 15, 22, 20],
    ["Friday", 17, 23, 21],
    ["Saturday", 18, 24, 22],
    ["Sunday", 16, 20, 18]
];

console.log(temperaturess);


let x;

x = 1;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

let time = 43;

if (time >= 0 && time < 15) {
    console.log('Перша чверть години');
} else if (time >= 15 && time < 30) {
    console.log('Друга чверть години');
} else if (time >= 30 && time < 45) {
    console.log('Третя чверть години');
} else if (time >= 45 && time < 60) {
    console.log('Четверта чверть години');
} else {
    console.log('Невірне значення');
}


let day = 11;

if (day >= 1 && day <= 10) {
    console.log('Перша декада місяця');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада місяця');
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада місяця');
} else {
    console.log('Невірне значення');
}

let dayNumber = parseInt(prompt("Введіть порядковий номер дня тижня (1-7):"));

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Невірний номер дня тижня. Введіть число від 1 до 7.");
        break;
}

let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));

if (num1 > num2) {
    console.log("Максимальне число:", num1);
} else if (num2 > num1) {
    console.log("Максимальне число:", num2);
} else {
    console.log("Числа рівні:", num1);
}


let q = 0;
x = x || "default";
console.log(q);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let duration = coursesAndDurationArray[i].monthDuration;


    if (duration > 5) {
        console.log("Супер");
    }
}







