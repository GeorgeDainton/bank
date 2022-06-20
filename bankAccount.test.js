const BankAccount = require('./bankAccount')

describe('Bank Account', () => {


  it('Adds deposit amounts to the balance' , () => {
    const bankAccount = new BankAccount;
    bankAccount.deposit(500);
    
    expect(bankAccount.balance).toEqual(500);
  });

  it('Adds record of deposit with a date and amount to deposits array', () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    const bankAccount = new BankAccount;
    const mockDate = today
    bankAccount.deposit(1000);
    
    expect(bankAccount.deposits).toEqual([ { date: mockDate, amount: 1000 } ])
  });

  it('Subtracts withdrawal amounts from the balance' , () => {
    const bankAccount = new BankAccount;
    bankAccount.deposit(5000);
    bankAccount.withdraw(500);
    
    expect(bankAccount.balance).toEqual(4500);
  });

  it('Adds record of withdrawal with a date and amount to withdrawals array', () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    const bankAccount = new BankAccount;
    const mockDate = today
    bankAccount.deposit(1000);
    bankAccount.withdraw(100);

    expect(bankAccount.withdrawals).toEqual([ { date: mockDate, amount: 100 } ])
  });

  it('Prints a statement that shows the balance', () => {
    const bankAccount = new BankAccount;
    bankAccount.deposit(100);
    
    expect(bankAccount.printStatement()).toContain('balance 100')

  })
});