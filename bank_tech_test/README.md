
## Process


### Initial Approach

My initial approach is one that could and will be improved in later projects, but The biggest problem was essentially a lack of planning. After reading through the criteria and understanding most of the process, I decided to begin with the proper test driven development process, but one that didn't take into account the hardest part of the task. That being the formatting of the bank statement. I started simple way of building a deposit and withdrawal method within an ATM class. From there, I included a string to show the date in a hard coded manner And arrived at the format statement class, realising I needed to do some re-planning.

After realising that there was a lot more I need to keep track of than just the current amount added or subtracted, some string dates and the balance, I went back to the drawing board. After this additional planning session, I decided to use an array of objects to store the relevant information as well as add a way of holding the date that was a bit more sophisticated. I feel this was the necessary part of the learning process and one of the big takeaways from this week. Do not rush the planning.

From this point on, thanks for this re-planning session, the rest of the task was relatively easy. After I had finished and began assessing my work, I realised that the methods I made were rather bloated. Some methods are around 12 lines long and they didn't need to be, so in order to use some clean coding principles, I began to re-factor. It turned out that some of my methods didn't need to be as big as they were, and could have some of the work outsourced to private classes.

Overall, I was rather pleased with my first attempt, although with only one class doing no small feat of a task, there was certainly room for improvement.

### Reworking the code after feedback:

### Today's Date

In order to fulfill the last of the criteria, I needed to add the ability to input the current dates and as a part of the transaction. Implementing this into the code wasn't much of a challenge. Thanks to the date class built into JavaScript. The real challenge came from being able to mock this within my testing environment to ensure that it works, this to quite a lot of googling in my search. I came across many different ways to mark the time, but none that helped me for my specific requirements until I stumbled across the documentation for jest. It turns out, just has a way of faking the time within the file itself and so it only took two methods to set the fake date, then use it to ensure my updated program is working correctly.

### Refactoring for multiple classes

The feedback I will gain from this will help me to know if this was worth the trouble of doing, but I have undergone some major re-factoring of the big single class that I had before the feedback. At first, I thought it would be best to make a new class with a simple constructor. But that didn't fill like an approach worth taking, a bit of a "copout" so to speak. So, I got the pen and paper out and drew a diagram of what I had already made with the single class. This included what each method does, how it calls to other methods and the types of information involved, and how they change.

This led me to decide to make a bank class.

One that creates simple objects that consist of an integer representing the transaction, as well as the dates. This information gets packaged up into Anne objects which can be transported to the new class statement. Within the statement class, the object is re-processed into the required format for the criteria as well as formatted to fit said criteria. I went back and forth a fair bit on the names of the classes, I wanted to stick to the ATM name of the class because re-factoring ATM itself felt like a daunting task, so I instead used it as a blueprint to make the new statements and I feel like it keeps the spirit of programming within OOP i.e. going to the bank to deposit and withdraw money then going to another place to get a statement. I feel like because of my approach I got to experiment with lots of ways that objects can be manipulated and I feel this was good practice as in the past, I felt like I would be over-reliant on using arrays to do the same thing. I've had a lot of fun with this, even if it has felt a bit laborious.

In case you're interested, my separation between the two classes boiled down to the way I created the objects. The below example, acted as a template for this.

Raw Transactions
{ DOT: date, moneyDiff : amount, balance : this.balance }

Formatted Transactions
{ DOT: newDate, credit : amount, debit : amount, balance : this.balance }

### Limitations

As previously mentioned, I'm not sure if my approach to class structure was what was entirely expected of me, but I believe it provides a unique way of practising working with objects. A tiny issue was the spacing for when a box like credit or debit doesn't have a value in it. I tried to have the area as a single space, but after two days of reworking this, I ran out of effort to resolve this but if you've seen my previous work, you know I'm capable of fixing this. 

## How to use

In case you want to interact with the ATM directly here are the setup instructions (these will be using node):

### When interacting with the ATM class
- Open a new terminal and navigate to the folder bank_tech_test
- type 'node' into the command line ('npm install node' if node command not recognised is returned)
- the first thing in node you need to run is 'const Bank = require('../lib/Bank');' followed by 'const accountName = new Bank'
- From here you can add the following methods to your account name in order to interact with your account in the following structure 'me.transaction()';
    - '.deposit(amount, year, month, day)' or '.deposit(amount, "today")' deposit or withdraw money (negative number for withdrawal and positive for deposit) 
        - You can choose if you want to input a specific date or todays date. If you want to use today's date, enter a string (or any data type that isn't a number)
    - '.printStatement()' prints your statement to the command line, respectively (ignore the '\n's)

### When testing jest

- Open a new terminal and navigate to the folder bank_tech_test
- check the test software is installed on the system by typing jest into the terminal. If the command is not found, type 'npm init' then 'npm install jest' into the terminal
- once jest is successfully set up, type in 'jest test/bank.test.js' or 'test/statement.test.js' into the terminal
