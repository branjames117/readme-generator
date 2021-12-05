const generateLicenseLink = require('./generateLicenseLink.js');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

function renderContributingSection(contributing) {
  return `## Contributing

  ${contributing}
  `;
}

function renderTestsSection(tests) {
  return `## Tests

  ${tests}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
${data.contributing ? '* [Contributing](#contributing)' : ''}
${data.tests ? '* [Tests](#tests)' : ''}
${data.email ? '* [Questions](#questions)' : ''}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${generateLicenseLink(data.license, data.username)}

${data.contributing ? renderContributingSection(data.contributing) : ''}

${data.tests ? renderTestsSection(data.tests) : ''}

`;
}

module.exports = generateMarkdown;
