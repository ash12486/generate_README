// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return '![License: GNU AGPLv3](https://img.shields.io/badge/License-AGPLv3-blue.svg)';
    case 'GNU GPLv3':
      return '![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'GNU LGPLv3':
      return '![License: GNU LGPLv3](https://img.shields.io/badge/License-LGPLv3-blue.svg)';
    case 'Mozilla Public License 2.0':
      return '![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla_Public-blue.svg)';
    case 'Apache License 2.0':
      return '![License: Apache License 2.0](https://img.shields.io/badge/License-Apache-blue.svg)';
    case 'Boost Software License 1.0':
      return '![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_Software-blue.svg)';
    case 'The Unlicense':
      return '![License: The Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    'GNU AGPLv3': 'agpl-3.0',
    'GNU GPLv3': 'gpl-3.0',
    'GNU LGPLv3': 'lgpl-3.0',
    'Mozilla Public License 2.0': 'MPL-2.0',
    'Apache License 2.0': 'Apache-2.0',
    'MIT License': 'MIT',
    'Boost Software License 1.0': 'BSL-1.0',
    'The Unlicense': 'unlicense'
  };
  
  return license !== 'none' ? `\n[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${licenseLink[license]})\n` : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
## License

This project is licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}
## Table of Contents
- [Description](#desecription)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [Contributors](#contributors)
- [Testing](#testing)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contributors}
## Testing
\`\`\`
${data.test}
\`\`\`
${renderLicenseSection(data.license)}

## Questions
- Name - ${data.name}
- Email - ${data.email}
- Github - [${data.creator}](https://github.com/${data.creator}/)
`;
}

export default generateMarkdown;
