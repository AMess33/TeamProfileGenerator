// Include packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');

const generateFile = ({name, email, id, office, github, school, role}) => 
`

`

// Create inquirer prompt questions for user input
inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What Role does this employee hold?',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        // prompts to follow a 'manager' selection
        {
            type: 'input',
            name: 'manager',
            message: "What is your Manager's first name?",
            when: (answers) => answers.role === 'Manager',
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the Office Number for this Manager?',
            when: (answers) => answers.role === 'Manager',
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email address?",
            when: (answers) => answers.role === 'Manager',
        },
         // prompts to follow a 'engineer' selection
         {
            type: 'input',
            name: 'engineer',
            message: "What is your Engineer's first name?",
            when: (answers) => answers.role === 'Engineer',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub username for this Engineer?',
            when: (answers) => answers.role === 'Engineer',
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email address?",
            when: (answers) => answers.role === 'Engineer',
        },
         // prompts to follow a 'intern' selection
         {
            type: 'input',
            name: 'intern',
            message: "What is your Intern's first name?",
            when: (answers) => answers.role === 'Intern',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the School your Inter is enrolled?',
            when: (answers) => answers.role === 'Intern',
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's email address?",
            when: (answers) => answers.role === 'Intern',
        }
    ])