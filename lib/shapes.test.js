const Triangle = require('./shapes');



describe('Triangle', () => {
    describe('blue', () => {
        it('Should set the color of the triangle to blue', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
});



