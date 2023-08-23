class Shape {
  constructor(letter1, letter2, letter3, textColor, shapeColor) {
    this.letter1 = letter1;
    this.letter2 = letter2;
    this.letter3 = letter3;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  render() {
    console.log("I am a shape");
  }
}

class Triangle extends Shape {
  constructor(letter1, letter2, letter3, textColor, shapeColor) {
    super(letter1, letter2, letter3, textColor, shapeColor);

    this.render = function () {
      return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,10 290,290 10,290" fill='${shapeColor}' />
            <text x="105" y="150" font-size="40" fill='${textColor}'>${letter1.toUpperCase()}</text>
            <text x="143" y="150" font-size="40" fill='${textColor}'>${letter2.toUpperCase()}</text>
            <text x="174" y="150" font-size="40" fill='${textColor}'>${letter3.toUpperCase()}</text>
            </svg>
            `;
    };
  }
}

class Square extends Shape {
  constructor(letter1, letter2, letter3, textColor, shapeColor) {
    super(letter1, letter2, letter3, textColor, shapeColor);

    this.render = function () {
      return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="200" height="200" fill='${
              this.shapeColor
            }' />
            <text x="25" y="130" font-size="70" fill='${
              this.textColor
            }'>${this.letter1.toUpperCase()}</text>
            <text x="90" y="130" font-size="70" fill='${
              this.textColor
            }'>${this.letter2.toUpperCase()}</text>
            <text x="145" y="130" font-size="70" fill='${
              this.textColor
            }'>${this.letter3.toUpperCase()}</text>
            </svg>
            `;
    };
  }
}

class Circle extends Shape {
  constructor(letter1, letter2, letter3, textColor, shapeColor) {
    super(letter1, letter2, letter3, textColor, shapeColor);

    this.render = function () {
      return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="120" cy="110" r="90" fill='${shapeColor}' />
            <text x="50" y="130" font-size="65" fill='${textColor}'>${letter1.toUpperCase()}</text>
            <text x="105" y="130" font-size="65" fill='${textColor}'>${letter2.toUpperCase()}</text>
            <text x="155" y="130" font-size="65" fill='${textColor}'>${letter3.toUpperCase()}</text>
            </svg>
            `;
    };
  }
}

module.exports = { Triangle, Square, Circle };
