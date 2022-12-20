//const {calculateStartIndex, convertStringToArray} = require("../../services/taskService.js");
import { calculateStartIndex, convertStringToArray} from "../../services/taskService.js";
import {expect, test} from '@jest/globals';

test('Calculate starting index of every page', () => {
     const startIndex = calculateStartIndex(8, "3");
     expect(startIndex).toBe(16);
});


test('String to string array', () => {
     const programingLanguages = convertStringToArray("C#, Javascript, PHP, Ruby");
     expect(programingLanguages).toEqual(["C#", "Javascript", "PHP", "Ruby"])
});


