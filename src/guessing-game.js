class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.mid = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.mid = Math.round((min + max) / 2);
    }

    guess() {
        return this.mid;
    }

    lower() {
        this.max = this.mid;
        this.mid = Math.round((this.min + this.max) / 2);
    }

    greater() {
        this.min = this.mid;
        this.mid = Math.round((this.min + this.max) / 2);
    }
}


module.exports = GuessingGame;
