// Include packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateFile = ({name, email, id, office, github, school, role}) => 
`

`

// Create inquirer prompt questions for user input
inquirer
    .prompt([
        
        // Inital prompts for the team Manager
        {
            type: 'input',
            name: 'manager',
            message: "What is your Team Manager's first name?",
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the Office Number for this Manager?',
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email address?",
        },
         // prompts to follow a 'engineer' selection
         {
            type: 'list',
            name: 'menu',
            message: "Please choose to add an Engineer, Intern, or exit the application if finshed",
            choices: ['New Engineer', 'New Intern', 'Finished adding Team Members']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub username for this Engineer?',
            when: (answers) => answers.menu === 'New Engineer',
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email address?",
            when: (answers) => answers.menu === 'New Engineer',
        },
         // prompts to follow a 'intern' selection
         {
            type: 'input',
            name: 'intern',
            message: "What is your Intern's first name?",
            when: (answers) => answers.menu === 'New Intern',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the School your Inter is enrolled?',
            when: (answers) => answers.menu === 'New Intern',
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's email address?",
            when: (answers) => answers.menu === 'New Intern',
        }
    ])

    .then((answers) => {
        if (answers.role === 'Manager') {
            const manager = new Manager('manager', 'office', 'email');
        } else if (answers.role === 'Engineer') {
            const engineer = new Engineer('engineer', 'github', 'email');
        } else if (answers.role === 'Intern') {
            const intern = new Intern('intern', 'school', 'email');
        }
    })