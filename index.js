// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of the project?',
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
    message: 'What is your GitHub username?',
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
    message: '(Optional) What is your email address?',
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
    message: '(Required) Describe the project:',
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
    message: '(Required) Provide step-by-step installation instructions:',
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
    message: '(Required) Provide usage instructions:',
    validate(usage) {
      // installation instructions must have at least 5 characters
      if (usage.length < 5) {
        return 'Usage instructions must be at least 5 characters in length.';
      } else {
        return true;
      }
    },
  },
  {
    type: 'input',
    name: 'screenshot',
    message: '(Optional) Relative path to a screenshot of the app:',
    validate(screenshot) {
      // screenshot filepath must have at least 5 characters
      if (screenshot && screenshot.length > 5) {
        return 'Relative filepath to screenshot must be blank (if inapplicable) or at least 5 characters in length.';
      } else {
        return true;
      }
    },
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license will your project use?',
    choices: [
      'MIT',
      'Apache 2.0',
      'ISC',
      'BSD',
      'GPLv2',
      'GPLv3',
      'AGPLv3',
      'Enter my own',
    ],
  },
  {
    type: 'input',
    name: 'license',
    message:
      '(Required) Describe your licensing situation, including the name of the license:',
    validate(license) {
      if (license.length < 5) {
        return 'License information must be at least 5 character in length.';
      } else {
        return true;
      }
    },
    when(answers) {
      return answers.license === 'Enter my own';
    },
  },
  {
    type: 'input',
    name: 'tests',
    message: '(Optional) Describe any tests your project might employ:',
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
    message:
      '(Optional) Describe how a user can contribute to the project (enter CC to use the industry standard Contributor Covenant):',
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
  {
    type: 'confirm',
    name: 'confirmContributors',
    message: 'Did any other GitHub users contribute to this project?',
    default: false,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => console.log(answers));
}

// Function call to initialize app
init();
