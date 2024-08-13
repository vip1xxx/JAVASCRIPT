//1
for (let i = 1; i <= 10; i++) {
    document.write('<div>Довільний текст ' + i + '</div>');
}
//2
for (let i = 1; i <= 10; i++) {
    document.write('<div>Довільний текст з індексом: ' + i + '</div>');
}
//3
let i = 1;
while (i <= 20) {
    document.write('<h1>Довільний текст ' + i + '</h1>');
    i++;
}
//4
let a = 1;
while (a <= 20) {
    document.write('<h1>Довільний текст з індексом: ' + a + '</h1>');
    a++;
}
//5
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>');

for (let i = 0; i < listOfItems.length; i++) {
    document.write('<li>' + listOfItems[i] + '</li>');
}

document.write('</ul>');
//6
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let i = 0; i < products.length; i++) {
    document.write('<div class="product-card">');
    document.write('<h3 class="product-title">' + products[i].title + '. Price - ' + products[i].price + '</h3>');
    document.write('<img src="' + products[i].image + '" alt="" class="product-image">');
    document.write('</div>');
}
//7
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// true
document.write('<h2>Користувачі зі статусом true:</h2>');
for (let i = 0; i < users.length; i++) {
    if (users[i].status) {
        document.write('<p>' + users[i].name + ', ' + users[i].age + ' років</p>');
    }
}

//  false
document.write('<h2>Користувачі зі статусом false:</h2>');
for (let i = 0; i < users.length; i++) {
    if (!users[i].status) {
        document.write('<p>' + users[i].name + ', ' + users[i].age + ' років</p>');
    }
}
// 30
document.write('<h2>Користувачі старші за 30 років:</h2>');
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write('<p>' + users[i].name + ', ' + users[i].age + ' років</p>');
    }
}

