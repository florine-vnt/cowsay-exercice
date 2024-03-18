const information = require('./information');
console.log(`Hi, my name is ${information.myName} and I'm at ${information.myCampus} campus`);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U "
}));