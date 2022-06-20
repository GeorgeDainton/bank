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
    let row = "||            date || credit || debit || balance ||\n"
      for(var i = 0; i < this.transactions.length; i ++){
        if(this.transactions[i].amount > 0 ){
          row += " || " + this.transactions[i].date + " || " + this.transactions[i].amount + " || " + "   || " + this.transactions[i].currentBalance + " || " + "\n";
        } else {
          row += " || " + this.transactions[i].date + " || " +  "   || " + this.transactions[i].amount + " || " +  this.transactions[i].currentBalance + " || " + "\n";
      }
      }
      return row;
  }
}

    
    
    
    // return this.transactions.map(transaction =>
    //   (`credit ${transaction.date} ${transaction.amount} balance ${transaction.currentBalance}`)
    //   )

      




module.exports = BankAccount