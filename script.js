//Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) break;
}

//Задание 2

const arr2 = [1, 5, 4, 10, 0, 3];

console.log(arr2.indexOf(4));

//Задание 3

let arr3 = [1, 3, 5, 10, 20];

console.log(arr3.join(' '));

//Задание 4

let arr4 = [];

for (let i = 0; i < 3; i++){
    arr4[i] = [];
    for (let j = 0; j < 3; j++) {
        arr4[i].push(1);
    }
}

console.log(arr4);

//Задание 5

let arr5 = [1, 1, 1];

for (let i = 0; i < 3; i++) {
    arr5.push(2);
}

console.log(arr5);

//Задание 5 (вариант 2)

let arr5 = [1, 1, 1];

arr5.push(2, 2, 2);
console.log(arr5);

//Задание 6

let arr6 = [9, 8, 7, 'a', 6, 5];

arr6.sort();
arr6.pop();
console.log(arr6);

//Задание 7

let arr7 = [9, 8, 7, 6, 5];
let userNumber = Number(prompt('Введите число от 1 до 10'));

let search = arr7.includes(userNumber);
console.log(search);

//Задание 8

let a = 'abcdef';
a = a.split('');
a.reverse();
console.log(a.join(''));

//Задание 9

let arr9 = [[1, 2, 3,],[4, 5, 6]];
let arr92 = [];

for (item of arr9) {
    for (let el of item) {
        arr92.push(el);
    }
}

console.log(arr92);

//Задание 10

const numbers = [...Array(10)];

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = _.random(0, 10);
}
console.log(numbers);

for (let i = 0; i < numbers.length -1; i++){
    let result = numbers[i] + numbers[i+1];
    console.log(`Сумма элементов ${i+1} и ${i+2} = ${result}`);
}