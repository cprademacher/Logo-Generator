// External Packages
const fs = require("fs");
const inquirer = require("inquirer");

// Internal Packages
const { Shape, Triangle, Square, Circle } = require("./lib/shapes");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter the first of your three letters: ",
      name: "letter1",
      validate: function (answer) {
        if (answer.length === 1 && answer.match(/[A-Za-z]/)) {
          return true;
        } else {
          return console.log(" Answer bust be only 1 letter.");
        }
      },
    },
    {
      type: "input",
      message: "Enter the second of your three letters: ",
      name: "letter2",
      validate: function (answer) {
        if (answer.length === 1 && answer.match(/[A-Za-z]/)) {
          return true;
        } else {
          return console.log(" Answer bust be only 1 letter.");
        }
      },
    },
    {
      type: "input",
      message: "Enter the third of your three letters: ",
      name: "letter3",
      validate: function (answer) {
        if (answer.length === 1 && answer.match(/[A-Za-z]/)) {
          return true;
        } else {
          return console.log(" Answer bust be only 1 letter.");
        }
      },
    },
    {
      type: "input",
      message: "What color do you want your text to be? ",
      name: "textColor",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log(" Must provide an answer.");
        } else {
          return true;
        }
      },
    },
    {
      type: "list",
      message: "Which shape do you want? ",
      choices: ["Circle", "Square", "Triangle"],
      name: "shape",
    },
    {
      type: "input",
      message: "What color do you want your shape to be? ",
      name: "shapeColor",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log(" Must provide an answer.");
        } else {
          return true;
        }
      },
    },
  ]);
};

// Need to figure out how to make svgContent = the selected shape and then
// probably return the shape.createShape();

const generateSVG = (
  letter1,
  letter2,
  letter3,
  textColor,
  shapeColor,
  shape
) => {
  if (shape === "Triangle") {
    return `
      <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,10 290,290 10,290" fill='${shapeColor}' />
      <text x="70" y="220" font-size="80" fill='${textColor}'>${letter1.toUpperCase()}</text>
      <text x="130" y="220" font-size="80" fill='${textColor}'>${letter2.toUpperCase()}</text>
      <text x="180" y="220" font-size="80" fill='${textColor}'>${letter3.toUpperCase()}</text>
      </svg>
      `;
  } else if (shape === "Square") {
    return `
      <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="280" height="280" fill='${shapeColor}' />
      <text x="50" y="180" font-size="90" fill='${textColor}'>${letter1.toUpperCase()}</text>
      <text x="125" y="180" font-size="90" fill='${textColor}'>${letter2.toUpperCase()}</text>
      <text x="190" y="180" font-size="90" fill='${textColor}'>${letter3.toUpperCase()}</text>
      </svg>
      `;
  } else if (shape === "Circle") {
    return `
      <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="130" fill='${shapeColor}' />
      <text x="50" y="180" font-size="90" fill='${textColor}'>${letter1.toUpperCase()}</text>
      <text x="130" y="180" font-size="90" fill='${textColor}'>${letter2.toUpperCase()}</text>
      <text x="195" y="180" font-size="90" fill='${textColor}'>${letter3.toUpperCase()}</text>
      </svg>
      `;
  }
};

(async () => {
  const answers = await promptUser();
  const svg = generateSVG(
    answers.letter1,
    answers.letter2,
    answers.letter3,
    answers.textColor,
    answers.shapeColor,
    answers.shape
  );

  fs.writeFileSync("logo.svg", svg, "utf-8");

  console.log("SVG file created successfully.");
})();

//   Also still need to set up tests with jest.
