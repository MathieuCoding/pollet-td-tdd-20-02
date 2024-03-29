class Cube {
    constructor(length) {
        this.length = length;
    }

    getSideLength () {
        return this.length;
    }

    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }

    getVolume () {
        return Math.pow(this.length,3);
    }
}


class Basket {
    constructor() {
        this.items = [];
    }

    addItem(name, quantity, price, expiryDate) {
        const existingItemIndex = this.items.findIndex(item => item.name === name);

        if (existingItemIndex !== -1) {
            this.items[existingItemIndex].quantity += quantity;
        } else {
            this.items.push({ name, quantity, price, expiryDate });
        }
    }

    removeItem(name, quantity) {
        const existingItemIndex = this.items.findIndex(item => item.name === name);

        if (existingItemIndex !== -1) {
            this.items[existingItemIndex].quantity -= quantity;

            if (this.items[existingItemIndex].quantity <= 0) {
                this.items.splice(existingItemIndex, 1);
            }
        }
    }

    // getTotalPrice() {
    //     return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    // }
    getTotalPrice() {
        this.items.forEach(item => {
            let totalPrice = item.price * item.quantity;
            console.log(`${item.name}: ${totalPrice}`);
        });

        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }


    emptyBasket() {
        this.items = [];
    }

    addDiscount(discount, itemName) {
        if (discount < 0 || discount > 1) {
            throw new Error('Discount must be between 0 and 1');
        }
        this.items = this.items.map(item => {
            if (item.name === itemName) {
                item.price = item.price - (item.price * discount);
                item.price = parseFloat(item.price.toFixed(1));
            }
            return item;
        });
    }

    addAmountDiscount(discount, itemName) {
        if (discount <= 0) {
            throw new Error('Discount must be greater than 0');
        }
        this.items = this.items.map(item => {
            if (item.name === itemName) {

                let totalPrice = item.price * item.quantity;
                totalPrice -= discount;
                item.price = totalPrice / item.quantity;
                if (item.price <= 0) {
                    throw new Error('The item price cannot be negative or zero');
                }
                item.price = parseFloat(item.price.toFixed(2));
            }
            return item;
        });
    }

    viewStock() {
        console.log('The stock:');
        this.items.forEach(item => {
            console.log(`${item.name}: ${item.quantity} units, ${item.price}€ each`);
        });
    }


}

module.exports = {
    Cube:Cube,
    Basket: Basket
}

