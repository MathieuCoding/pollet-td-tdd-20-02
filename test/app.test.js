const Cube = require('../src/app').Cube;
const Basket = require('../src/app').Basket;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });

    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });

    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });

});

describe('Testing the Basket Function', function() {
    it('4. Adding an item to the basket', function(done) {
        let b1 = new Basket();
        b1.addItem('Apple', 2, 1, '2023-12-31');
        expect(b1.items).to.have.lengthOf(1);
        done();
    })

    it('5. Removing an item from the basket', function(done) {
        let b2 = new Basket();
        b2.addItem('Apple', 2, 1, '2023-12-31');
        b2.addItem('Banana', 3, 2, '2023-12-31');
        b2.removeItem('Apple', 2);
        expect(b2.items).to.have.lengthOf(1);
        done();
    })

    it('6. Getting the total price of the items in the basket', function(done) {
        let b3 = new Basket();
        b3.addItem('Apple', 2, 1, '2023-12-31');
        b3.addItem('Banana', 3, 2, '2023-12-31');
        expect(b3.getTotalPrice()).to.equal(8);
        done();
    })

    it('7. Emptying the basket', function(done) {
        let b4 = new Basket();
        b4.addItem('Apple', 2, 1, '2023-12-31');
        b4.addItem('Banana', 3, 2, '2023-12-31');
        b4.emptyBasket();
        expect(b4.items).to.have.lengthOf(0);
        done();
    })

    it('8. Adding an item to the basket', function(done) {
        let b5 = new Basket();
        b5.addItem('Apple', 2, 1, '2023-12-31');
        expect(b5.items).to.deep.equal([{name: 'Apple', quantity: 2, price: 1, expiryDate: '2023-12-31'}]);
        done();
    })
    it('9. Adding a discount to the items in the basket', function(done) {
        let b6 = new Basket();
        b6.addItem('Apple', 2, 1, '2023-12-31');
        b6.addItem('Banana', 3, 2, '2023-12-31');
        b6.addDiscount(0.1);
        expect(b6.items).to.deep.equal([{name: 'Apple', quantity: 2, price: 0.9, expiryDate: '2023-12-31'}, {name: 'Banana', quantity: 3, price: 1.8, expiryDate: '2023-12-31'}]);
        done();
    })
    it('10. The item price cannot be negative or zero', function(done) {
        let b7 = new Basket();
        b7.addItem('Apple', 2, 1, '2023-12-31');
        b7.addDiscount(1);
        expect(b7.items).to.deep.equal([{name: 'Apple', quantity: 2, price: 0, expiryDate: '2023-12-31'}]);
        done();
    })
    it('11. The discount cannot be 100% or more', function(done) {
    let b8 = new Basket();
    b8.addItem('Apple', 1, 1, '2023-12-31');
    expect(() => b8.addDiscount(1.1)).to.throw('Discount must be between 0 and 1');
    done();
})
});


