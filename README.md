# Solo_Challenges

Before starting the final engineering project at makers Academy, we had a week of solo challenges (as per the name of this repository). These involved various tasks that were means to reflect on our coding practices, and the test driven development approach that we had over the course of the project been perfecting. 

The bank tech test was the best example of this due to multiple re-factoring, and the re-factoring included:
- consolidating methods, so that the project was easier to read
- reformatting two, make this a multi class project as to better follow an object oriented programming approach
- increasing the amount of tests to improve coverage
- updating the README to better explain the process of said bank test

The Gilded Rose was a re-factoring project, that upon reflection, could be better redesigned given more time, and the Game of Life project was one that was beyond my means for creating from scratch at the time.

If you want to see this all in action, grab a local copy of the repository and run the following commands.

```
# Setup our environment to use node latest version
$ nvm use node

# Add the jest package to our project
# (this will update package.json and package-lock.json)
$ npm add jest

# Also install jest "globally"
# (this is so we can run the `jest` command)
$ npm install -g jest

# Run our tests
$ jest
```
