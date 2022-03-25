// TODO: Include packages needed for this application
'use strict';
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
console.log('hey, i hope this works :)')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'readmeTitle',
        message: "What is the title of the README?",
    },
    {
        type: 'input',
        name:'description',
        message: 'Whats the description of the README?'

    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'How to install?'
    },

    {
        type: 'input',
        name: 'usageInfo',
        message: 'What is the usage info?'
    
    },

    {
        type: 'rawlist',
        name: 'license',
        message: 'which license?',
        choices: ['BSD', 'MIT', 'GPL'],
    },
    {
        type: 'input',
        name:'contribution',
        message: "Who are the contributors?"
    },

    {
        type:'input',
        name:'testIntructions',
        message: 'What are the test intructions?'
    },

    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    
    {
        type: 'input',
        name: 'link',
        message: 'Enter Github profile link.',
       
  
    },
  
  
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
        writeToFile("generatereadme.md", generateMarkdown({...answers}) )
    })
}

// // Function call to initialize app
init();
