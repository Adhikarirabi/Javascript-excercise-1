const exerciseOne = require('../exercise-1');

test("test", () => {
    expect(true).toBe(true);
} );

// Add testing code for all the remaining functions you wrote in the exercise-1.js file

describe("tekCamp()", () => {

    test("existence of tekcamp()", () => {
        expect(exerciseOne.tekCamp()).toBe(undefined);        
    });

    test("tekCamp() console.logs with TEK at least once", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        // expect(console.log).toBeCalledTimes(10);
        expect(console.log).toHaveBeenCalledWith("TEK");
    });

    test("tekCamp() last console.log() is camp", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenLastCalledWith("camp");
    })

    test("tekCamp() on 3, console.log() TEK", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(3,"TEK");
    });

    test("tekCamp() on 4 console.logs 4", () => {
        console.log= jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(4,4);
    });

    test("tekCamp() on 1 console.logs 1 ", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(1,1);
    });

    test.skip("tekCamp() on 2 console.logs 2", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(2,"2");
    });

    test("tekCamp() on 15 console.logs 'TEKcamp' ", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(15,"TEKcamp");
    })

});


describe("canVote()", () => {

    test("canVote() returns false", () => {
        expect(exerciseOne.canVote(18)).toBe(false);
    })

    test("canVote(age = 21) returns true", () => {
        expect(exerciseOne.canVote(21)).toBe(true);
    } )

    test("canVote() without an age argument returns false", () => {
        expect(exerciseOne.canVote()).toBe(false);
    })


});


// YOUR CODE HERE.  follow the template below to flush out your tests.

describe("your function name ()", () => {

    test("test case #1", () => {

    });

    test("test case #2", () => {

    });

})









