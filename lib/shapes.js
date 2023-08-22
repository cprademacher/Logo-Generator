class Shape {
    constructor(letter1, letter2, letter3, textColor, shapeColor) {
        this.letter1 = letter1;
        this.letter2 = letter2;
        this.letter3 = letter3;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        
        createShape = function() {
            return `
            <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,10 290,290 10,290" fill=${this.shapeColor} />
            <text x="70" y="220" font-size="70" fill=${this.textColor}>${this.letter1}</text>
            <text x="130" y="220" font-size="70" fill=${this.textColor}>${this.letter2}</text>
            <text x="180" y="220" font-size="70" fill=${this.textColor}>${this.letter3}</text>
            </svg>
            `
        }
    }
};

class Triangle extends Shape {
    constructor(letter1, letter2, letter3, textColor, shapeColor) {
        super(letter1, letter2, letter3, textColor, shapeColor);
        
        this.createShape = function() {
            return `
            <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,10 290,290 10,290" fill=${this.shapeColor} />
            <text x="70" y="220" font-size="70" fill=${this.textColor}>${this.letter1}</text>
            <text x="130" y="220" font-size="70" fill=${this.textColor}>${this.letter2}</text>
            <text x="180" y="220" font-size="70" fill=${this.textColor}>${this.letter3}</text>
            </svg>
            `
        }
    }
};

class Square extends Shape{
    constructor(letter1, letter2, letter3, textColor, shapeColor) {
        super(letter1, letter2, letter3, textColor, shapeColor);

        this.createShape = function() {
            return `
            <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="280" height="280" fill=${shapeColor} />
            <text x="70" y="220" font-size="70" fill=${this.textColor}>${this.letter1}</text>
            <text x="130" y="220" font-size="70" fill=${this.textColor}>${this.letter2}</text>
            <text x="180" y="220" font-size="70" fill=${this.textColor}>${this.letter3}</text>
            </svg>
            `
        }
    }
};

class Circle extends Shape {
    constructor(letter1, letter2, letter3, textColor, shapeColor) {
        super(letter1, letter2, letter3, textColor, shapeColor);

        this.createShape = function() {
            return `
            <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="150" r="130" fill=${this.shapeColor} />
            <text x="70" y="220" font-size="70" fill=${this.textColor}>${this.letter1}</text>
            <text x="130" y="220" font-size="70" fill=${this.textColor}>${this.letter2}</text>
            <text x="180" y="220" font-size="70" fill=${this.textColor}>${this.letter3}</text>
            </svg>
            `
        }
    }
};

