#!/usr/bin/env node 

// // 2-List prompt

import inquirer from "inquirer";
const mycal = await inquirer.prompt([{

    type: 'list',
    name:   'operation',
    message: 'what operation you want to perform?',
    choices:['add','subtract','multiply','division','modulo']
},
{
    type:'number',
    name:'num1',
    choices: 'enter first number',
},
{
    type:'number',
    name:'num2',
    choices: 'enter other number',
}

])

if (mycal.operation === 'add'){
    // console.log('the sum of your numbers: ', + mycal.num1+mycal.num2);
    console.log(`the sum of your numbers is  ${mycal.num1+mycal.num2}`);
} else if (mycal.operation==='subtract'){
    console.log(`the difference of of your numbers is ${mycal.num1-mycal.num2}`);
}else if(mycal.operation==='multiply'){
    console.log(`the product od your numbers is ${mycal.num1*mycal.num2}`);

} else if (mycal.operation==='division'){
    console.log(`the quotient of ${mycal.num1} and ${mycal.num2} is ${mycal.num1 / mycal.num2}`);
} else{
    console.log(`the remainder of ${mycal.num1} and ${mycal.num2} is ${mycal.num1 % mycal.num2}`);

}