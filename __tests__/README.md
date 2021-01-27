# JavaScript Testing (Optional)

## ********************************************************
## Exercise Instructions

By this point, you should have completed the `exercise-1` assignment.  As developers working on production apps and projects however, code that has not been tested is a risk.  Tests provide a safety net for your code to allow you to freely refactor without worrying about breaking the function.

This assignment will give you exposure to writing tests.

This folder is named `__tests__` .  In this folder is a test file `exercise-1.test.js` that will be used for writing tests for the functions you wrote in the `exercise-1.js` file.  When you are testing your functions, you will be running the jest test runner, and not the actual code file.  At the bottom of the `exercise-1.js` is an exports object that is exporting a set of functions to be used by jest.  Put all your functions you write in the `exercise-1.js` file in that `module.exports` object to allow it to be used in the `exercise-1.test.js` file.  A couple of functions have already been tested in the test file to give you some guidance in how to test your remaining functions.  

To run the tests, simply type in <code>npm test</code> in the command line to start the jest test runner.  It will be in 'watch' mode, so whenever you make any change to your files, jest will run the tests again. 

Testing is something that will come easier with time and it is not expected that you be completely comfortable with it as you are learning the fundamentals of coding.  But as you do progress in your coding skill, you will realize the power and value of testing.

