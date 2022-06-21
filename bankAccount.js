class BankAccount {
  constructor() {
    this.balance = 0
    this.transactions = []
  }

  transact(amount) {
    //to format the date per the specification
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    
    if(this.balance + amount < 0) {
      throw ('Insufficient funds')
    } else {
    const transactionRecord = {
      amount: amount,
      date: today,
      currentBalance : this.balance + amount
    };
    this.transactions.push(transactionRecord)
    this.balance += amount
    }
  }

  printStatement() {
    let row = `date         || credit || debit || balance\n`
      for(var i = 0; i < this.transactions.length; i ++){
        if(this.transactions[i].amount > 0 ){
          row += (this.transactions[i].date + " || " + this.transactions[i].amount + " || " + "      || " + this.transactions[i].currentBalance + "\n");
        } else {
          row += (this.transactions[i].date + " ||      " +  "  || " + this.transactions[i].amount + "|| " +  this.transactions[i].currentBalance + "\n");
      }
      }
      return row;
  }
}

module.exports = BankAccount