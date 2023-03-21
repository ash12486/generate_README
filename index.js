import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import generateMarkdown from "./utils/generateMarkdown.js";

//Creating an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please name your Project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project.",
  },
  {
    type: "input",
    name: "link",
    message:
      "Please provide a URL where a user can access your deployed application.",
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license was used?',
    choices: [
      'GNU AGPLv3',
      'GNU GPLv3',
      'GNU LGPLv3',
      'Mozilla Public License 2.0',
      'Apache License 2.0',
      'Boost Software License 1.0',
      'The Unlicense',
      'None'
    ],
    default: 'None'
  },
  {
    type: "input",
    name: "installation",
    message: "List any project dependencies here.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "How do you use this application?",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
  {
    type: "input",
    name: "name",
    message: "Provide your full name",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
];

// Writing README.md File
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  })
  .catch((error) => {
    console.error(error);
  });
}

init();
