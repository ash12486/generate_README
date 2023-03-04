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
        name: "screenshot",
        message: "Please provide the relative path to the image you want to use as the screenshot."
      },
      {
        type: "input",
        name: "link",
        message: "Please provide a URL where a user can access your deployed application."
      },
      {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
      },
      {
        type: "input",
        name: "require",
        message: 
        "List any project dependencies here.",
      },
      {
        type: "input",
        name: "features",
        message: 
        "List some cool features about this project here.",
      },
      {
        type: "input",
        name: "usage",
        message:
          "State the languages or technologies associated with this project.",
      },
      {
        type: "input",
        name: "creator",
        message: 
        "Write your GitHub username.",
      },
      {
        type: "input",
        name: "email",
        message: 
        "Provide a valid email address.",
      },
      {
        type: "input",
        name: "name",
        message: 
        "Provide your full name",
      },
      {
        type: "input",
        name: "contributors",
        message: 
        "Please list any contributors. (Use GitHub usernames)",
        default: "",
      },
      {
        type: "input",
        name: "test",
        message: 
        "Provide walkthrough of required tests if applicable.",
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
    });
  }
  init();