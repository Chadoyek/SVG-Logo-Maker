const inquirer = require('inquirer');
const fs = require('fs');



criteria = [
    {message: 'Please enter up to 3 characters:',
    type: 'input',
    name: 'text'},

    {message: 'Please enter a text color:',
    type: 'input',
    name: 'textColor'},

    {message: 'Please choose a shape:',
    type: 'list',
    name: 'shape',
    choices: ['circle', 'square', 'triangle']},

    {message: 'Please enter a shape color:',
    type: 'input',
    name: 'shapeColor'}
]
