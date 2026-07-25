const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
const obj2 = {
    e: 5,
    f: 6,
    g: 7,
    h: 8
};

const newObj = {...obj1, ...obj2 };

console.log(newObj);