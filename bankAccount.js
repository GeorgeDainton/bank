class BankAccount {
  constructor() {
    this.balance = 0
    this.transactions = []
  }

  transact(amount) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    
    const transactionRecord = {
      amount: amount,
      date: today,
      currentBalance : this.balance + amount
    };
    
    this.transactions.push(transactionRecord)
    this.balance += amount
  }

  printStatement() {
    
    return this.transactions.map(transaction =>
      (`credit ${transaction.date} ${transaction.amount} balance ${transaction.currentBalance}`)
      )
}
}
 
      




module.exports = BankAccount