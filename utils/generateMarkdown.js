// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.readmeTitle}

  ## Description
${data.description}


## Table of Content

## Installation
${data.installationInstructions}

## Usage
${data.usageInfo}
## License
${data.license}
## Contributing 
${data.contribution}
## Tests
${data.testInstructions}
## Questions 
Any questions or comments, my email is below. Also feel reach to checkout my Github.

${data.username},
 ${data.email}

`;
}

module.exports = generateMarkdown;
