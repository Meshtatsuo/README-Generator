// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = function (license) {
  return;
  `
  Placeholder License Badge
  `;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return;
      `
      [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
      `;
    case "GNU General Public License v3.0":
      return;
      `
      [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
      `;
    case "MIT License":
      return;
      `
      [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      `;
    case "Boost Software License v3.0":
      return;
      `
      [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
      `;
    case "Creative Commons Zero v1.0 Universal":
      return;
      `
      [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
      `;
    case "Other/None":
      return;
      `
      `;
    default:
      return;
      ``;
  }
}

// Render Project Info

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//
function generateFeatureList(featureList) {}

// TODO: Create a function to generate markdown for README
function generateInfoMarkdown(data) {
  console.log(projectInfo);
  return "TEST";
}

module.exports = renderLicenseLink;
