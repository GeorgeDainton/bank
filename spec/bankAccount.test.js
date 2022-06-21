const BankAccount = require('../lib/bankAccount')

describe('Bank Account', () => {
  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()
  today = dd + '/' + mm + '/' + yyyy
  const mockDate = today

  it('Adds deposit amounts to the balance', () => {
    const bankAccount = new BankAccount()
    bankAccount.transact(500)

    expect(bankAccount.balance).toEqual(500)
  })

  it('Adds record of deposit with a date and amount to transactions array', () => {
    const bankAccount = new BankAccount()
    bankAccount.transact(1000)

    expect(bankAccount.transactions).toEqual([{ date: mockDate, amount: 1000, currentBalance: 1000 }])
  })

  it('Subtracts withdrawal amounts from the balance', () => {
    const bankAccount = new BankAccount()
    bankAccount.transact(5000)
    bankAccount.transact(-500)

    expect(bankAccount.balance).toEqual(4500)
  })

  it('Adds record of withdrawal with a date and amount to transactions array', () => {
    const bankAccount = new BankAccount()
    bankAccount.transact(1000)
    bankAccount.transact(-100)

    expect(bankAccount.transactions).toEqual([{ date: mockDate, amount: 1000, currentBalance: 1000 }, { date: mockDate, amount: -100, currentBalance: 900 }])
  })

  it('Prints a statement that shows the balance', () => {
    const bankAccount = new BankAccount()
    bankAccount.transact(100)

    expect(bankAccount.printStatement()).toContain['balance 100']
  })

  it('Prints a statement that shows deposit amounts', () => {
    const bankAccount = new BankAccount()
    bankAccount.transact(400)

    expect(bankAccount.printStatement()).toContain(`400`)
  })

  it('Prints a statement that shows withdrawal amounts', () => {
    const bankAccount = new BankAccount()
    bankAccount.transact(400)
    bankAccount.transact(-300)

    expect(bankAccount.printStatement()).toContain(`-300`)
  })

  it('Prints a statement that shows transaction dates', () => {
    const bankAccount = new BankAccount()
    bankAccount.transact(400)

    expect(bankAccount.printStatement()).toContain(`${mockDate}`)
  })

  it('Prints a statement with formatting', () => {
    const bankAccount = new BankAccount()
    bankAccount.transact(400)
    bankAccount.transact(-300)

    expect(bankAccount.printStatement()).toContain(`date         || credit || debit || balance\n${mockDate} || 400 ||       || 400\n${mockDate} ||        || -300|| 100\n`)
  })

  it('Does not allow withdrawal if accoutn has insufficient funds', () => {
    const bankAccount = new BankAccount()
    bankAccount.transact(-1)

    expect(bankAccount.balance).toEqual(0)
  })
})
