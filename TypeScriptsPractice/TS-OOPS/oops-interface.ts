// interface contains method and variable name, but it does not impliment.
// implimentation of method and variable has to done in any of the child class.
// interface is purely abstract class, there we will declare variable or method 
// not impliment it.



interface BankAccount {
    balance: number,
    deposit(amount: number): void
    withdrawl(amount: number) : void
}

class SavingAccount implements BankAccount {
    balance: number
    constructor(balance: number) {
        this.balance = balance

    }

    deposit(amount: number): void {
        this.balance += amount
    }

    withdrawl(amount: number): void {
        this.balance -= amount
    }
}


const obj1 = new SavingAccount(5000)
obj1.deposit(10000)
console.log("Current Balance :", obj1.balance)
// Current Balance : 15000

obj1.withdrawl(4000)
console.log("New Balance :", obj1.balance)
// New Balance : 11000
