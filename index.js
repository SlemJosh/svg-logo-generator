// inquirer for adding prompts to the user to gather needed information
// VERY IMPORTANT npm i inquirer@8.2.4 Needs to be this version or it doesn't initiate.
const inquirer = require('inquirer'); // Inquirer for command-line prompts
const fs = require('fs'); // File system module for file operations
const { Circle, Square, Triangle } = require("./lib/shapes"); // Importing shapes module

// Function to generate SVG content based on user input
function generateSvg(data) {
  let svgString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

  // Define the SVG for the selected shape based on user input
  let shapeSVG = "";
  if (data.shape === "Triangle") {
    shapeSVG = `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>`;
  } else if (data.shape === "Square") {
    shapeSVG = `<rect x="50" y="50" width="200" height="200" fill="${data.shapeColor}"/>`;
  } else if (data.shape === "Circle") {
    shapeSVG = `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}"/>`;
  }

  // Combine SVG elements: shape and text
  svgString += shapeSVG;
  svgString += `<text x="150" y="120" text-anchor="middle" font-size="40" fill="${data.textColor}">${data.text}</text>`;
  svgString += "</svg>";

  return svgString; // Return the complete SVG content
}

// Function to prompt user for logo creation
function logoQuestions() {
  inquirer
    .prompt([
      // Let the user name the file
      {
        type: "input",
        message: "Enter a filename for your logo + .svg at the end. (make sure to end it with the proper extension. ex.  peteslogo = peteslogo.svg)",
        name: "fileName",
      },
      
      // Text
      {
        type: "input",
        message: "What text do you want in your logo? (Enter up to three characters)",
        name: "text",
        // Need to validate if it has 3 or more characters.
        validate: function(input) {
          if (input.length > 3) {
            return "Please enter up to three characters only.";
          }
          return true;
        }
      },

      // Text Color
      {
        type: "input",
        message: "What color would you like your text to be? (Enter color OR hexadecimal value)",
        name: "textColor",
      },

      // Shape
      {
        type: "list",
        message: "What shape would you like to use for your logo?",
        choices: ["Circle", "Square", "Triangle"],
        name: "shape",
      },

      // Shape Color
      {
        type: "input",
        message: "What color would you like your shape to be? (Enter color OR hexadecimal value)",
        name: "shapeColor",
      },
    ])
    .then((data) => {
      // Display user inputs
      console.log("User Inputs:");
      console.log("Text:", data.text);
      console.log("Text Color:", data.textColor);
      console.log("Selected Shape:", data.shape);
      console.log("Shape Color:", data.shapeColor);

      // Generate SVG content based on user input
      let svgContent = generateSvg(data);

      writeToFile("logo.svg", svgContent); // Write the SVG content to a file named 'logo.svg'
    })
    .catch((error) => {
      console.log("Error:", error); // Log errors, if any
    });
}

// Function to write SVG content to a file
function writeToFile(fileName, svgContent) {
  const svgString = svgContent; // Ensure svgContent is a string

// Custom folder name for created logo
const folderName = 'logo';

// path for the file
const filePath = `${folderName}/${fileName}`;

  // Write SVG content to the specified file
  fs.writeFile(filePath, svgString, (err) => {
    if (err) {
      console.error("Error writing file:", err); // Log any errors during file writing
    } else {
      console.log(`Generated ${fileName}`); // Log successful file generation
    }
  });
}

logoQuestions(); // Start logo creation process