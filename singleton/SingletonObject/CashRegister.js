let cash = 0;

const CashRegister = {
    credit(amount) {
        cash = cash + amount;
    },

    debit(amount) {
        if(amount <= cash) {
            cash = cash - amount;
            return true;
        }
        return false;
    },

    total() {
        return cash;
    }
}

module.exports = CashRegister;