// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "What is the description?","How is the application installed?", "How do users operate the application?", "What kind of license are you using for this project?", "What is your github username?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
          type: 'input',
          message: questions[0],
          name: 'title',
        },
        {
          type: 'input',
          message: questions[1],
          name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'list',
            message: questions[4],
            name: 'license',
            choices: ["Apache 2.0","GNU GPLv3","MIT","ISC"]
        },
        {
            type: 'input',
            message: questions[5],
            name: 'username'
        }
      ])
    .then(answers => {
        let licenseString = "Look at this big ole license i made";
        let contributeString = "you can contribute by politely asking me, alex";
        let questionsString = `Ask ${answers.username}`;
        let readmeString =`
        # ${answers.title} \n 
        ## Description\n
        ${answers.description}\n
        ## Table of Contents\n
        * [Installation](#installation)\n
        * [Usage](#usage)\n
        * [Credits](#credits)\n
        * [License](#license)\n
        ## Installation\n
        ${answers.installation}\n
        ## Usage\n
        ${answers.usage}\n
        ## License\n
        ${licenseString}\n
        ## Contributing\n
        ${contributeString}\n
        ## Questions\n
        ${questionsString}`;
        console.log(readmeString);
    })
}

// Function call to initialize app
init();
