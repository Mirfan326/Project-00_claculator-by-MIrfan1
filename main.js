#!/usr/bin/env node 
"use strict";
// // 2-List prompt
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const mycal = await inquirer_1.default.prompt([{
        type: 'list',
        name: 'operation',
        message: 'what operation you want to perform?',
        choices: ['add', 'subtract', 'multiply', 'division', 'modulo']
    },
    {
        type: 'number',
        name: 'num1',
        choices: 'enter first number',
    },
    {
        type: 'number',
        name: 'num2',
        choices: 'enter other number',
    }
]);
if (mycal.operation === 'add') {
    // console.log('the sum of your numbers: ', + mycal.num1+mycal.num2);
    console.log(`the sum of your numbers is  ${mycal.num1 + mycal.num2}`);
}
else if (mycal.operation === 'subtract') {
    console.log(`the difference of of your numbers is ${mycal.num1 - mycal.num2}`);
}
else if (mycal.operation === 'multiply') {
    console.log(`the product od your numbers is ${mycal.num1 * mycal.num2}`);
}
else if (mycal.operation === 'division') {
    console.log(`the quotient of ${mycal.num1} and ${mycal.num2} is ${mycal.num1 / mycal.num2}`);
}
else {
    console.log(`the remainder of ${mycal.num1} and ${mycal.num2} is ${mycal.num1 % mycal.num2}`);
}
