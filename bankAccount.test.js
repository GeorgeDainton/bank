const BankAccount = require('./bankAccount')

describe('Bank Account', () => {


  it('Adds deposit amounts to the balance' , () => {
    const bankAccount = new BankAccount;
    bankAccount.deposit(500);
    
    expect(bankAccount.balance).toEqual(500);
  });

  it('Adds record of deposit with a date and amount to deposits array', () => {
    
    const bankAccount = new BankAccount;
    const mockDate = new Date()
    bankAccount.deposit(1000);
    
    expect(bankAccount.deposits).toEqual([ { date: mockDate, amount: 1000 } ])
  });
});