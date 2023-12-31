# SVG Logo Generator
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This project was all about using user input to create a simple logo. We take 3 characters and ask for a color and then we also ask for a shape and a color.  Then we just put them together and BAM! Logo!  This project also allowed me to write some tests and check to see if we can break a program while we are building it.  Validation was again helpful in making sure the user doesn't encounter errors themselves. Our project used several npms along with node.  We used inquirer for the prompts, fs to write files, and we used jest to test our creation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

You will need node.  Once you have node, you will need to install the dependenant npms.  Start with Inquirer.  In your terminal, npm i inquirer@8.2.4.   Then do FS with a simple npm i fs.  Lastly we will need to have jest for testing purposes.  npm install --save-dev jest

## Usage
![SVG Logo Generator Example](/assets/svgterminalexample.png)
![SVG Logo Generator Example](/assets/svgstringexample.png)
![SVG Logo Generator Example](/assets/svglogoexample.png)

---

[Video link of demonstration](https://drive.google.com/file/d/1oS1AR3Rgh6VQBwm1D7TAY0CWmJ1_-Zpj/view)

---


When you have all the required npms and node installed.  Simple navigate to your terminal and make sure you are at the location with the index.js file.  Then type node index.js to begin the process.

## License

This project is licensed under the MIT license. Click [here]([MIT License](https://opensource.org/licenses/MIT)) for more details.

## Contributing

Various sources were used for finding some default string values for shapes.  Such as  https://www.w3.org/TR/SVG/shapes.html.  
We also were provided a test code from the UofU coding bootcamp.
Also in order to validate color, we built a list of the top 100 colors from https://www.quackit.com/css/css_color_codes.cfm.
Also we used a code to validate hex colors.  Provided by https://www.geeksforgeeks.org/how-to-validate-hexadecimal-color-code-using-regular-expression/

## Tests

If you would like to run the tests included.  Assuming you have all the npms including jest installed.  You will simply need to run npm test in your console.

## Questions

If you have any questions, please contact me:

- GitHub: [slemjosh](https://github.com/slemjosh)
- Email: [joshua.slem@gmail.com](mailto:joshua.slem@gmail.com)