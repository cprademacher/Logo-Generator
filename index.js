// External Packages
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// Internal Packages
const shapes = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        message: 'Enter 1, 2, or 3 letters of your choice: ',
        name: 'letters',
        validate: function(answer) {
            if(answer.length < 1 || answer.length > 3) {
                return console.log('Answer bust be either 1, 2, or 3 letters.')
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What color do you want your text to be? ',
        name: 'text-color',
        validate: function(answer) {
            if(answer.length < 1) {
                return console.log('Must provide an answer.')
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        message: 'Which shape do you want? ',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color do you want your shape to be? ',
        name: 'shape-color',
        validate: function(answer) {
            if(answer.length < 1) {
                return console.log('Must provide an answer.')
            } else {
                return true
            }
        }
    }
];

inquirer.prompt(questions).then((data) => {
    
})
