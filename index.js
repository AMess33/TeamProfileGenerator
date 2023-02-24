// Include packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let finalAnswers = []
const generateFile = () =>
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
              ${finalAnswers[0].getName()}'s Team Roster</h1>
      </div>
      <section class="p-3 m-3 d-inline-flex flex-wrap mx-auto justify-content-center">
          <div class="card col-5 p-3 m-3 border border-primary border-3 rounded bg-secondary">
              <h4 class="card-title text-center fw-bold text-uppercase text-light">${finalAnswers[0].getName()}</h4>
              <ul class="card-body list-group list-group-flush">
                  <li class="list-group-item">${finalAnswers[0].getRole()}</li>
                  <li class="list-group-item">Employee ID# ${finalAnswers[0].getId()}</li>
                  <li class="list-group-item">eMail:<a href="mailto: ${finalAnswers[0].getEmail()}">${finalAnswers[0].getEmail()}</a></li>
                  <li class="list-group-item">Office Number: ${finalAnswers[0].getOfficeNumber()}</li>
              </ul>
          </div>
          <div class="card col-5 p-3 m-3 border border-primary border-3 rounded bg-secondary">
              <h4 class="card-title text-center fw-bold text-uppercase text-light">${finalAnswers[1].getName()}</h4>
              <ul class="card-body list-group list-group-flush">
                  <li class="list-group-item">${finalAnswers[1].getRole()}</li>
                  <li class="list-group-item">Employee ID# ${finalAnswers[1].getId()}</li>
                  <li class="list-group-item">eMail:<a href="mailto: ${finalAnswers[1].getEmail()}">${finalAnswers[1].getEmail()}</a></li>
                  <li class="list-group-item">GitHub Username:<a href="github.com/${finalAnswers[1].getGithub()}"> ${finalAnswers[1].getGithub()}</a></li>
              </ul>
          </div>
          <div class="card col-5 p-3 m-3 border border-primary border-3 rounded bg-secondary">
              <h4 class="card-title text-center fw-bold text-uppercase text-light">${finalAnswers[2].getName()}</h4>
              <ul class="card-body list-group list-group-flush">
                  <li class="list-group-item">${finalAnswers[2].getRole()}</li>
                  <li class="list-group-item">Employee ID# ${finalAnswers[2].getId()}</li>
                  <li class="list-group-item">eMail:<a href="mailto: ${finalAnswers[2].getEmail()}">${finalAnswers[2].getEmail()}</a></li>
                  <li class="list-group-item">School: ${finalAnswers[2].getSchool()}</li>
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

  .then((answers) => {
    const manager = new Manager(answers.manager, answers.email, answers.office);
    finalAnswers.push(manager);
    menu();
  });
// function after the initial prompts to ask user to create engineer, intern, or exit application
const menu = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'menu',
        message: "Please choose to add an Engineer, Intern, or exit the application if finshed",
        choices: ['New Engineer', 'New Intern', 'Finished adding Team Members']
      }])
    .then((answers) => {
      if (answers.menu === 'New Engineer') {
        engineerQuestions()
      } else if (answers.menu === 'New Intern') {
        internQuestions()
      } else {
        const pageContent = generateFile();

        fs.writeFile('index.html', pageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
      }

    })
}
// function called when engineer is selected from menu()
  // questions used to build engineer
const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineer',
        message: "What is your Engineer's first name?",
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the GitHub username for this Engineer?',
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email address?",
      }
    ])
    .then((answers) => {
      const engineer = new Engineer(answers.engineer, answers.email, answers.github);
      finalAnswers.push(engineer);
      menu();
    })
};

// function called when intern is selected
  // questions used to build intern
const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'intern',
        message: "What is your Intern's first name?",
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is the School your Intern is enrolled?',
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email address?",
      }
    ])

    .then((answers) => {
      const intern = new Intern(answers.intern, answers.email, answers.school);
      finalAnswers.push(intern);
      menu();
    })
};


