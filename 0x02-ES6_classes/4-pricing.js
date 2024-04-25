import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this.__amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this.__amount;
    }

    get currency() {
        return this._currency;
    }

    set amount(newAmount) {
        if (typeof newAmount === 'number') {
            this.__amount = newAmount;
        } else {
            throw TypeError('Amount must be a number');
        }
    }

    set currency(newCurrency) {
        if (newCurrency instanceof Currency) {
            this._currency = newCurrency;
        } else {
            throw TypeError('Currency must be an instance of Currency');
        }
    }

    displayFullPrice() {
        return `${this.__amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}