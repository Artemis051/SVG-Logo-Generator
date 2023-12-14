const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/prompts.js'); 
const { Circle, Square, Polygon } = require('/Users/artemis/SVG-Logo/lib/shapes.js');


const init = () => {
  inquirer.prompt(questions)
    .then((data) => {
      console.log("Creating SVG Logo...");

      console.log('Shape selected:', data.shape);
      switch (data.shape.toLowerCase()) {
        case 'square':
            console.log('Creating square...');
            const square = new Square(data.shapeColor, data.textColor, data.strokeWidth, data.text, data.textColor, data.width, data.height);
            fs.writeFile("examples/square.svg", square.renderSquare(), (err) => handleFileCreation(err, 'Square'));
            break;

        case 'circle':
            console.log('Creating circle...');
            const circle = new Circle(data.shapeColor, data.textColor, data.strokeWidth, data.text, data.textColor, data.radius);
            fs.writeFile("examples/circle.svg", circle.renderCircle(), (err) => handleFileCreation(err, 'Circle'));
            break;

        case 'triangle':
            console.log('Creating triangle...');
            const triangle = new Polygon(data.shapeColor, data.textColor, data.strokeWidth, data.text, data.textColor);
            fs.writeFile("examples/triangle.svg", triangle.renderPolygon(), (err) => handleFileCreation(err, 'Triangle'));
            break;

        default:
          console.error('Invalid shape');
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};


function handleFileCreation(err, shapeName) {
  if (err) {
    console.error(err);
  } else {
    console.log(`Created ${shapeName} logo`);
  }
}

init();