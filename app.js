//Main js file to run node
//For further development, add validations on all prompts

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];
const idArray = [];

manager();

function manager() {
    console.log(`Let's build your team`);
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter name of Manager: ",
        },
        {
            type: "input",
            name: "managerID",
            message: "Enter employee ID of manager: "
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter email of manager: "
        },
        {
            type: "input",
            name: "managerOffice",
            message: "Enter office number of manager: "
        }
    ])
        .then(response => {
            const manager = new Manager(
                response.managerName,
                response.managerID,
                response.managerEmail,
                response.managerOffice
            );
            team.push(manager);
            idArray.push(response.managerID);
            createTeam();
        });
}

function createTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "member",
            message: "Select a team member to add",
            choices: [
                "Engineer",
                "Intern",
                "I'm all done"
            ]
        }
    ]).then(function (response) {
        if (response.member === "Engineer") {
            engineer();
        } else if (response.member === "Intern") {
            intern();
        } else {
            outputTeam()
        };
    });
};

function engineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter name of engineer: ",
        },
        {
            type: "input",
            name: "engineerID",
            message: "Enter employee ID of engineer: "
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter email of engineer: "
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Enter GitHub username for engineer: "
        }
    ]).then(function (response) {
        const engineer = new Engineer(
            response.engineerName,
            response.engineerID,
            response.engineerEmail,
            response.engineerGithub);
        team.push(engineer);
        idArray.push(response.engineerID);
        createTeam();
    });
};

function intern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter name of intern: ",
        },
        {
            type: "input",
            name: "internID",
            message: "Enter employee ID of intern: "
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter email of intern: "
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter school for intern: "
        }
    ]).then(function (response) {
        const intern = new Intern(
            response.internName,
            response.internID,
            response.internEmail,
            response.internSchool);
        team.push(intern);
        idArray.push(response.internID);
        createTeam();
    });
};

function outputTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team), "utf-8");
}
