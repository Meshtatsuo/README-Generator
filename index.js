// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const mdGenerator = require("./utils/generateMarkdown.js");
let projectInfo = [];
let featureList = [];
// TODO: Create an array of questions for user input
const promptProjectInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
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
        name: "description",
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
        name: "install",
        message: "Please enter installation instructions.",
      },
      {
        type: "input",
        name: "usage",
        message: "Please describe how to use the software.",
      },
      {
        type: "input",
        name: "contributing",
        message: "Please provide information regarding making contributions",
      },
      {
        type: "input",
        name: "testInstructions",
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
      console.log(answers);
      let content = mdGenerator.generateMarkdown(answers);
      console.log(content);
      writeToFile("test.md", content);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error);
      } else {
        console.log("An unknown error has occurred. Sorry about that!");
      }
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./output/" + fileName, data, (err) => {
    if (err) {
      console.log(err);
      console.log("Something went wrong creating the file.");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  promptProjectInfo();
}

// Function call to initialize app
init();
