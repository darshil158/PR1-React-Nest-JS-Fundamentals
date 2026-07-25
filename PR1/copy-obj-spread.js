const user = {
    name: "Tom",
    age: 20,
    city: "Surat"
};

const userDetails = {
    ...user,
    country: "India",
    job: "Developer"
};

const userCopy = {...userDetails };

userCopy.age = 22;

console.log(user);
console.log(userDetails);
console.log(userCopy);