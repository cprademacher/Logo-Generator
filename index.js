// External Packages
const fs = require("fs");
const inquirer = require("inquirer");

// Internal Packages
const { Triangle, Square, Circle } = require("./lib/shapes");


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


const generateSVG = (
  letter1,
  letter2,
  letter3,
  textColor,
  shapeColor,
  shape
) => {
  if (shape === "Triangle") {
    const triangle = new Triangle(letter1, letter2, letter3, textColor, shapeColor);
    return triangle.render();
  } else if (shape === "Square") {
    const square = new Square(letter1, letter2, letter3, textColor, shapeColor);
    return square.render();
  } else if (shape === "Circle") {
    const circle = new Circle(letter1, letter2, letter3, textColor, shapeColor);
    return circle.render();
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

  console.log("Generated logo.svg");
})();

