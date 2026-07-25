num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(...num) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
        total += num[i];
    }
    return total;
}

console.log(`Sum is ${sum(...num)}`);