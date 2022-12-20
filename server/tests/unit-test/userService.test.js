//const { passwordCharConstrain, nameCharConstrain, fullName, errorMessage} = require('../../services/userService.js');
import { passwordCharConstrain, nameCharConstrain, fullName, errorMessage} from "../../services/userService.js";
import {expect, it, test,describe} from '@jest/globals';

test('Password for sign-in complies with constrains', () => {
    const pw1 = passwordCharConstrain("***");
    expect(pw1).toBe(false);
    const pw2 = passwordCharConstrain("********");
    expect(pw2).toBe(true);
});

test('Name for sign-in complies with constrains', () => {
    const name1 = nameCharConstrain("n");
    expect(name1).toBe(false);
    const name2 = nameCharConstrain("Eddy");
    expect(name2).toBe(true);
});

test('First and last name should combine to one', () => {
    const name = fullName("Dean", "Calypso");
    expect(name).toBe("Dean Calypso");
});

describe('Error message return value', () => {
    const existingUser = true
    const newUser = false

    it.each([
        [existingUser, "Ben", "Test", "1234567", "1234567", "User already exist"],
        [newUser, "B", "Test", "1234567", "1234567", "First name is invalid"],
        [newUser, "Ben", "T", "1234567", "1234567", "Last name is invalid"],
        [newUser, "Ben", "Test", "123456", "12345678", "Password doesnt match"],
        [newUser, "Ben", "Test", "123", "123", "Password is invalid"],
        [newUser, "Ben", "Test", "1234567", "1234567", false],

    ])("should return expected result when arguments are: %o,'%s','%s','%s','%s'", (user, firstName, lastName, password, confirmed, expected)=> {
        expect(errorMessage(user, firstName, lastName, password, confirmed)).toBe(expected)
    });
});