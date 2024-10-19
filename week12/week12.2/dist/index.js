"use strict";
function sumofAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumofAge({
    name: "hari",
    age: 22
}, {
    name: "jadu",
    age: 23
});
console.log(age);
