const computer = require('./computer');

class laptop extends computer {
    constructor(ram, hdd, screenSize, color, price, battery) {
        super(ram, hdd, screenSize, color, price);
        this.battery = battery;
    }
}

module.exports = laptop;