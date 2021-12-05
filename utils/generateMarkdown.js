const generateLicenseLink = require('./generateLicenseLink.js');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[](https://img.shields.io/badge/License-${license}-blue)`;
}

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

function renderQuestionsSection(email) {
  return `## Questions
  
  With any questions email the repository owner at [${email}](mailto:${email})
`;
}

function renderTableOfContentsSection(data) {
  let basicMarkdown = `* [Installation](#installation)
* [Usage](#usage)
* [License](#license)`;

  if (data.contributing) {
    basicMarkdown += `
* [Contributing](#contributing)`;
  }

  if (data.tests) {
    basicMarkdown += `
* [Tests](#tests)`;
  }

  if (data.email) {
    basicMarkdown += `
* [Questions](#questions)`;
  }

  return basicMarkdown;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  // destructure the data object
  const {
    title,
    username,
    email,
    description,
    installation,
    usage,
    license,
    tests,
    contributing,
  } = data;

  // get license text, link, and badge URL
  const licenseMarkdown = generateLicenseLink(license, username);
  const tableOfContentsMarkdown = renderTableOfContentsSection(data);

  return `# ${title}

## Description
${licenseMarkdown.badge}

${description}

## Table of Contents

${tableOfContentsMarkdown}

## Installation

${installation}

## Usage

${usage}

## License

${licenseMarkdown.text}
${contributing ? renderContributingSection(contributing) : ''}
${tests ? renderTestsSection(tests) : ''}
${email ? renderQuestionsSection(email) : ''}`;
}

module.exports = generateMarkdown;
