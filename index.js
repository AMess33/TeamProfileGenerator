// Include packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateFile = ({ name, email, id, office, github, school, role }) =>
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
              ${Manager.name}'s Team Roster</h1>
      </div>
      <section class="p-3 m-3 d-inline-flex flex-wrap mx-auto justify-content-center">
          <div class="card col-4 p-3 m-3 border border-primary border-3 rounded bg-secondary">
              <h4 class="card-title text-center fw-bold text-uppercase text-light">Andrew</h4>
              <ul class="card-body list-group list-group-flush">
                  <li class="list-group-item">${Employee[0].role}</li>
                  <li class="list-group-item">${Employee[0].id}</li>
                  <li class="list-group-item">eMail:${Employee[0].email}</li>
                  <li class="list-group-item">${Employee[0].office}</li>
              </ul>
          </div>
          <div class="card col-4 p-3 m-3 border border-primary border-3 rounded bg-secondary">
              <h4 class="card-title text-center fw-bold text-uppercase text-light">Andrew</h4>
              <ul class="card-body list-group list-group-flush">
                  <li class="list-group-item">${Employee[1].role}</li>
                  <li class="list-group-item">${Employee[1].id}</li>
                  <li class="list-group-item">eMail:${Employee[1].email}</li>
                  <li class="list-group-item">${Employee[1].github}</li>
              </ul>
          </div>
          <div class="card col-4 p-3 m-3 border border-primary border-3 rounded bg-secondary">
              <h4 class="card-title text-center fw-bold text-uppercase text-light">Andrew</h4>
              <ul class="card-body list-group list-group-flush">
                  <li class="list-group-item">${Employee[2].role}</li>
                  <li class="list-group-item">${Employee[2].id}</li>
                  <li class="list-group-item">eMail:${Employee[2].email}</li>
                  <li class="list-group-item">${Employee[2].github}</li>
              </ul>
          </div>
          <div class="card col-4 p-3 m-3 border border-primary border-3 rounded bg-secondary">
              <h4 class="card-title text-center fw-bold text-uppercase text-light">Andrew</h4>
              <ul class="card-body list-group list-group-flush">
                  <li class="list-group-item">${Employee[3].role}</li>
                  <li class="list-group-item">${Employee[3].id}</li>
                  <li class="list-group-item">eMail:${Employee[3].email}</li>
                  <li class="list-group-item">${Employee[3].school}</li>
              </ul>
          </div>
          <div class="card col-4 p-3 m-3 border border-primary border-3 rounded bg-secondary">
              <h4 class="card-title text-center fw-bold text-uppercase text-light">Andrew</h4>
              <ul class="card-body list-group list-group-flush">
                  <li class="list-group-item">${Employee[4].role}</li>
                  <li class="list-group-item">${Employee[4].id}</li>
                  <li class="list-group-item">eMail:${Employee[4].email}</li>
                  <li class="list-group-item">${Employee[4].school}</li>
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
      const manager = new Manager('manager', 'office', 'email');
      let isFinished = false;

      while (isFinished === false) {
        // prompts to follow a 'engineer' selection
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
              message: 'What is the School your Inter is enrolled?',
              when: (answers) => answers.menu === 'New Intern',
            },
            {
              type: 'input',
              name: 'email',
              message: "What is the Intern's email address?",
              when: (answers) => answers.menu === 'New Intern',
            }])
          .then((answers) => {
            if (answers.menu === 'New Engineer') {
              const engineer = new Engineer('engineer', 'github', 'email');
            } else if (answers.menu === 'New Intern') {
              const intern = new Intern('intern', 'school', 'email');
            } else if (answers.menu === 'Finished adding Team Members') {
              isFinished = true;
              const pageContent = generateFile(answers);
              fs.writeFile('index.html', pageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
              );
            }
          })
      }
    }
  })



