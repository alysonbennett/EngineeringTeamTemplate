const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];
const idArray = [];

function finishTeam() {

function manager() {
    console.log(`Let's build your team`);
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter name of Manager: ",
            // validate
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
        const manager = new Manager (
            response.managerName,
            response.managerID,
            response.managerEmail,
            response.managerNumber
        );
            team.push(manager);
            idArray.push(answers.managerID);
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
    ]).then(function(response) {
        if (response.member === "Engineer"){
            engineer();            
        } else if (response.member === "Intern"){
            intern();
        } else (finishTeam);
    });
};

function engineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter name of engineer: ",
            // validate
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
    ]).then(function(response) {
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
            // validate
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
    ]).then(function(response) {
        const intern = new Intern(
            response.internName,
            response.internID,
            response.interEmail,
            response.internSchool);
            team.push(intern);
            idArray.push(internID);
            createTeam();
    });
};


//         {
//             type: "input",
//             name: "nameEngineer",
//             message: "Enter name of engineer: "
//         },
//         {
//             type: "input",
//             name: "idEngineer",
//             message: "Enter ID of engineer: "
//         },
//         {
//             type: "input",
//             name: "emailEngineer1",
//             message: "Enter email of engineer number 1: "
//         },
//         {
//             type: "input",
//             name: "githubEngineer1",
//             message: "Enter GitHub Username of engineer number 1: "
//         },
        
  
//         {
//             type: "input",
//             name: "nameIntern",
//             message: "Enter name of Intern: "
//         },
//         {
//             type: "input",
//             name: "idIntern",
//             message: "Enter ID of Intern: "
//         },
//         {
//             type: "input",
//             name: "emailIntern",
//             message: "Enter email of Intern:"
//         },
//     ]);
//   }


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
