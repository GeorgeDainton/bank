const BankAccount = require('./bankAccount')

describe('Bank Account', () => {

  // beforeEach(() => {
  //   var today = new Date();
  //   var dd = String(today.getDate()).padStart(2, '0');
  //   var mm = String(today.getMonth() + 1).padStart(2, '0');
  //   var yyyy = today.getFullYear();
  //   today = dd + '/' + mm + '/' + yyyy;
  // })

  it('Adds deposit amounts to the balance' , () => {
    const bankAccount = new BankAccount;
    bankAccount.transact(500);
    
    expect(bankAccount.balance).toEqual(500);
  });

  it('Adds record of deposit with a date and amount to transactions array', () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    const bankAccount = new BankAccount;
    const mockDate = today
    bankAccount.transact(1000);
    
    expect(bankAccount.transactions).toEqual([ { date: mockDate, amount: 1000, currentBalance: 1000 } ])
  });

  it('Subtracts withdrawal amounts from the balance' , () => {
    const bankAccount = new BankAccount;
    bankAccount.transact(5000);
    bankAccount.transact(-500);
    
    expect(bankAccount.balance).toEqual(4500);
  });

  it('Adds record of withdrawal with a date and amount to transactions array', () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    const bankAccount = new BankAccount;
    const mockDate = today;
    bankAccount.transact(1000);
    bankAccount.transact(-100);

    expect(bankAccount.transactions).toEqual([ { date: mockDate, amount: 1000, currentBalance: 1000 }, { date: mockDate, amount: -100, currentBalance: 900 } ])
  });

  it('Prints a statement that shows the balance', () => {
    const bankAccount = new BankAccount;
    bankAccount.transact(100);
    
    expect(bankAccount.printStatement()).toContain['balance 100']

  });

  it('Prints a statement that shows all deposits and their associated dates', () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    
    const bankAccount = new BankAccount;
    const mockDate = today;
    bankAccount.transact(400);
    
    expect(bankAccount.printStatement()).toContain[`credit ${mockDate} 400`]

});

});