const { Triangle, Square, Circle } = require('./shapes');



describe('Triangle', () => {
    describe('blue', () => {
        it('Should set the color of the triangle to blue', () => {
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
});

describe('Square', () => {
    describe('blue', () => {
        it('Should set the color of the square to blue', () => {
            const square = new Square();
            square.setColor("blue");
            expect(square.render()).toEqual('<rect x="10" y="10" width="200" height="200" fill="blue" />');
        })
    })
});

describe('Circle', () => {
    describe('blue', () => {
        it('Should set the color of the circle to blue', () => {
            const circle = new Square();
            circle.setColor("blue");
            expect(circle.render()).toEqual('<circle cx="120" cy="110" r="90" fill="blue" />');
        })
    })
});


