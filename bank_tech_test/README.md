## How to use

In case you want to interact with the ATM directly here are the setup instructions (these will be using node):

## Process



### When interacting with the ATM class
- Open a new terminal and navigate to the folder bank_tech_test
- type 'node' into the command line ('npm install node' if node command not recognised is returned)
- the first thing in node you need to run is 'const ATM = require('../lib/atm');' followed by 'const accountName = new ATM'
- From here you can add the following methods to your account name in order to interact with your account in the following structure 'cam.checkBalance()';
    - '.checkBalance()' check your balance
    - '.deposit(amount, year, month, day)' deposit money and optionally record the date of the transaction
    - '.withdraw(amount, year, month, day)' withdraw money and optionally record the date of the transaction
    - '.printStatement()' prints your statement to the command line, respectively (ignore the '\n's)

### When testing jest

- Open a new terminal and navigate to the folder bank_tech_test
- check the test software is installed on the system by typing jest into the terminal. If the command is not found, type 'npm init' then 'npm install jest' into the terminal
- once jest is successfully set up, type in 'jest test/atm.test.js' into the terminal