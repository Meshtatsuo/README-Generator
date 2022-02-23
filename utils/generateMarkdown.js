// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Boost Software License v3.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Other/None":
      return "";
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/gpl-3";
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case "Boost Software License v3.0":
      return "https://www.boost.org/LICENSE_1_0.txt";
    case "Creative Commons Zero v1.0 Universal":
      return "http://creativecommons.org/publicdomain/zero/1.0/";
    case "Other/None":
      return "";
    default:
      return "";
  }
}
// Render Project Info

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  if (badge === "" || link === "") {
    return "";
  } else {
    return `
  ## Licensing

  ${badge}
  <p> This software has been licensed under the <a href= "${link}" target="_blank"> ${license} license. </a></p>
  `;
  }
}

//
function generateFeatureList(data) {
  let install = "";
  let installHead = "";
  let usage = "";
  let usageHead = "";
  let contributing = "";
  let contributingHead = "";
  let testInstructions = "";
  let testHead = "";
  let tableOfContents = [];
  let tableOfContentsHead = "";
  // Check if content is in each section, then add data to sections with content
  if (data.install) {
    tableOfContents.push("### • [Install](#Install)");
    installHead = "## Installation";
    install = data.install;
  }
  if (data.usage) {
    tableOfContents.push("### • [Usage](#Usage)");
    usageHead = "## Usage";
    usage = data.usage;
  }
  if (data.contributing) {
    tableOfContents.push("### • [Contributing](#Contributing)");
    contributingHead = "## Contributing";
    contributing = data.contributing;
  }
  if (data.testInstructions) {
    tableOfContents.push("### • [Testing](#Testing)");
    testHead = "## Testing";
    testInstructions = data.testInstructions;
  }
  if (data.license) {
    tableOfContents.push("### • [Licensing](#Licensing)");
    // No need to add content here as we have seperate functions for that.
    // Only need to add licensing to the table of contents
  }
  if (tableOfContents.length >= 0) {
    tableOfContentsHead = "## Table of Contents";
  }
  return `
  ${tableOfContentsHead}

  ${tableOfContents[0]}
  ${tableOfContents[1]}
  ${tableOfContents[2]}
  ${tableOfContents[3]}
  ${tableOfContents[4]}

  ${installHead}
  ${install}

  ${usageHead}
  ${usage}
  
  ${contributingHead}
  ${contributing}

  ${testHead}
  ${testInstructions}
  `;
}

// TODO: Create a function to generate markdown for README
function generateInfoMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const featureList = generateFeatureList(data);
  return `
  # ${data.title}
  ${data.description}

  ${featureList}

  ${licenseSection}

  `;
}

module.exports = {
  generateMarkdown: generateInfoMarkdown,
};
