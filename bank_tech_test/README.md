## How to use

In case you want to interact with the ATM directly here are the setup instructions (these will be using node):

- Open a new terminal and navigate to the file atm.js is in
- type 'node' into the command line ('npm install node' if node command not recognised is returned)
- the first thing in node you need to run is 'const ATM = require('../lib/atm');' followed by 'const accountName = new ATM'
- From here you can add the following methods to your account name in order to interact with your account in the following structure 'cam.checkBalance()';
    - '.checkBalance()' check your balance
    - '.deposit(amount, year, month, day)' deposit money and optionally record the date of the transaction
    - '.withdraw(amount, year, month, day)' withdraw money and optionally record the date of the transaction
    - '.printStatement()' prints your statement to the command line, respectively (ignore the '\n's)