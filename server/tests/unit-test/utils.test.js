import { uppercaseFirst } from "../../utils/utils";
import {expect, it, describe} from '@jest/globals';

describe("Test", () =>{
    it("should make string uppercase", () =>{
        expect(uppercaseFirst("kasper")).toBe("Kasper")
    })
} )

//test