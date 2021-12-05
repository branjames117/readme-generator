// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const chalk = require('chalk');
const generateMarkdown = require('./utils/generateMarkdown.js');

const highlight = chalk.keyword('magenta');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: `What is the ${highlight('title')} of the project?`,
    validate(title) {
      // project title must have at least 1 character
      if (title.length < 1) {
        return '(Required) Project title must be at least 1 character in length.';
      } else {
        return true;
      }
    },
  },
  {
    type: 'input',
    name: 'username',
    message: `What is your GitHub ${highlight('username')}?`,
    validate(username) {
      // project title must have at least 1 character
      if (username.length < 1) {
        return '(Required) GitHub username must be at least 1 character in length.';
      } else {
        return true;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: `(Optional) What is your ${highlight('email')} address?`,
    validate(email) {
      // if email is provided, check that it matches the basic email rules 'a@a.b = true'
      if (email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email)
          ? true
          : 'Enter a valid email address, or leave blank if you do not wish to provide one.';
      } else {
        return true;
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: `(Required) Provide a project ${highlight('description')}:`,
    validate(description) {
      // project description must have at least 5 characters
      if (description.length < 5) {
        return 'Project description must be at least 5 characters in length.';
      } else {
        return true;
      }
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: `(Required) Provide step-by-step ${highlight(
      'installation'
    )} instructions:`,
    validate(installation) {
      // installation instructions must have at least 5 characters
      if (installation.length < 5) {
        return 'Installation instructions must be at least 5 characters in length.';
      } else {
        return true;
      }
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: `(Required) Provide ${highlight('usage')} instructions:`,
    validate(usage) {
      // installation instructions must have at least 5 characters
      if (usage.length < 5) {
        return 'Usage instructions must be at least 5 characters in length.';
      } else {
        return true;
      }
    },
  },
  // {
  //   type: 'input',
  //   name: 'screenshot',
  //   message: `(Optional) Relative path to a ${highlight(
  //     'screenshot'
  //   )} of the app:`,
  //   validate(screenshot) {
  //     // screenshot filepath must have at least 5 characters
  //     if (screenshot && screenshot.length > 5) {
  //       return 'Relative filepath to screenshot must be blank (if inapplicable) or at least 5 characters in length.';
  //     } else {
  //       return true;
  //     }
  //   },
  // },
  {
    type: 'list',
    name: 'license',
    message: `Which ${highlight('license')} will your project use?`,
    choices: [
      'MIT',
      'Mozilla Public License 2.0',
      'Open Software License 3.0',
      'PostgreSQL License',
      'SIL Open Font License 1.1',
      'University of Illinois/NCSA Open Source License',
      'The Unlicense',
      'zLib License',
      'Academic Free License v3.0',
      'Apache License 2.0',
      'Artistic License 2.0',
      'Boost Software License 1.0',
      'BSD 2-claus "Simplified" License',
      'BSD 3-claus Clear License',
      'Creative Commons Zero v1.0 Universal',
      'Creative Commons Attribution 4.0',
      'Creative Commons Attribution Share Alike 4.0',
      'Do What The F*ck You Want To Public License',
      'Educational Community License v2.0',
      'Eclipse Public License 1.0',
      'Eclipse Public License 2.0',
      'European Union Public License 1.1',
      'GNU Affero General Public License v3.0',
      'GNU General Public License v2.0',
      'GNU General Public License v3.0',
      'GNU Lesser General Public License v2.1',
      'GNU Lesser General Public License v3.0',
      'ISC',
      'LaTeX Project Public License v1.3c',
      'Microsoft Public License',
    ],
  },
  {
    type: 'input',
    name: 'tests',
    message: `(Optional) Describe any ${highlight(
      'tests'
    )} your project might employ:`,
    validate(tests) {
      // screenshot filepath must have at least 5 characters
      if (tests && tests.length < 5) {
        return 'Testing information must be blank (if inapplicable) or at least 5 characters in length.';
      } else {
        return true;
      }
    },
  },
  {
    type: 'input',
    name: 'contributing',
    message: `(Optional) Describe how a user can ${highlight(
      'contribute'
    )} to the project (enter CC to use the industry standard Contributor Covenant):`,
    validate(contributing) {
      // screenshot filepath must have at least 5 characters
      if (
        contributing &&
        contributing.length < 5 &&
        contributing.toLowerCase() !== 'cc'
      ) {
        return 'Contributing information must be blank (if inapplicable) or at least 5 characters in length.';
      } else {
        return true;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Immediately invoke app initialization
(function init() {
  // Welcome the user
  console.log(`
  Welcome to the ${highlight('Professional Readme Generator')}.
  Answer the following questions and a README written in markdown language
  will be generated which can be included in your coding project.
  `);

  // Begin the series of questions
  let markdown = '';
  inquirer.prompt(questions).then((answers) => {
    markdown = generateMarkdown(answers);
    console.log(markdown);
  });
})();
