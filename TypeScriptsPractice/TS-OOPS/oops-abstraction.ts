// Abstraction is basic provide the overview information
// actual implimentation has to be done in child class



abstract class BankAccount {
    balance: number;
    constructor(balance: number) {
        this.balance = balance
    }

    deposit(amount: number) {
        this.balance += amount
        console.log("Amount credited :", amount)
    }

    // abstract method
    abstract withdrawl(amount: number) : void
}

class SavingAccount extends BankAccount {
    constructor(balance: number) {
        super(balance)

    }

    withdrawl(amount: number): void {
        this.balance -= amount
        console.log("Amount debited :", amount)
    }

    showBalance() {
        console.log("Current Balance :", this.balance)
    }
}


const obj1 = new SavingAccount(5000)
obj1.deposit(10000)
obj1.showBalance()
obj1.withdrawl(4000)
obj1.showBalance()

// Amount credited : 10000
// Current Balance : 15000
// Amount debited : 4000
// Current Balance : 11000
