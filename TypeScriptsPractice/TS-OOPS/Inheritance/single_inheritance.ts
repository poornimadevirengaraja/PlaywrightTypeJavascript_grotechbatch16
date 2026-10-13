// single inheritace
// when one class squaire the property of another class, than it is called single inheritance.
// class A -> class B
class BankAccount {
    Balance:number
    readonly AccountNumber:number
    constructor(Balance: number, AccountNumber: number) {
        this.AccountNumber = AccountNumber
        this.Balance = Balance
    }

    GetCurrentBalance() {
        console.log("current balance :", this.Balance)
    }
    
}

class SavingAccount extends BankAccount {
    constructor(Balance: number, AccountNumber: number) {
        super(Balance, AccountNumber)

    }

    Amountdeposit(amount: number ){
        this.Balance += amount
    }

    withdrawal(amount: number ){
        this.Balance -= amount
    }
}



var Obj3 = new SavingAccount(2000, 78878978998)
Obj3.GetCurrentBalance()

Obj3.Amountdeposit(10000)
Obj3.GetCurrentBalance() // current balance : 2000
Obj3.withdrawal(5000) // current balance : 12000
Obj3.GetCurrentBalance() // current balance : 7000