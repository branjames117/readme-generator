const generateLicenseLink = require('./generateLicenseLink.js');

// Generate a Table of Contents section based on which data user submitted
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

// Generate a Contributing section only if the user submitted any contributing data
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

// Generate the Tests section only of the user submitted any Tests
function renderTestsSection(tests) {
  return `
## Tests

${tests}
`;
}

// Generate the markdown (all content to be printed in README.md)
function generateMarkdown(data) {
  // Destructure the data object
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

  // Get license text and badge markdown
  const licenseMarkdown = generateLicenseLink(license, username);

  return `# ${title}
${licenseMarkdown.badge}

## Description

${description}

## Table of Contents

${renderTableOfContentsSection(data)}

## Installation

${installation}

## Usage

${usage}

## License

${licenseMarkdown.text}
${contributing ? renderContributingSection(contributing) : ''}${
    tests ? renderTestsSection(tests) : ''
  }
## Questions

This repository was created and is maintained by [${username}](https://github.com/${username}).

${
  email
    ? `With any questions email the repository owner at [${email}](mailto:${email}).`
    : ''
}`;
}

module.exports = generateMarkdown;
