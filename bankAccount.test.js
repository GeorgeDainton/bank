const BankAccount = require('./bankAccount')

describe('Bank Account', () => {
  it('Adds deposits to the balance' , () => {
    const bankAccount = new BankAccount;
    bankAccount.deposit(500);
    expect(bankAccount.balance).toEqual(500);
  });
});