// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
let projectInfo = [];
let featureList = [];
// TODO: Create an array of questions for user input
const promptProjectInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "project-title",
        message: "What is the name of your project?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "project-description",
        message: "Please enter a brief description of your project.",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a description!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "install-instructions",
        message: "Please enter installation instructions.",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter installation instructions!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Please describe how to use the software.",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter usage instructions!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "contributing",
        message: "Please provide information regarding making contributions",
      },
      {
        type: "input",
        name: "test-instructions",
        message: "Please provide testing instructions.",
      },
      {
        type: "list",
        name: "license",
        message: "Select your project's license",
        choices: [
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
          "Boost Software License 1.0",
          "Creative Commons Zero v1.0 Universal",
          "Other/None",
        ],
      },
    ])
    .then((answers) => {
      projectInfo = answers;
      console.log(projectInfo);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  promptProjectInfo();
}

// Function call to initialize app
init();
