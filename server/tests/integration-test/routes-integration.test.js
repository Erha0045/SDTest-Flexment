import supertest from 'supertest';
import { app } from '../../index';
import { ObjectId } from 'mongodb';
import {expect, it,describe, jest} from '@jest/globals';

describe("Test get tasks", () => {
    jest.setTimeout(15000);

    it("should return", () => {
        supertest(app).get("/tasks").then((respons) => {
            expect(respons).not.toBe(null)
        })
    });

    it("should return a 200",  () => {
         supertest(app).get("/tasks").expect(200);
    });

});

describe("test get /:id", () =>{

    it("should return 200 OK from a specific task", () => {
        supertest(app).get(`/${ObjectId("637df6a4b706869a3b72ee29")}`).expect(200)
    })

})

describe("Test get users", () => {
    jest.setTimeout(15000);

    it("should return", () => {
        supertest(app).get("/users").then((respons) => {
            expect(respons).not.toBe(null)
        } )
    });

    it("should return a 200",  () => {
         supertest(app).get("/users").expect(200);
    });

});

describe("test get /:id", () =>{

    it("should return 200 OK from a specific user", () => {
        supertest(app).get(`/${ObjectId("637df653b706869a3b72ee25")}`).expect(200)
    })
})

//test