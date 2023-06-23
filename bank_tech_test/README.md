## How to use

In case you want to interact with the ATM directly here are the setup instructions (these will be using node):

## Process

Raw Transactions
{ DOT: date, moneyDiff : amount, balance : this.balance }

Formatted Transactions
{ DOT: newDate, credit : amount, debit : amount, balance : this.balance }

Reworking the code after feedback:

Time

In order to fulfill the last of the criteria, I needed to add the ability to input the current dates and as a part of the transaction. Implementing this into the code wasn't much of a challenge. Thanks to the date class built into JavaScript. The real challenge came from being able to mock this within my testing environment to ensure that it works, this to quite a lot of googling in my search. I came across many different ways to mark the time, but none that helped me for my specific requirements until I stumbled across the documentation for jest. It turns out, just has a way of faking the time within the file itself and so it only took two methods to set the fake date, then use it to ensure my updated program is working correctly.

Refactoring for multiple classes

The feedback I will gain from this will help me to know if this was worth the trouble of doing, but I have undergone some major re-factoring of the big single class that I had before the feedback. At first, I thought it would be best to make a new class with a simple constructor. But that didn't fill like an approach worth taking, a bit of a "copout" so to speak. So, I got the pen and paper out and drew a diagram of what I had already made with the single class. This included what each method does, how it calls to other methods and the types of information involved, and how they change.

This led me to decide to make a bank class.

One that creates simple objects that consist of an integer representing the transaction, as well as the dates. This information gets packaged up into Anne objects which can be transported to the new class statement. Within the statement class, the object is re-processed into the required format for the criteria as well as formatted to fit said criteria. I went back and forth a fair bit on the names of the classes, I wanted to stick to the ATM name of the class because re-factoring ATM itself felt like a daunting task, so I instead used it as a blueprint to make the new statements and I feel like it keeps the spirit of programming within OOP i.e. going to the bank to deposit and withdraw money then going to another place to get a statement. I feel like because of my approach I got to experiment with lots of ways that objects can be manipulated and I feel this was good practice as in the past, I felt like I would be over-reliant on using arrays to do the same thing. I've had a lot of fun with this, even if it has felt a bit laborious.


## When interacting with the ATM class
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
