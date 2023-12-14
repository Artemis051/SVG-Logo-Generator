const fs = require('fs');
const inquirer = require('inquirer');
const prompts = require('./lib/prompts.js');
const { Circle, Square, Polygon } = require('/Users/artemis/SVG-Logo/lib/shapes.js');

const init = () => {
  inquirer.prompt(prompts)
    .then((data) => {
      console.log("Creating SVG Logo...");

      console.log('Shape selected:', data.shape);

      const shape = createShape(data);
      if (shape) {
        const filePath = `examples/${data.shape.toLowerCase()}.svg`;
        writeFile(filePath, shape.render(), data.shape);
      } else {
        console.error('Invalid shape');
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

function createShape(data) {
  switch (data.shape.toLowerCase()) {
    case 'square':
      return new Square(data.shapeColor, data.textColor, data.strokeWidth, data.text, data.textColor, data.width, data.height);

    case 'circle':
      return new Circle(data.shapeColor, data.textColor, data.strokeWidth, data.text, data.textColor, data.radius);

    case 'triangle':
      return new Polygon(data.shapeColor, data.textColor, data.strokeWidth, data.text, data.textColor);

    default:
      return null;
  }
}

function writeFile(filePath, content, shapeName) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Created ${shapeName} logo at ${filePath}`);
    }
  });
}

init();
