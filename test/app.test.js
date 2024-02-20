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
    // Tests for the discounts handling V1
    it('9. Adding a discount to the items in the basket', function(done) {
        let b6 = new Basket();
        b6.addItem('Apple', 2, 1, '2023-12-31');
        b6.addItem('Banana', 3, 2, '2023-12-31');
        b6.addDiscount(0.1, 'Apple');
        b6.addDiscount(0.1, 'Banana');
        expect(b6.items).to.deep.equal([{name: 'Apple', quantity: 2, price: 0.9, expiryDate: '2023-12-31'}, {name: 'Banana', quantity: 3, price: 1.8, expiryDate: '2023-12-31'}]);
        done();
    })
    it('10. The item price cannot be negative or zero', function(done) {
        let b7 = new Basket();
        b7.addItem('Apple', 2, 1, '2023-12-31');
        expect(() => b7.addDiscount(1.1)).to.throw('Discount must be between 0 and 1');
        done();
    })
    it('11. The discount cannot be 100% or more', function(done) {
    let b8 = new Basket();
    b8.addItem('Apple', 1, 1, '2023-12-31');
    expect(() => b8.addDiscount(1.1)).to.throw('Discount must be between 0 and 1');
    done();
    })
    // Test for the discounts handling V2
    it('12. Adding an amount discount to only one item in the basket', function(done) {
        let b9 = new Basket();
        b9.addItem('Apple', 2, 1, '2023-12-31');
        b9.addItem('Banana', 3, 2, '2023-12-31');
        b9.addAmountDiscount(0.5, 'Apple');
        expect(b9.items).to.deep.equal([{name: 'Apple', quantity: 2, price: 0.75, expiryDate: '2023-12-31'}, {name: 'Banana', quantity: 3, price: 2, expiryDate: '2023-12-31'}]);
        done();
    })
    it('13. The item price cannot be negative or zero', function(done) {
        let b10 = new Basket();
        b10.addItem('Apple', 2, 1, '2023-12-31');
        expect(() => b10.addAmountDiscount(2, 'Apple')).to.throw('The item price cannot be negative or zero');
        done();
    })
});


