class BankAccount {
  constructor() {
    this.balance = 0
    this.deposits = []
    this.withdrawals = []
  }

  deposit(amount) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    
    const depositRecord = {
      amount: amount,
      date: today,
      currentBalance : this.balance + amount
    };
    
    this.deposits.push(depositRecord)
    this.balance += amount
  }

  withdraw(amount) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
   
    const withdrawalRecord = {
      amount: amount,
      date: today,
      currentBalance : this.balance - amount 
      
    };
    
    this.withdrawals.push(withdrawalRecord)
    this.balance -= amount
  }

  printStatement() {
    
    return this.deposits.map(deposit =>
      (`credit ${deposit.date} ${deposit.amount} balance ${deposit.currentBalance}`)
      )
}
}
      




module.exports = BankAccount