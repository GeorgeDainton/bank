# Bank Tech Test in Javascript

# To Start

Clone the repository from [https://github.com/GeorgeDainton/bank] and switch into the directory

# Setup our environment to use node latest version
$ nvm use node

# Initialise the NPM project (this will create a file package.json)
$ npm init -y

# Add the jest package to our project
# (this will update package.json and package-lock.json)
$ npm add jest

# Also install jest "globally"
# (this is so we can run the `jest` command)
$ npm install -g jest


# How to Use

This is a bank account app that can be run from the command line using node

1. Start node using the command $ node in the terminal
2. Copy the contents of bankAccount.js from lines 1 to 38 and paste into the node terminal, and press enter. This will laod the code so it's ready to use
3. Create a new instance of the BankAccount class using:
```
const bankAccount = new BankAccount

```
4. All new BankAccount instances have a balance of 0 and and empty transactions array
5. To deposit money, use the .transact method and pass it a positive integer as an argument
```
bankAccount.transact(500000)

```
6. To withdraw money, use the .transact method and pass it a negative integer as an argument
```
bankAccount.transact(-200000)

```
7. Call .printStatement() on the account to see a list of all transaction with dates, amounts, whether they were credit (positive) or debit (negative), and the resulting balance changes. The separating lines between columns are straightest when 6 digits integers are used
```
bankAccount.transact(909486)
bankAccount.transact(-88993)
bankAccount.transact(658677)
bankAccount.transact(794867)
bankAccount.transact(-48677)
bankAccount.printStatement()

Expected output:

'date         || credit || debit || balance\n' +
  '21/06/2022 || 909486 ||       || 909486\n' +
  '21/06/2022 ||        || -88993|| 820493\n' +
  '21/06/2022 || 658677 ||       || 1479170\n' +
  '21/06/2022 || 794867 ||       || 2274037\n' +
  '21/06/2022 ||        || -48677|| 2225360\n'

```
9. An error will be thrown if there are insufficient funds in the account i.e if the user tries to withdraw past 0

10. I have an alternate version on the main branch, which uses a a deposit and withdraw method instead of a single transact method. Use the command: 
```
git checkout main 

```

if you would like to try it out.

# Credit to github user naeglinghaff, from whom I borrowed the printStatement() table format. Repository address here: https://github.com/naeglinghaff/bank_tech_test/blob/master/src/statement.js
