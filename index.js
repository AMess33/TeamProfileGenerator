// Include packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let finalAnswers = []
const generateFile = ({engineer, intern, manager}) =>
  `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
      <link rel="stylesheet" href="assets/styles.css">
      <title>Team Roster</title>
  </head>
  
  <body class="justify-content-center">
      <div class="d-flex justify-content-center bg-primary">
          <h1 class="bg-success bg-gradient text-light m-3 p-3 border border-3 border-light rounded-pill">
              ${manager.getName()}'s Team Roster</h1>
      </div>
      <section class="p-3 m-3 d-inline-flex flex-wrap mx-auto justify-content-center">
          <div class="card col-4 p-3 m-3 border border-primary border-3 rounded bg-secondary">
              <h4 class="card-title text-center fw-bold text-uppercase text-light">${manager.getName()}</h4>
              <ul class="card-body list-group list-group-flush">
                  <li class="list-group-item">${manager.getRole()}</li>
                  <li class="list-group-item">${manager.getId()}</li>
                  <li class="list-group-item">eMail:<a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="list-group-item">${manager.getOfficeNumber()}</li>
              </ul>
          </div>
          <div class="card col-4 p-3 m-3 border border-primary border-3 rounded bg-secondary">
              <h4 class="card-title text-center fw-bold text-uppercase text-light">${engineer.getName()}</h4>
              <ul class="card-body list-group list-group-flush">
                  <li class="list-group-item">${engineer.getRole()}</li>
                  <li class="list-group-item">${engineer.getId()}</li>
                  <li class="list-group-item">eMail:<a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                  <li class="list-group-item">${engineer.getGithub()}</li>
              </ul>
          </div>
          <div class="card col-4 p-3 m-3 border border-primary border-3 rounded bg-secondary">
              <h4 class="card-title text-center fw-bold text-uppercase text-light">${engineer.getName()}</h4>
              <ul class="card-body list-group list-group-flush">
                  <li class="list-group-item">${engineer.getRole()}</li>
                  <li class="list-group-item">${engineer.getId()}</li>
                  <li class="list-group-item">eMail:<a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                  <li class="list-group-item">${engineer.getGithub()}</li>
              </ul>
          </div>
          <div class="card col-4 p-3 m-3 border border-primary border-3 rounded bg-secondary">
              <h4 class="card-title text-center fw-bold text-uppercase text-light">${intern.getName()}</h4>
              <ul class="card-body list-group list-group-flush">
                  <li class="list-group-item">${intern.getRole()}</li>
                  <li class="list-group-item">${intern.getId()}</li>
                  <li class="list-group-item">eMail:<a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li class="list-group-item">${intern.getSchool()}</li>
              </ul>
          </div>
          <div class="card col-4 p-3 m-3 border border-primary border-3 rounded bg-secondary">
              <h4 class="card-title text-center fw-bold text-uppercase text-light">${intern.getName()}</h4>
              <ul class="card-body list-group list-group-flush">
                  <li class="list-group-item">${intern.getRole()}</li>
                  <li class="list-group-item">${intern.getId()}</li>
                  <li class="list-group-item">eMail:<a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li class="list-group-item">${intern.getSchool()}</li>
              </ul>
          </div>
      </section>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
          integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
          crossorigin="anonymous"></script>
  </body>

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
    }])

  .then(async (answers) => {
    if (answers.office !== undefined) {
      const manager = new Manager('manager', 'email', 'office');
      let isFinished = false;

      while (isFinished === false) {
        finalAnswers.push(answers);
        await inquirer
          .prompt([
            {
              type: 'list',
              name: 'menu',
              message: "Please choose to add an Engineer, Intern, or exit the application if finshed",
              choices: ['New Engineer', 'New Intern', 'Finished adding Team Members']
            },
            {
              type: 'input',
              name: 'engineer',
              message: "What is your Engineer's first name?",
              when: (answers) => answers.menu === 'New Engineer',
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

            {
              type: 'input',
              name: 'intern',
              message: "What is your Intern's first name?",
              when: (answers) => answers.menu === 'New Intern',
            },
            {
              type: 'input',
              name: 'school',
              message: 'What is the School your Intern is enrolled?',
              when: (answers) => answers.menu === 'New Intern',
            },
            {
              type: 'input',
              name: 'email',
              message: "What is the Intern's email address?",
              when: (answers) => answers.menu === 'New Intern',
            }])
          .then((answers) => {
            console.log(finalAnswers);
            // if (answers.menu === 'New Engineer') {
            //   const engineer = new Engineer('engineer', 'email', 'github');
            // } else if (answers.menu === 'New Intern') {
            //   const intern = new Intern('intern', 'email', 'school');
            // } else if (answers.menu === 'Finished adding Team Members') {
            //   isFinished = true;
            //   const pageContent = generateFile(engineer, intern, manager);
              
            //   fs.writeFile('index.html', pageContent, (err) =>
            //     err ? console.log(err) : console.log('Successfully created index.html!')
            //   );
          //   }
          })
      }
    }
  })



