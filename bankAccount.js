class BankAccount {
  constructor() {
    this.balance = 0
    this.deposits = []
  }

  deposit(amount) {
    
    const depositRecord = {
      date: new Date(),
      amount: amount
    };
    
    this.deposits.push(depositRecord)
    this.balance += amount
  }
}



module.exports = BankAccount