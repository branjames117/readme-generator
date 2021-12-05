const generateLicenseLink = require('./generateLicenseLink.js');

function renderContributingSection(contributing) {
  if (contributing.toLowerCase() === 'cc') {
    return `
## Contributing

This repository and its contributors follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md).
    `;
  } else {
    return `
## Contributing

${contributing}
`;
  }
}

function renderTestsSection(tests) {
  return `
## Tests

${tests}
`;
}

function renderQuestionsSection(email) {
  return `
## Questions

With any questions email the repository owner at [${email}](mailto:${email}).
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
${contributing ? renderContributingSection(contributing) : ''}${
    tests ? renderTestsSection(tests) : ''
  }${email ? renderQuestionsSection(email) : ''}`;
}

module.exports = generateMarkdown;
