let numbers = [1, 2, 5, 8 , 10];
console.log('For in output');
for(let index in numbers) {
    console.log(index, numbers[index]);
}

console.log('For of output');
for(let item of numbers) {
    console.log(item);
}

