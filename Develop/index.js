// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "What is the description?","How is the application installed?", "How do users operate the application?", "What kind of license are you using for this project?", "What is your github username?", "What is your email address?","What is your full name?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Your README has sucessfully been written!");
      
      });
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
        },
        {
            type: 'input',
            message: questions[6],
            name: 'email'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'fullName'
        }
      ])
    .then(answers => {
        let licenseString;
        let licenseBadge;
        if(answers.license =="Apache 2.0" ){
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            licenseString = "This application is protected under the Apache 2.0 license. Further information is available at http://www.apache.org/licenses/LICENSE-2.0";
        }
        else if(answers.license == "GNU GPLv3"){
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            licenseString = "This application is protected under the GNU GPLv3 license. Further information is available at https://www.gnu.org/licenses/";
        }
        else if(answers.license == "MIT"){
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            licenseString = `MIT License\n\n            Copyright (c) 2021 ${answers.fullName}\n\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
        }
        else if(answers.license == "ISC"){
            licenseString = `ISC License\n\n            Copyright (c) 2021, ${answers.fullName}\n\nPermission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.\n\nTHE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
            licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        }
        let contributeString = `### Contributor Covenant Code of Conduct\n\n#### Our Pledge\n\nWe as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender  identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.\n\nWe pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.\n\n#### Our Standards\n\nExamples of behavior that contributes to a positive environment for our community include:\n\n* Demonstrating empathy and kindness toward other people\n* Being respectful of differing opinions, viewpoints, and experiences\n* Giving and gracefully accepting constructive feedback\n* Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience\n* Focusing on what is best not just for us as individuals, but for the overall community\n\nExamples of unacceptable behavior include:\n\n* The use of sexualized language or imagery, and sexual attention or advances of any kind\n* Trolling, insulting or derogatory comments, and personal or political attacks\n* Public or private harassment\n* Publishing others' private information, such as a physical or email address, without their explicit permission\n* Other conduct which could reasonably be considered inappropriate in a professional setting\n\n#### Enforcement Responsibilities\n\nCommunity leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.\n\nCommunity leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.\n\n#### Scope\n\nThis Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.\n\n#### Enforcement\n\nInstances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at ${answers.email}\nAll complaints will be reviewed and investigated promptly and fairly.\n\nAll community leaders are obligated to respect the privacy and security of the reporter of any incident.\n\n#### Enforcement Guidelines\n\nCommunity leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:\n\n##### 1. Correction\n\n**Community Impact**: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.\n\n**Consequence**: A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.\n\n##### 2. Warning\n\n**Community Impact**: A violation through a single incident or series of actions.\n\n**Consequence**: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.\n\n##### 3. Temporary Ban\n\n**Community Impact**: A serious violation of community standards, including sustained inappropriate behavior.\n\n**Consequence**: A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.\n\n##### 4. Permanent Ban\n\n**Community Impact**: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior,  harassment of an individual, or aggression toward or disparagement of classes of individuals.\n\n**Consequence**: A permanent ban from any sort of public interaction within the community.\n\n#### Attribution\n\nThis Code of Conduct is adapted from the [Contributor Covenant][homepage], version 2.0, available at [https://www.contributor-covenant.org/version/2/0/code_of_conduct.html][v2.0].\n\nCommunity Impact Guidelines were inspired by [Mozilla's code of conduct enforcement ladder][Mozilla CoC].\n\nFor answers to common questions about this code of conduct, see the FAQ at [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at [https://www.contributor-covenant.org/translations][translations].\n\n[homepage]: https://www.contributor-covenant.org \n[v2.0]: https://www.contributor-covenant.org/version/2/0/code_of_conduct.html \n[Mozilla CoC]: https://github.com/mozilla/diversity \n[FAQ]: https://www.contributor-covenant.org/faq \n[translations]: https://www.contributor-covenant.org/translations \n`;
        let questionsString = `Contact Information can be found at: https://github.com/${answers.username}`;
        let readmeString =`# ${answers.title}            ${licenseBadge} \n\n## Description\n\n${answers.description}\n\n## Table of Contents\n\n* [Installation](#installation)\n* [Usage](#usage)\n* [Credits](#credits)\n* [License](#license)\n* [Contributing](#contributing)\n\n## Installation\n\n${answers.installation}\n\n## Usage\n\n${answers.usage}\n\n## License\n\n${licenseString}\n\n## Contributing\n\n${contributeString}\n\n## Questions\n\n${questionsString}`;
        writeToFile(process.argv[2], readmeString);
    })
}

// Function call to initialize app
init();
