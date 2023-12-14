class Shapes {
    constructor(textColor, text, fill, stroke, strokeWidth) {
        this.textColor = textColor;
        this.text = text;
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }
  
    setText() {
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50px" font-weight="600" fill="${this.textColor}">${this.text}</text>`;
    }
  
    render() {
        return '';
    }
  }
  
  class Circle extends Shapes {
    constructor(textColor, text, fill, stroke, strokeWidth, radius) {
        super(textColor, text, fill, stroke, strokeWidth);
        this.radius = radius;
    }
  
    render() {
        return `<svg version="1.1" width="600" height="600" xmlns="http://www.w3.org/2000/svg">
            <circle r="${this.radius}" cx="200" cy="200" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}"/>
            ${super.setText()}
        </svg>`;
    }
  }
  
  class Polygon extends Shapes {
    constructor(textColor, text, fill, stroke, strokeWidth) {
        super(textColor, text, fill, stroke, strokeWidth);
    }
  
    render() {
        return `<svg version="1.1" width="600" height="600" xmlns="http://www.w3.org/2000/svg">
            <polygon points="250,60 100,400 400,400" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" fill="${this.fill}"/>
            ${super.setText()}
        </svg>`;
    }
  }
  
  class Square extends Shapes {
    constructor(textColor, text, fill, stroke, strokeWidth, width, height) {
        super(textColor, text, fill, stroke, strokeWidth);
        this.width = width;
        this.height = height;
    }
  
    render() {
        const xEl = this.width / 2;
        const yEl = this.height / 2;
        return `<svg version="1.1" width="600" height="600" xmlns="http://www.w3.org/2000/svg">
            <rect width="${this.width}" height="${this.height}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}"/>
            ${super.setText()}
            <text x="${xEl}" y="${yEl}" dominant-baseline="middle" text-anchor="middle" font-size="50px" font-weight="600" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
  }
  
  
  module.exports = { Square, Polygon, Circle, Shapes };
  