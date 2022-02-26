// Include packages needed for application
const fs = require("fs");
const inquirer = require("inquirer");
const mdGenerator = require("./utils/generateMarkdown.js");

// Inquirer question prompts
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
      // After receving user input, generate markdown
      // and write markdown to a "README.md" file
      let content = mdGenerator.generateMarkdown(answers);
      console.log(content);
      writeToFile("README.md", content);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // prompt error, log to screen
        console.log(error);
      } else {
        // something unknown happens, in which case log an unknown error occurred
        console.log("An unknown error has occurred. Sorry about that!");
      }
    });
};

// Writes markdown content to file in the /output/ folder.
function writeToFile(fileName, data) {
  fs.writeFile("./output/" + fileName, data, (err) => {
    if (err) {
      // If something goes wrong, log error to screen and let user know
      console.log(err);
      console.log("Something went wrong creating the file.");
    }
  });
}

// Begin prompting user on initialization
function init() {
  promptProjectInfo();
}

// Function call to initialize app
init();
