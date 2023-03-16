// let userName: string = 'Axadov Sherzod';

// console.log(userName);

// let a: number = 1;

// console.log(typeof (a + userName))/;

// array any
// let colors: string[] = ['olma', '10'];

// let colors: any[] = ['olma', 10];
// console.log(colors);

// let b: string = 'hello'


// b = 10
// console.log(typeof b);

// FUNCTION
// function logger(a: number): number | string {
//     return a.toFixed();
// }
// console.log(logger(10));
// console.log(typeof logger(10));


// ARRAY
// const arr: Array<any> = [{ name: 'bmw', color: 'black' },
// { name: 'audi', color: 'white' },
// { name: 'ferrari', color: 'red' },]

// arr.map((item: object) => {
//     console.log(item);
// })

// OBJECT

// type Type = { name: string, year?: number }
// interface myCar {
//     name: string, year?: number
// }

// interface myCarBMW extends myCar {
//     color?: 'red'
// }

// const logCar = (car: myCarBMW): string => {
//     return `Name of car ${car.name} created at ${car.year} and its color ${car.color}`
// }

// console.log(logCar({ name: 'Porsche', year: 2023, color: 'red' }));


// LITERAL TYPE
// const car: 'mers' = 'mers'

// type action = 'show' | 'hide'


// ENUM

// const runEnum = (): number => {
//     return 1;
// }

enum dictionary {
    Uzb,
    Rus,
    ENg = 'English',
}

let eng = dictionary.Uzb
console.log(eng);
console.log(dictionary[dictionary.Rus]);



